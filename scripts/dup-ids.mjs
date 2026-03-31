import fs from 'node:fs'
const j = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
const t = j[0].code.split('</template>')[0]
const ids = [...t.matchAll(/id="([^"]+)"/g)].map((x) => x[1])
const c = {}
for (const i of ids) c[i] = (c[i] || 0) + 1
for (const [i, n] of Object.entries(c)) {
  if (n > 1) console.log(i, n)
}
