import { afterLogin, authenticationService } from './../models/authentication-service';
import { LoggerIndexed } from "aurelia-store";
import environment from "environment";

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
 
@inject(Router)
export class StLogin {
  constructor(private router: Router) {}
  usernameOrEmail: string = ""
  password: string = ""
  hasFailed: boolean = false

  created() {
    authenticationService.nowLogin().then(alive => {
      if (alive) {
        location.href = environment.BASE_URL_FRONT + "/search_cards"
      }
    });
  }

  submitLogin() {
    authenticationService.login(this.usernameOrEmail, this.password)
    .then(isOk => {
      if (isOk) {
        if (afterLogin) {
          location.href = afterLogin
        } else {
          location.href = environment.BASE_URL_FRONT + "/search_cards"
        }
      } else {
        this.hasFailed = true;
      }
    })
  }

  goSignup() {
    this.router.navigateToRoute('signup');
  }
}
