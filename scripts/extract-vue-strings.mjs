import fs from 'node:fs'

const file = process.argv[2]
const s = fs.readFileSync(file, 'utf8')
const set = new Set()

let pos = 0
while (pos < s.length) {
  const start = s.indexOf('{{', pos)
  if (start === -1) break
  const end = s.indexOf('}}', start + 2)
  if (end === -1) break
  const inner = s.slice(start + 2, end).trim()
  const q = inner[0]
  if ((q === '"' || q === "'") && inner.endsWith(q)) {
    const body = inner.slice(1, -1)
    if (body.length && !/^\s*$/.test(body)) set.add(body)
  }
  pos = end + 2
}

const list = [...set].sort((a, b) => b.length - a.length)
console.log(JSON.stringify(list, null, 2))
