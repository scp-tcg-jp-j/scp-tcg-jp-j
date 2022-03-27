import environment from "environment";

// アカウント関連のサービス
export class AccountService {

  // メールアドレス変更
  public emailChange(email: string) {
    // APIへのリクエストボディ
    const body = JSON.stringify( { email: email } );
    // APIへのリクエストヘッダ
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    // APIへのリクエスト
    return fetch(environment.BASE_URL + "/login", { method: 'POST', headers: headers, body: body, mode: 'cors', credentials: 'include' })
    .then(response => response.json())
    .then((json) => {
      if (json.result == "ok") {
        // 成功時処理
        return true;
      } else {
        // 失敗時処理
        return false;
      }
    });
  }
}
