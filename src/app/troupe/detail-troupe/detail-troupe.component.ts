import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Troupe } from '../troupe';
import { TroupeTypeColorPipe } from "../troupe-type-color.pipe";
import { TroupeService } from '../troupe.service';

@Component({
  selector: 'app-detail-troupe',
  standalone: true,
  templateUrl: './detail-troupe.component.html',
  styleUrl: './detail-troupe.component.scss',
  imports: [NgIf, CommonModule, TroupeTypeColorPipe]
})
export class DetailTroupeComponent implements OnInit {
  ptroupeList!: Troupe[];
  troupe!: Troupe | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private troupeService: TroupeService) { }


  ngOnInit(): void {
    // on recupere l'id
    const troupeId: string | null = this.route.snapshot.paramMap.get('id');

    // si il y a bien un id (sinon id=undefined) (+ transforme string to number)
    if (troupeId) {
      this.troupe = this.troupeService.getTroupeById(+troupeId);
    }
  }
  goToTroupeList() {
    this.router.navigate(['/troupes']);
  }
}
