export interface Book {
  title: string,
  isbn: string,
  author: string,
  [rest: string]: any
}
