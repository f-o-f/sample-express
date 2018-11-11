type errorConfig = {
  name: string
  message: string
  status: number
}

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

export function createError(name: string, message?: string): Error {
  const errorConfig = errorConfigs.filter((value) => {
    return value.name == name
  })[0]
  const error = new BizError(errorConfig, message)
  return error
}

export function isBizError(name: string): boolean {
  const errorConfig = errorConfigs.filter((value) => {
    return value.name == name
  })
  return errorConfig.length > 0
}