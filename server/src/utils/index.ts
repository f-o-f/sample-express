/* 
 *
 * 共通で使用するモジュールを定義する
 *
 */

export function filter(array: string[], key: string) {
  array.filter((value) => {
    return value == key
  })
}