import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const mapPath = path.join(__dirname, 'pixso-zh-map.json')
const map = JSON.parse(fs.readFileSync(mapPath, 'utf8'))

const files = [
  'src/components/pixso/PixsoAboutMeFrame.vue',
  'src/components/pixso/PixsoEditorialFrame.vue',
  'src/components/pixso/PixsoResearchMobileFrame.vue',
  'src/components/pixso/PixsoArticleDetailFrame.vue',
]

const keys = Object.keys(map).sort((a, b) => b.length - a.length)

function replaceQuoted(s, en, zh) {
  let out = s
  const dq = `"${en}"`
  if (out.includes(dq)) out = out.split(dq).join(`"${zh}"`)
  const sq = `'${en}'`
  if (out.includes(sq)) out = out.split(sq).join(`'${zh}'`)
  return out
}

for (const rel of files) {
  const fp = path.join(root, rel)
  let s = fs.readFileSync(fp, 'utf8')
  for (const en of keys) {
    const zh = map[en]
    if (zh == null || zh === '') continue
    s = replaceQuoted(s, en, zh)
  }
  fs.writeFileSync(fp, s, 'utf8')
  console.log('updated', rel)
}
