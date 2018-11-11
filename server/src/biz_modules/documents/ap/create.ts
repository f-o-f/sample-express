import * as lib from '../../../lib'

type body = {}
type query = {}
type params = {}
type result = {
  value: string
}

export = async (body: body, query: query, params: params): Promise<result> => {

  throw lib.error.createError('NOT_FOUND')

  return {
    value: ''
  }
}