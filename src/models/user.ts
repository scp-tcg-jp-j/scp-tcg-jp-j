// todo: 必要ならユーザーと管理者で分ける
export class User {
  constructor(
    public _id: string,
    public username: string,
    public email: string,
    public role: string,
    public banned: boolean,
    // todo: createdが必要ならこっちにも入れる
  ) {}
}
