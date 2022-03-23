STJJ.AICのフロントエンドです。  
GitHub Pagesにデプロイされます。

【開発環境構築】
1. Node.jsをインストールする。
  * ※バージョン記載はtodoだがおそらく最新版ならOK
  * ただしstjj-aic-serverの構築で済んでいる場合は不要
2. aurelia cliをインストールする。※npm install aurelia-cli -g
3. stjj-aic-serverをチェックアウトしたのと同じディレクトリに移動する
4. git clone git@github.com:scp-tcg-jp-j/scp-tcg-jp-j.github.io.git stjj-aic-front
5. cd stjj-aic-front
6. git fetch origin 【ブランチ名】
  * ブランチ名は開発対象で適宜決める
7. git checkout 【ブランチ名】
8. npm install
9. 証明書を配置する（STJJWikiのGoogle Driveからcert.zipをダウンロード・展開し、certフォルダをstjj-aic-frontと同列に配置）。
10. au run
11. https://localhost:8080にアクセスすると見られる
12. 停止はau runしたコンソールでCTRL+C
