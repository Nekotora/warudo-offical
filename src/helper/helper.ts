export function getRandom (n: number, m: number) {
  var num = Math.floor(Math.random() * (m - n + 1) + n)
  return num
}