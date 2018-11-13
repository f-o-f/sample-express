/* 
 *
 * 認証処理のルーティング
 *
 */

import express = require("express")
const ruter = express.Router()

// getRequest時はloginページを返却
ruter.get(['/', '/login'], async (_req, res, _next) => {
  res.locals.message = ''
  res.render('login')
})

// postRequest時は業務処理ページを返却
ruter.post('/login', async (req, res, next) => {
  const body: body = req.body
  try {
    // サンプルなのでjsonを直接読んでいるがDB化すること
    const users: user[] = require('../../json/users.json').users
    const user = users.filter((value, _index, _self) => {
      return value.userId == body.username
    })
    if (user.length > 0 && user[0].password == body.password) {
      // サンプルなのでページのみ返却しているがjwt(json web token)も返却し
      // 業務処理ごとにtoken検証を行うこと
      res.render('index')
    }
    res.locals.message = 'Authentication error'
    res.render('login')
  } catch (err) {
    next(err)
  }
})

export = ruter

type body = {
  username: string
  password: string
}

type user = {
  name: string
  password: string
  userId: string
}