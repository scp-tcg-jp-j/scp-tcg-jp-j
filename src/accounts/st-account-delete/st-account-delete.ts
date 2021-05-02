import environment from 'environment';
import { authenticationService } from './../../models/authentication-service';

export class StAccountDelete {
  password: string = ""

  created() {
    authenticationService.nowLogin().then(alive => {
      if (!alive) {
        location.href = environment.BASE_URL_FRONT + "/#/search_cards"
      }
    })
  }

  submitAccountDelete() {
    const body = JSON.stringify( { password: this.password } )
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(environment.BASE_URL + "/account_delete", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: 'include' })
    .then((response) => {
      if (response.ok) {
        alert("アカウントを削除しました。ご愛顧いただきありがとうございました。");
        location.href = environment.BASE_URL_FRONT
      } else {
        alert("アカウント削除に失敗しました。必要に応じてもう一度操作してください");
      }
    });
  }
}
