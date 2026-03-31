/**
 * Pixso article detail node 2:622 → Vue SFC + mobile layout.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const jsonPath = process.argv[2]
if (!jsonPath) {
  console.error('Usage: node scripts/build-pixso-622.mjs <path-to-json>')
  process.exit(1)
}

const raw = fs.readFileSync(jsonPath, 'utf8')
const data = JSON.parse(raw)
const item = data.find((x) => x.guid === '2:622') ?? data[0]
if (!item?.code) {
  console.error('Invalid JSON')
  process.exit(1)
}

let code = item.code

const assetMap = [
  ['Frame_2_634.png', 'p634'],
  ['Frame_2_641.png', 'p641'],
  ['Frame_2_657.png', 'p657'],
  ['Frame_2_663.png', 'p663'],
  ['Frame_2_671.png', 'p671'],
  ['80ecf37502247e77f9e803dcba12e59b.png', 'p80'],
  ['Frame_2_714.png', 'p714'],
  ['Frame_2_721.png', 'p721'],
  ['Frame_2_728.png', 'p728'],
  ['Frame_2_748.png', 'p748'],
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
code = code.replace(/font-weight:\s*Medium;/g, 'font-weight: 500;')
code = code.replace(/font-weight:\s*Semi Bold;/g, 'font-weight: 600;')

code = code.replaceAll('"Inter-Bold"', '"Inter"')
code = code.replaceAll('"Inter-Medium"', '"Inter"')
code = code.replaceAll('"Inter-Regular"', '"Inter"')
code = code.replaceAll('"Noto Serif-Black"', '"Noto Serif"')
code = code.replaceAll('"Noto Serif-Bold"', '"Noto Serif"')
code = code.replaceAll('"Noto Serif-Regular"', '"Noto Serif"')
code = code.replaceAll('"Noto Serif-Regular Italic"', '"Noto Serif"')

code = code.replace(
  '<div id="2_748" class="vector-wrapper-2_748">\n                <div id="2_748" class="vector-2_748"></div>',
  '<div id="2_748" class="vector-wrapper-2_748">\n                <div class="vector-2_748"></div>',
)

code = code.replace(
  '<div class="scroll-container">',
  '<div class="scroll-container pixso-622-root" :style="pixso622Style">',
)

const imports = assetMap
  .map(([file, key]) => `import ${key} from '../../assets/pixso-622/${file}?url'`)
  .join('\n')

const styleBindings = assetMap
  .map(([, key]) => `  '--${key}': \`url(\${${key}})\`,`)
  .join('\n')

const scriptBlock = `<script setup lang="ts">
${imports}

const pixso622Style = {
${styleBindings}
} as Record<string, string>
</script>
`

code = code.replace('<script lang="ts" setup></script>', scriptBlock)

const mobileCss = `

.pixso-622-root {
    padding-left: env(safe-area-inset-left, 0px);
    padding-right: env(safe-area-inset-right, 0px);
    max-width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
}

.pixso-622-root.scroll-container {
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
}

.frame-2_622 {
    width: 100% !important;
    max-width: 390px;
    margin-inline: auto;
    box-sizing: border-box;
}

@media (max-width: 420px) {
    .pixso-622-root {
        overflow-wrap: anywhere;
        word-break: break-word;
    }

    .frame-2_622 {
        max-width: 100% !important;
        padding-left: max(12px, env(safe-area-inset-left, 0px)) !important;
        padding-right: max(12px, env(safe-area-inset-right, 0px)) !important;
        padding-top: 72px !important;
    }

    .pixso-622-root .frame-2_623 {
        width: 100% !important;
        align-items: stretch !important;
    }

    .pixso-622-root .frame-2_624 {
        width: 100% !important;
        max-width: 100% !important;
    }

    .pixso-622-root .vector-wrapper-2_748 {
        width: 100% !important;
        max-width: 100% !important;
        left: 0 !important;
        box-sizing: border-box;
    }

    .pixso-622-root .text-2_631 {
        font-size: clamp(1.75rem, 7.5vw, 3rem) !important;
        line-height: 1.12 !important;
        width: 100% !important;
        height: auto !important;
    }

    .pixso-622-root .text-2_631 [class^="span-2_631"] {
        font-size: inherit !important;
        line-height: inherit !important;
    }

    .pixso-622-root [class^="text-2_"] {
        max-width: 100% !important;
        box-sizing: border-box;
    }
}
`

code = code.replace('</style>', `${mobileCss}\n</style>`)

const outPath = path.join(root, 'src/components/pixso/PixsoArticleDetailFrame.vue')
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, code, 'utf8')
console.log('Wrote', outPath)
