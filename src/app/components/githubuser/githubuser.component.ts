import { Component, OnInit, Input } from '@angular/core';
import { faUsers, faMap, faCode, faCalendar } from '@fortawesome/free-solid-svg-icons';

import { GithubUser } from 'src/app/GithubUser';

@Component({
  selector: 'app-githubuser',
  templateUrl: './githubuser.component.html',
  styleUrls: ['./githubuser.component.scss']
})
export class GithubuserComponent implements OnInit {
  faUsers = faUsers;
  faMap = faMap;
  faCode = faCode;
  faCalendar = faCalendar;

  @Input() githubUser!: GithubUser;

  constructor() { }

  ngOnInit(): void {
  }

}
