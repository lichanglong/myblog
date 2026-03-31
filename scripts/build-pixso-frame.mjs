/**
 * Reads Pixso design_to_code JSON (array with { code }) and writes a Vue SFC
 * with local asset URLs via CSS variables (works with any Vite base).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const jsonPath = process.argv[2]
if (!jsonPath) {
  console.error('Usage: node scripts/build-pixso-frame.mjs <path-to-json>')
  process.exit(1)
}

const raw = fs.readFileSync(jsonPath, 'utf8')
const data = JSON.parse(raw)
const item = data[0]
if (!item?.code) {
  console.error('Invalid JSON: missing [0].code')
  process.exit(1)
}

let code = item.code

const assetMap = [
  ['Frame_2_310.png', 'pixso310'],
  ['Frame_2_322.png', 'pixso322'],
  ['Frame_2_341.png', 'pixso341'],
  ['Frame_2_356.png', 'pixso356'],
  ['Frame_2_371.png', 'pixso371'],
  ['Frame_2_386.png', 'pixso386'],
  ['Frame_2_401.png', 'pixso401'],
  ['Frame_2_416.png', 'pixso416'],
  ['Frame_2_456.png', 'pixso456'],
  ['Frame_2_458.png', 'pixso458'],
  ['Frame_2_460.png', 'pixso460'],
  ['Frame_2_465.png', 'pixso465'],
]

for (const [file, varName] of assetMap) {
  const escaped = file.replaceAll('.', String.raw`\.`)
  const rx = new RegExp(
    String.raw`url\("http://localhost:\d+/assets/[^"]+/${escaped}"\)`,
    'g',
  )
  code = code.replace(rx, `var(--${varName})`)
}

code = code.replace(/font-weight:\s*Black;/g, 'font-weight: 900;')
code = code.replace(/font-weight:\s*Regular;/g, 'font-weight: 400;')
code = code.replace(/font-weight:\s*Bold;/g, 'font-weight: 700;')

code = code.replaceAll('"Inter-Bold"', '"Inter"')
code = code.replaceAll('"Inter-Regular"', '"Inter"')
code = code.replaceAll('"Noto Serif-Black"', '"Noto Serif"')
code = code.replaceAll('"Noto Serif-Bold"', '"Noto Serif"')

code = code.replace(
  '<div id="2_465" class="vector-wrapper-2_465">\n                <div id="2_465" class="vector-2_465"></div>',
  '<div id="2_465" class="vector-wrapper-2_465">\n                <div class="vector-2_465"></div>',
)

code = code.replace(
  '.frame-2_324 {\n    width: 342px;\n    height: 46px;\n    overflow: hidden;',
  '.frame-2_324 {\n    width: 342px;\n    height: 46px;\n    overflow-x: auto;\n    overflow-y: hidden;',
)

const imports = assetMap
  .map(([file, key]) => `import ${key} from '../../assets/pixso/${file}?url'`)
  .join('\n')

const styleBindings = assetMap
  .map(([, key]) => `  '--${key}': \`url(\${${key}})\`,`)
  .join('\n')

const scriptBlock = `<script setup lang="ts">
${imports}

const pixsoFrameStyle = {
${styleBindings}
} as Record<string, string>
</script>
`

code = code.replace('<script lang="ts" setup></script>', scriptBlock)
code = code.replace(
  '<div class="scroll-container">',
  '<div class="scroll-container" :style="pixsoFrameStyle">',
)

const outPath = path.join(root, 'src/components/pixso/PixsoEditorialFrame.vue')
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, code, 'utf8')
console.log('Wrote', outPath)
