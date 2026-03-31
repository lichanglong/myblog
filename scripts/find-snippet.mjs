import fs from 'node:fs'
const j = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
const c = j[0].code
const i = c.indexOf('vector-wrapper-2_613')
console.log(c.slice(Math.max(0, i - 50), i + 200))
