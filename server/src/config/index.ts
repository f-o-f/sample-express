/* 
 *
 * 起動環境によって変更となるパラメータは外出しにする
 *
 */

import * as config from 'config'

// 起動時にlistenするportとurlに使用するprefix
type webapp = {
  port: number
  prefix: string
}
export const webapp: webapp = config.get('webapp')

// 業務処理のルーティング設定
type ruter = {
  prefix: string
  dir: string
}
export const ruter: ruter[] = config.get('ruter')

// データの読み込み先
type dao = 'json' | 'db'
export const dao: dao = config.get('dao')