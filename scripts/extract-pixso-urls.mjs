import fs from 'node:fs'
const j = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
const c = j[0].code
const re = /http:\/\/localhost:\d+\/assets\/([^"]+)"/g
const set = new Set()
let m
while ((m = re.exec(c))) set.add(m[1])
console.log([...set].join('\n'))
