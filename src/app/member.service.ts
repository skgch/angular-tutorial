import { Injectable } from '@angular/core';

import { Member } from './member';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MemeberService {

  membersUrl = 'api/members';

  constructor(private http: Http) { }

  getMembers(): Promise<Member[]> {
    return this.http.get(this.membersUrl)
      .toPromise()
      .then(response => response.json().data as Member[])
      .catch(this.HandleError);
  }

  getMember(id: number): Promise<Member> {
    return this.getMembers()
      .then(members => members.find(member => member.id === id));
  }

  private HandleError(error: any): Promise<any> {
    console.log('エラー', error);
    return Promise.reject(error.message || error);
  }
}
