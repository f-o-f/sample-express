# sample-express

## 環境整備

### instrall

- nvm,node,npm
  - nvm は使用する node のバージョンを管理してくれるソフトウェア
  - https://qiita.com/idani/items/53567d92f936846e111c
- vscode
  - コードエディタ、日本語化もできる
  - https://code.visualstudio.com/
- git
  - バージョン管理
  - https://git-scm.com/
- typescript
  - npm install -g typescript
  - https://docs.solab.jp/typescript/first/install/

### version

- node v8.9.4
- typescript v3.1.4

## 構成

### client(未作成)

- riot や react を使用したSingle Page Application
- webpack を用いてバンドルする
  - バンドル ・・・ 画面資産を1つにまとめて通信の効率化を図る
- バンドルした資産は server の dist に入れる

### server

- express を使用した webAP server
- typescript で記述する
- REST api を意識して作成する
