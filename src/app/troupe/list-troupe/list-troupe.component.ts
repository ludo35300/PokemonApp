import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Troupe } from '../troupe';
import { BorderCardDirective } from '../border-card.directive';
import { TroupeTypeColorPipe } from '../troupe-type-color.pipe';
import { Router } from '@angular/router';
import { TroupeService } from '../troupe.service';

@Component({
  selector: 'app-list-troupe',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    BorderCardDirective,
    TroupeTypeColorPipe
  ],
  templateUrl: './list-troupe.component.html',
  styleUrl: './list-troupe.component.scss'
})

export class ListTroupeComponent {
  troupeList!: Troupe[];

  constructor(private router: Router, private troupeService: TroupeService) { }

  ngOnInit() {
    this.troupeList = this.troupeService.getTroupeList();
  }

  goToTroupe(troupe: Troupe) {
    this.router.navigate(['/troupe/', troupe.id])
  }
}
