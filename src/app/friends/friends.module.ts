import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { FriendFormComponent } from './friend-form/friend-form.component';



@NgModule({
  declarations: [FriendsPageComponent, FriendFormComponent],
  imports: [
    CommonModule
  ]
})
export class FriendsModule { }
