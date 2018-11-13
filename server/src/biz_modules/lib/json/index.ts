/* 
 *
 * データアクセスは種類ごとにまとめる
 *
 */

import * as _class from "../class"
import * as fs from "fs"

const dir = '../../../../json/'

async function readFile(resources: string) {
  return JSON.parse(await fs.readFileSync(__dirname + dir + resources + '.json').toString())
}

async function writeFile(resources: string, data: any) {
  return await fs.writeFileSync(__dirname + dir + resources + '.json', data)
}

class json implements _class.dao {

  constructor() { }

  async setDoc(doc: _class.document) {
    return doc
  }

  async getDoc(id: _class.document['id']) {
    const documents: {
      documents: _class.document[]
    } = await readFile('documents')
    const docs = documents.documents.filter((value) => {
      return value.id == id
    })
    if (!docs.length) {
      return null
    }
    return docs[0]
  }

  async delDoc(id: _class.document['id']) {
    return
  }

  async putDoc(doc: _class.document) {
    return doc
  }

}

export = new json()