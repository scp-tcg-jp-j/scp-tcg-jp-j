import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';

export class StPasswordReset {
  email: string = "";

  created() {
    authenticationService.nowLogin().then(alive => {
      if (alive) {
        location.href = environment.BASE_URL_FRONT + "/#/search_cards";
      }
    });
  }

  submitPasswordReset() {
    const body = JSON.stringify( { email: this.email } )
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/password_reset", { method: 'POST', headers: headers, body: body, mode: 'cors' })
    .then((response) => {
      if (response.ok) {
        alert("確認用のメールを送信しました。メールボックスをご確認ください。");
      } else {
        alert("送信に失敗しました。必要に応じてもう一度操作してください");
      }
    });
  }
}
