/* 
 *
 * 業務処理
 * 
 */

import * as lib from '../../lib'

// インターフェイス定義をtypeで定義する
type body = {}
type query = {}
type params = {
  id: string
}
type result = {
  value: lib._class.document
}

// 業務処理内ではフレームワーク(express)を意識した処理を記載しないこと
export = async (body: body, query: query, params: params): Promise<result> => {
  const dcuments = await lib.dao.getDoc(params.id)
  if (!dcuments) {
    throw lib.error.createError('NOT_FOUND', 'document not found')
  }
  return {
    value: dcuments
  }
}