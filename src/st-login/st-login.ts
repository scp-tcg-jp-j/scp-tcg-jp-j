import { afterLogin, authenticationService } from './../models/authentication-service';
import { LoggerIndexed } from "aurelia-store";
import environment from "environment";

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
 
@inject(Router)
export class StLogin {
  constructor(private router: Router) {}
  usernameOrEmail: string   = "";
  password:        string   = "";
  errors:          string[] = [];

  created() {
    authenticationService.syncLoginStatus().then(alive => {
      if (alive) {
        location.href = environment.BASE_URL_FRONT + "/search_cards";
      }
    });
  }

  submitLogin() {
    authenticationService.login(this.usernameOrEmail, this.password)
    .then(json => {
      if (afterLogin) {
        location.href = afterLogin;
      } else {
        location.href = environment.BASE_URL_FRONT + "/search_cards";
      }
    }).catch((reason) => {
      this.errors = reason as string[];
    });
  }

  goSignup() {
    this.router.navigateToRoute('signup');
  }
}
