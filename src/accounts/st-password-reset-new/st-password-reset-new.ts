import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';

export class StPasswordResetNew {
  password: string = "";
  token: string = "";

  created() {
    authenticationService.nowLogin().then(alive => {
      if (alive) {
        location.href = environment.BASE_URL_FRONT + "/#/search_cards"
      }
    });
  }

  activate(params: any) {
    this.token = params.token
  }

  submitPasswordReset() {
    const body = JSON.stringify( { password: this.password, token: this.token } );
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/password_reset_new", { method: 'POST', headers: headers, body: body, mode: 'cors' })
    .then((response) => {
      if (response.ok) {
        alert("パスワードをリセットしました。新しいパスワードでログインしてください。");
        location.href = environment.BASE_URL_FRONT + "/#/login";
      } else {
        alert("リセットに失敗しました。必要に応じてもう一度操作してください");
      }
    });
  }
}
