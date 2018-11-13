import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as queryParser from 'express-query-parser'
import * as net from 'net'

import * as login from './outh'
import * as config from './config'
import * as lib from './lib'

// サーバAPの作成
const app = express()

// サーバAPへparserの設定
app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(queryParser({ parseNull: true, parseBoolean: true }))

// view の場所を指定
app.set('views', __dirname + '../../dist')

// テンプレートエンジンの指定
app.set('view engine', 'ejs')

// login moduleのルーティング
app.use(login)

// moduleのルーティング
const ruter = express.Router()
config.ruter.forEach((element) => {
  ruter.use(element.prefix, require(element.dir))
  // サンプルなのでtoken検証なしだが業務処理ごとに検証を行うこと
  // 以下のようになる想定
  // ruter.use(element.prefix, [token検証ミドルウェア],require(element.dir))
})
app.use(config.webapp.prefix, ruter)

// ルーティングされていない場合の処理
app.use((req, res, _next) => {
  res.status(404).end('notfound! : ' + req.path)
})

// エラーハンドリング(nextに引数を渡したときに処理が移る)
app.use((err: lib.error.BizError, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.message)
  let status = 500
  // 業務エラー時は指定のステータスを設定
  if (lib.error.isBizError(err.name)) {
    status = err.status
  }
  res.status(status).end(err.message)
})

// サーバの起動
const server = app.listen(config.webapp.port, () => {
  // as はキャスト
  console.log('http://localhost:' + (server.address() as net.AddressInfo).port)
})