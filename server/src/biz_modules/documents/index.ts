/* 
 *
 * 業務処理のルーティング
 * 
 */

import express = require("express")
const ruter = express.Router()

// all は全メソッドで呼ばれる処理
// * はすべてのurlに対して有効の意味
ruter.all(['*'], (_req, _res, next) => {
  // next を呼ぶことで次のフレームワークに処理を渡す
  next()

  // フレームワーク間でアイテムをやりとししたい場合は以下を使用する
  // * アイテムセット
  //   req.app.set('name', item)
  // * アイテムゲット
  //   req.app.get('name')

})

// メソッド名はhttp Requestのメソッドに対応
ruter.get('/', async (req, res, next) => {
  try {
    // 業務処理呼び出し
    const service = require('./ap/get-list')
    const response = await service(req.body, req.query, req.params)

    // http status 設定
    // http status は規約（RESTapi等）に沿って設計すること
    res.status(201)

    // Response Body設定
    res.send(response)
  } catch (err) {

    // next に引数を渡すことでエラーハンドリングに処理が渡る
    next(err)
  }
})

// url に : をつけることでparamsとして取得可能 => ここでは req.params.id
ruter.get('/:id', async (req, res, next) => {
  try {
    const service = require('./ap/get')
    const response = await service(req.body, req.query, req.params)
    res.status(201)
    res.send(response)
  } catch (err) {
    next(err)
  }
})

ruter.post('/', async (req, res, next) => {
  try {
    const service = require('./ap/create')
    const response = await service(req.body, req.query, req.params)
    res.status(201)
    res.send(response)
  } catch (err) {
    next(err)
  }
})

ruter.put('/:id', async (req, res, next) => {
  try {
    const service = require('./ap/update')
    const response = await service(req.body, req.query, req.params)
    res.status(200)
    res.send(response)
  } catch (err) {
    next(err)
  }
})

ruter.delete('/:id', async (req, res, next) => {
  try {
    const service = require('./ap/delete')
    const response = await service(req.body, req.query, req.params)
    res.status(204)
    res.send(response)
  } catch (err) {
    next(err)
  }
})

export = ruter