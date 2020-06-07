import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent implements OnInit {

  pageTitle = 'Add a friend, ';

  constructor() { }

  ngOnInit(): void {
  }

}
