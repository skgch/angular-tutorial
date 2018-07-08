import { Injectable } from '@angular/core';

import { Member } from './member';
import { MEMBERS } from './mock-members';

@Injectable()
export class MemeberService {

  getMembers(): Promise<Member[]> {
    return Promise.resolve(MEMBERS);
  }

}
