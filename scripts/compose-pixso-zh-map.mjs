import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const keys = JSON.parse(fs.readFileSync(path.join(__dirname, 'pixso-all-strings.json'), 'utf8'))
const raw = fs.readFileSync(path.join(__dirname, 'pixso-zh-lines.txt'), 'utf8')
const lines = raw.split(/\r?\n/)

while (lines.length && lines[lines.length - 1] === '') lines.pop()

if (keys.length !== lines.length) {
  console.error('count mismatch', keys.length, lines.length)
  process.exit(1)
}

const o = Object.fromEntries(keys.map((k, i) => [k, lines[i]]))
fs.writeFileSync(path.join(__dirname, 'pixso-zh-map.json'), JSON.stringify(o, null, 2), 'utf8')
console.log('wrote pixso-zh-map.json', keys.length)
