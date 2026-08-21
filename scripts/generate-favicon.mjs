import sharp from 'sharp'
import pngToIco from 'png-to-ico'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const SOURCE = path.resolve('src/assets/kaushal_nepal_image.jpg')
const OUT_DIR = path.resolve('public')

await mkdir(OUT_DIR, { recursive: true })

const face = sharp(SOURCE)
  .resize(512, 512, { fit: 'cover', position: 'attention' })
  .toBuffer()

const sizes = [16, 32, 48]
const pngs = await Promise.all(
  sizes.map(async (size) => ({
    size,
    buffer: await sharp(await face)
      .resize(size, size)
      .png()
      .toBuffer(),
  })),
)

for (const { size, buffer } of pngs) {
  await writeFile(path.join(OUT_DIR, `favicon-${size}.png`), buffer)
}

await writeFile(
  path.join(OUT_DIR, 'apple-touch-icon.png'),
  await sharp(await face)
    .resize(180, 180)
    .png()
    .toBuffer(),
)

const ico = await pngToIco(pngs.map(({ buffer }) => buffer))
await writeFile(path.join(OUT_DIR, 'favicon.ico'), ico)

console.log('favicon.ico + PNGs written to public/')