export function filter(array: string[], key: string) {
  array.filter((value) => {
    return value == key
  })
}