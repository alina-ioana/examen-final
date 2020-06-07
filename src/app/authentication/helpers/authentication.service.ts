import {Injectable} from "@angular/core";
import User from "./UserInterface";
import users from "./users";



interface Credentials {
  username: string;
  password: string;
}

@Injectable()
export class AuthenticationService {

  private users: User[];

  constructor() {
    this.initUsers();
  }

  public authenticate(credentials: Credentials): User|string {
    const user = this.users.find(user => user.username === credentials.username);
    if(!user) {
      return 'This user does not exist.';
    }
    if (user.password === credentials.password) {
      return user;
    } else {
      return 'Invalid credentials!';
    }
  }

  private initUsers(): void {
    this.users = users;
  }
}
