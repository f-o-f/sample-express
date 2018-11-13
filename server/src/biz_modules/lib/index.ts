/* 
 *
 * 業務的なクラス・type定義や共通ライブラリのラッパー
 *
 */

import lib = require('../../lib')
export const error = lib.error

import * as config from '../../config'
export import _class = require('./class')
export const dao: _class.dao = require('./' + config.dao) 
