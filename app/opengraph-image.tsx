import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Next.js with e2e: test every Vercel deployment';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const logo = await readFile(join(process.cwd(), 'public/e2e-logotype-white.svg'), 'base64');

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: 72,
        background: '#000000',
        color: '#f7f7f7',
      }}
    >
      <img src={`data:image/svg+xml;base64,${logo}`} width={138} height={48} alt="" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ color: '#64ff9d', fontSize: 28, letterSpacing: '0.04em' }}>[ next.js with e2e ]</div>
        <div style={{ marginTop: 24, fontSize: 88, lineHeight: 1, letterSpacing: '-0.03em' }}>
          test every vercel deployment
        </div>
        <div style={{ marginTop: 32, color: '#8d8d8d', fontSize: 32 }}>
          locator and agent tests on every preview, gating production.
        </div>
      </div>
    </div>,
    size,
  );
}
