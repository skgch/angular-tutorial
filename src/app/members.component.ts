import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from './member';
import { MemeberService } from './member.service';

@Component({
  selector: 'my-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[];
  selectedMember: Member;

  constructor(
    private memberService: MemeberService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  getMembers(): void {
    this.memberService.getMembers()
      .then(members => this.members = members);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.memberService.create(name)
      .then(member => {
        this.members.push(member);
        this.selectedMember = null;
      });
  }

  delete(member: Member): void {
    this.memberService.delete(member.id)
      .then(() => {
        this.members = this.members.filter(m => m !== member);
        if (member === this.selectedMember) {
          this.selectedMember = null;
        }
      });
  }

  gotoDetail() {
    this.router.navigate(['./detail', this.selectedMember.id]);
  }
}
