import { Component, OnInit } from '@angular/core';
import { MemeberService } from './member.service';
import { Member } from './member';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent  implements OnInit {

  members: Member[];

  constructor(private memberService: MemeberService) { }

  ngOnInit() {
    this.memberService.getMembers()
      .then(members => this.members = members.slice(1, 5));
  }

}
