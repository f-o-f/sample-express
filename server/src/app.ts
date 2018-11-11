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

// login moduleのルーティング
app.use(login)

// moduleのルーティング
const ruter = express.Router()
config.ruter.forEach((element) => {
  ruter.use(element.prefix, require(element.dir))
})
app.use(config.webapp.prefix, ruter)

// ルーティングされていない場合の処理
app.use((req, res, _next) => {
  res.status(404).end('notfound! : ' + req.path)
})

// エラーハンドリング
app.use((err: lib.error.BizError, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.message)
  let status = 500
  if (lib.error.isBizError(err.name)) {
    status = err.status
  }
  res.status(status).end(err.message)
})

// サーバの起動
const server = app.listen(config.webapp.port, () => {
  console.log('http://localhost:' + (server.address() as net.AddressInfo).port)
})