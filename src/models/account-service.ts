import environment from "environment";

export class AccountService {
  public emailChange(email: string) {
    // todo: メール飛ばして確認するフロー
    const body = JSON.stringify( { email: email } )
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    return fetch(environment.BASE_URL + "/login", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: 'include' })
    .then(response => response.json())
    .then((json) => {
      if (json.result == "ok") {
        return true;
      } else {
        return false;
      }
    });
  }
}
