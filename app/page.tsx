import Image from 'next/image';
import { GreetingForm } from './greeting-form';

export default function Home() {
  return (
    <div className="page">
      <header className="nav">
        <Image src="/e2e-logotype-white.svg" alt="e2e" width={69} height={24} priority />
      </header>

      <main className="hero">
        <p className="eyebrow">[ next.js + e2e ]</p>
        <h1 className="title">say hello</h1>
        <p className="lede">
          Every Vercel deployment of this app runs its e2e tests before it goes live. Type a name to try the form
          they check.
        </p>
        <GreetingForm />
      </main>

      <footer className="footer">
        <p>start by editing app/page.tsx. the tests live in tests/.</p>
        <nav className="footer-links" aria-label="resources">
          <a href="https://github.com/e2e-inc/e2e-vercel-previews">source on github</a>
          <a href="https://e2e.com/docs/ci/vercel">e2e docs for vercel</a>
        </nav>
      </footer>
    </div>
  );
}
