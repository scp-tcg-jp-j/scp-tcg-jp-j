import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';

export class StSignupPassword {
  password: string = "";
  token: string = "";
  errors: string[] = [];

  created() {
    authenticationService.syncLoginStatus().then(alive => {
      if (alive) {
        location.href = environment.BASE_URL_FRONT + "/#/search_cards";
      }
    })
  }

  activate(params: any) {
    this.token = params.token;
  }

  submitSignup() {
    const body = JSON.stringify( { password: this.password, token: this.token } );
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/signup_password", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: 'include' })
    .then((response) => {
      if (response.ok) {
        alert("アカウントを作成しました。");
        location.href = environment.BASE_URL_FRONT;
      } else {
        response.json().then(json => {
          this.errors = (json.errors as { msg: string }[]).map(item => item.msg);
        });
      }
    });
  }
}
