/* 
 *
 * 業務処理
 * 
 */

// インターフェイス定義をtypeで定義する
type body = {}
type query = {}
type params = {}
type result = {
  value: string
}

// 業務処理内ではフレームワーク(express)を意識した処理を記載しないこと
export = async (body: body, query: query, params: params): Promise<result> => {

  return {
    value: ''
  }
}