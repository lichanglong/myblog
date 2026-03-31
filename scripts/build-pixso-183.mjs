/**
 * Pixso node 2:183 → Vue SFC with local ?url imports + mobile overrides.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const jsonPath = process.argv[2]
if (!jsonPath) {
  console.error('Usage: node scripts/build-pixso-183.mjs <path-to-json>')
  process.exit(1)
}

const raw = fs.readFileSync(jsonPath, 'utf8')
const data = JSON.parse(raw)
const item = data.find((x) => x.guid === '2:183') ?? data[0]
if (!item?.code) {
  console.error('Invalid JSON')
  process.exit(1)
}

let code = item.code

const assetMap = [
  ['be4b354c210aedfec4b8c4b3c5aaf349.png', 'p185'],
  ['Frame_2_188.png', 'p188'],
  ['Frame_2_200.png', 'p200'],
  ['Frame_2_214.png', 'p214'],
  ['Frame_2_228.png', 'p228'],
  ['Frame_2_257.png', 'p257'],
  ['Frame_2_265.png', 'p265'],
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
code = code.replace(/font-weight:\s*Semi Bold;/g, 'font-weight: 600;')

code = code.replaceAll('"Public Sans-Semi Bold"', '"Public Sans"')
code = code.replaceAll('"Public Sans-Regular"', '"Public Sans"')
code = code.replaceAll('"Public Sans-Medium"', '"Public Sans"')
code = code.replaceAll('"Noto Serif-Bold"', '"Noto Serif"')
code = code.replaceAll('"Noto Serif-Regular Italic"', '"Noto Serif"')
code = code.replaceAll('"Noto Serif-Regular"', '"Noto Serif"')

code = code.replace(
  '<div id="2_257" class="vector-wrapper-2_257">\n                        <div id="2_257" class="vector-2_257"></div>',
  '<div id="2_257" class="vector-wrapper-2_257">\n                        <div class="vector-2_257"></div>',
)
code = code.replace(
  '<div id="2_265" class="vector-wrapper-2_265">\n                            <div id="2_265" class="vector-2_265"></div>',
  '<div id="2_265" class="vector-wrapper-2_265">\n                            <div class="vector-2_265"></div>',
)

code = code.replace(
  '<div class="scroll-container">',
  '<div class="scroll-container pixso-183-root" :style="pixso183Style">',
)

const imports = assetMap
  .map(([file, key]) => `import ${key} from '../../assets/pixso-183/${file}?url'`)
  .join('\n')

const styleBindings = assetMap
  .map(([, key]) => `  '--${key}': \`url(\${${key}})\`,`)
  .join('\n')

const scriptBlock = `<script setup lang="ts">
${imports}

const pixso183Style = {
${styleBindings}
} as Record<string, string>
</script>
`

code = code.replace('<script lang="ts" setup></script>', scriptBlock)

const mobileCss = `

/* —— 手机端：流式宽度与安全区 —— */
.pixso-183-root {
    padding-left: env(safe-area-inset-left, 0px);
    padding-right: env(safe-area-inset-right, 0px);
    max-width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
}

.frame-2_183 {
    width: 100% !important;
    max-width: 390px;
    margin-inline: auto;
    box-sizing: border-box;
}

@media (max-width: 420px) {
    .pixso-183-root {
        overflow-wrap: anywhere;
        word-break: break-word;
    }

    .frame-2_183 {
        max-width: 100% !important;
        padding-left: max(16px, env(safe-area-inset-left, 0px)) !important;
        padding-right: max(16px, env(safe-area-inset-right, 0px)) !important;
        padding-top: 96px !important;
    }

    .pixso-183-root .rectangle-2_185,
    .pixso-183-root .frame-2_187,
    .pixso-183-root .frame-2_189,
    .pixso-183-root .frame-2_212,
    .pixso-183-root .frame-2_225,
    .pixso-183-root .stroke-wrapper-2_237,
    .pixso-183-root .stroke-wrapper-2_242,
    .pixso-183-root .stroke-wrapper-2_247,
    .pixso-183-root .frame-2_253 {
        width: 100% !important;
        max-width: 100%;
        left: 0 !important;
        box-sizing: border-box;
    }

    .pixso-183-root .frame-2_188 {
        height: min(56vw, 500px) !important;
    }

    .pixso-183-root .text-2_194 {
        width: 100% !important;
        height: auto !important;
        font-size: clamp(1.75rem, 8vw, 3rem) !important;
        line-height: 1.1 !important;
    }

    .pixso-183-root .text-2_194 [class^="span-2_194"] {
        font-size: inherit !important;
        line-height: inherit !important;
    }

    .pixso-183-root .text-2_196 {
        width: 100% !important;
        height: auto !important;
    }

    .pixso-183-root .frame-2_198 {
        width: 100% !important;
        max-width: 100%;
        padding-left: 20px !important;
        padding-right: 20px !important;
        box-sizing: border-box;
    }

    .pixso-183-root .frame-2_211 {
        flex-direction: column !important;
        gap: 24px !important;
        align-items: stretch !important;
    }

    .pixso-183-root .frame-2_230,
    .pixso-183-root .frame-2_233,
    .pixso-183-root .frame-2_235 {
        left: max(16px, env(safe-area-inset-left, 0px)) !important;
        right: max(16px, env(safe-area-inset-right, 0px)) !important;
        width: auto !important;
        max-width: calc(100% - 32px);
    }

    .pixso-183-root .text-2_234,
    .pixso-183-root .text-2_236 {
        width: 100% !important;
        max-width: 100%;
        height: auto !important;
    }

    .pixso-183-root .frame-2_252 {
        height: auto !important;
        min-height: 640px;
        padding-left: max(16px, env(safe-area-inset-left, 0px)) !important;
        padding-right: max(16px, env(safe-area-inset-right, 0px)) !important;
    }

    .pixso-183-root .frame-2_256 {
        height: auto !important;
        min-height: 520px;
        max-width: 100%;
    }

    .pixso-183-root .vector-wrapper-2_257,
    .pixso-183-root .frame-2_260,
    .pixso-183-root .frame-2_262,
    .pixso-183-root .frame-2_264,
    .pixso-183-root .frame-2_270 {
        left: 50% !important;
        transform: translateX(-50%);
        width: min(262px, 100%) !important;
        max-width: calc(100% - 32px);
    }

    .pixso-183-root .vector-wrapper-2_265,
    .pixso-183-root .frame-2_268 {
        width: 100% !important;
        max-width: 100%;
    }

    .pixso-183-root .frame-2_268 {
        padding-left: 16px !important;
        padding-right: 16px !important;
    }

    .pixso-183-root .text-2_261 {
        font-size: clamp(1.5rem, 6vw, 2.25rem) !important;
        width: auto !important;
        height: auto !important;
    }

    .pixso-183-root .text-2_261 [class^="span-2_261"] {
        font-size: inherit !important;
    }

    .pixso-183-root .text-2_263,
    .pixso-183-root .text-2_271 {
        width: 100% !important;
        max-width: 100%;
        height: auto !important;
    }
}
`

code = code.replace('</style>', `${mobileCss}\n</style>`)

const outPath = path.join(root, 'src/components/pixso/PixsoResearchMobileFrame.vue')
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, code, 'utf8')
console.log('Wrote', outPath)
