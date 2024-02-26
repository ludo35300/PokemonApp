import { Injectable } from '@angular/core';
import { Troupe } from './troupe';
import { TROUPES } from './mock.troupe';

@Injectable()

export class TroupeService {

  getTroupeList(): Troupe[] {
    return TROUPES;
  }
  getTroupeById(troupeId: number): Troupe | undefined {
    return TROUPES.find(troupe => troupe.id == troupeId)
  }
  getTroupeTypeList(): string[] {
    return ['Elixir', 'Elixir Noir'];
  }


}
