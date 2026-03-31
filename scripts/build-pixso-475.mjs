/**
 * Pixso About node 2:475 → Vue SFC + mobile layout.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const jsonPath = process.argv[2]
if (!jsonPath) {
  console.error('Usage: node scripts/build-pixso-475.mjs <path-to-json>')
  process.exit(1)
}

const raw = fs.readFileSync(jsonPath, 'utf8')
const data = JSON.parse(raw)
const item = data.find((x) => x.guid === '2:475') ?? data[0]
if (!item?.code) {
  console.error('Invalid JSON')
  process.exit(1)
}

let code = item.code

const assetMap = [
  ['Frame_2_479.png', 'p479'],
  ['Frame_2_499.png', 'p499'],
  ['Frame_2_512.png', 'p512'],
  ['Frame_2_524.png', 'p524'],
  ['Frame_2_536.png', 'p536'],
  ['Frame_2_547.png', 'p547'],
  ['Frame_2_555.png', 'p555'],
  ['Frame_2_562.png', 'p562'],
  ['Frame_2_595.png', 'p595'],
  ['Frame_2_613.png', 'p613'],
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
  '<div id="2_613" class="vector-wrapper-2_613">\n                <div id="2_613" class="vector-2_613"></div>',
  '<div id="2_613" class="vector-wrapper-2_613">\n                <div class="vector-2_613"></div>',
)

code = code.replace(
  '<div class="scroll-container">',
  '<div class="scroll-container pixso-475-root" :style="pixso475Style">',
)

const imports = assetMap
  .map(([file, key]) => `import ${key} from '../../assets/pixso-475/${file}?url'`)
  .join('\n')

const styleBindings = assetMap
  .map(([, key]) => `  '--${key}': \`url(\${${key}})\`,`)
  .join('\n')

const scriptBlock = `<script setup lang="ts">
${imports}

const pixso475Style = {
${styleBindings}
} as Record<string, string>
</script>
`

code = code.replace('<script lang="ts" setup></script>', scriptBlock)

const mobileCss = `

.pixso-475-root {
    padding-left: env(safe-area-inset-left, 0px);
    padding-right: env(safe-area-inset-right, 0px);
    max-width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
}

.pixso-475-root.scroll-container {
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
}

.frame-2_475 {
    width: 100% !important;
    max-width: 390px;
    margin-inline: auto;
    box-sizing: border-box;
}

.pixso-475-root .vector-wrapper-2_613 {
    width: 100% !important;
    max-width: 100%;
    box-sizing: border-box;
}

@media (max-width: 420px) {
    .pixso-475-root {
        overflow-wrap: anywhere;
        word-break: break-word;
    }

    .frame-2_475 {
        max-width: 100% !important;
    }

    .pixso-475-root .frame-2_476 {
        padding-left: max(12px, env(safe-area-inset-left, 0px)) !important;
        padding-right: max(12px, env(safe-area-inset-right, 0px)) !important;
        padding-top: 96px !important;
    }

    .pixso-475-root .frame-2_477 {
        width: 100% !important;
        align-items: stretch !important;
    }

    .pixso-475-root .frame-2_478 {
        width: 100% !important;
        max-width: 100%;
    }

    .pixso-475-root .frame-2_479 {
        width: 100% !important;
        max-width: 100%;
        left: 0 !important;
        top: 0 !important;
        position: relative !important;
        height: auto !important;
        min-height: 220px;
        aspect-ratio: 342 / 427.5;
    }

    .pixso-475-root .vector-wrapper-2_613 {
        left: 0 !important;
    }

    .pixso-475-root [class^="text-2_"] {
        max-width: 100% !important;
        box-sizing: border-box;
        height: auto !important;
    }

    .pixso-475-root .text-2_484 {
        font-size: clamp(1.75rem, 7vw, 2.5rem) !important;
        line-height: 1.15 !important;
    }

    .pixso-475-root .text-2_484 [class^="span-2_484"] {
        font-size: inherit !important;
        line-height: inherit !important;
    }
}
`

code = code.replace('</style>', `${mobileCss}\n</style>`)

const outPath = path.join(root, 'src/components/pixso/PixsoAboutMeFrame.vue')
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, code, 'utf8')
console.log('Wrote', outPath)
