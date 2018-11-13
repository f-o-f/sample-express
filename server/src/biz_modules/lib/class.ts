/* 
 *
 * 業務的なクラス・type定義
 *
 */

export type document = {
  id: string
  name: string
  contents: any
}

export interface dao {
  setDoc: (doc: document) => Promise<document>
  getDoc: (id: document['id']) => Promise<document>
  putDoc: (doc: document) => Promise<document>
  delDoc: (id: document['id']) => Promise<void>
}