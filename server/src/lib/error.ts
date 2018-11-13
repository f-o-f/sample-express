/* 
 *
 * エラーハンドリング
 *
 */
type errorConfig = {
  name: string
  message: string
  status: number
}

// エラーはここに追加し、呼び出し時はnameだけ意識する
const errorConfigs: errorConfig[] = [
  {
    name: 'NOT_FOUND',
    message: 'Item is not found',
    status: 404
  },
  {
    name: 'INTERNAL_SERVER_ERROR',
    message: 'Internal Server Error',
    status: 500
  }
]

export class BizError extends Error {
  status: number
  constructor(errorConfig: errorConfig, message?: string) {
    super(message || errorConfig.message)
    this.status = errorConfig.status
    this.name = errorConfig.name
  }
}

// nameからエラーオブジェクトを作成する。messageを引数に保つ場合はmessageをエラーオブジェクトに設定する
export function createError(name: string, message?: string): Error {
  const errorConfig = errorConfigs.filter((value) => {
    return value.name == name
  })[0]
  const error = new BizError(errorConfig, message)
  return error
}

// 定義されているエラーかどうかの判定
export function isBizError(name: string): boolean {
  const errorConfig = errorConfigs.filter((value) => {
    return value.name == name
  })
  return errorConfig.length > 0
}