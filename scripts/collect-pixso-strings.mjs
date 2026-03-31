import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

function extract(s) {
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
  return set
}

const files = [
  'src/components/pixso/PixsoAboutMeFrame.vue',
  'src/components/pixso/PixsoEditorialFrame.vue',
  'src/components/pixso/PixsoResearchMobileFrame.vue',
  'src/components/pixso/PixsoArticleDetailFrame.vue',
]

const all = new Set()
for (const f of files) {
  const s = fs.readFileSync(path.join(root, f), 'utf8')
  for (const x of extract(s)) all.add(x)
}

const list = [...all].sort((a, b) => b.length - a.length)
fs.writeFileSync(path.join(root, 'scripts/pixso-all-strings.json'), JSON.stringify(list, null, 2), 'utf8')
console.log('count', list.length)
