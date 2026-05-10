import { WaitlistForm } from "./components/waitlist-form";

export default function Home() {
  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-linear-to-b from-[#0a1628] via-[#050b14] to-[#030508]">
      {/* Depth: navy only, anchored away from the left edge */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_70%_35%,rgba(15,33,55,0.55),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_100%,#030508,transparent_45%)]"
        aria-hidden
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      {/* Bottom vignette */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-[#030508] to-transparent"
        aria-hidden
      />

      <header className="relative z-10 flex justify-center px-6 pt-10 pb-4 md:pt-14">
        <div className="flex items-center gap-3">
          <span
            className="h-px w-10 bg-linear-to-r from-transparent to-[var(--atlantis-gold)] opacity-80 atlantis-line-shimmer"
            aria-hidden
          />
          <span className="font-[family-name:var(--font-cormorant)] text-[11px] font-medium uppercase tracking-[0.35em] text-[var(--atlantis-gold-soft)]/85">
            Coming soon
          </span>
          <span
            className="h-px w-10 bg-linear-to-l from-transparent to-[var(--atlantis-gold)] opacity-80 atlantis-line-shimmer"
            aria-hidden
          />
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-8 md:pb-32 md:pt-12">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.75rem,10vw,5rem)] font-semibold leading-[0.95] tracking-[0.02em] text-white">
            ATLANTIS
          </h1>

          <p className="mt-6 max-w-xl text-lg font-semibold tracking-wide text-white md:text-xl md:tracking-[0.06em]">
            Rise to Your Highest Self
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-16 bg-linear-to-r from-transparent via-[var(--atlantis-gold)]/50 to-transparent md:w-24" />
          </div>

          <p className="mt-10 max-w-[34rem] text-pretty text-[17px] leading-relaxed text-white/65 md:text-lg md:leading-[1.65]">
            Atlantis is an AI-powered companion for young people who refuse to
            settle — clarity for your goals, habits that stick, and a path
            toward the version of you you already sense is possible.
          </p>

          <div className="relative mt-14 w-full max-w-lg">
            <WaitlistForm />
          </div>

          <p className="mt-8 max-w-md text-center text-sm leading-relaxed text-white/35">
            Early access only. No spam — one note when we open the gates.
          </p>
        </div>
      </main>

      <footer className="relative z-10 px-6 pb-10 text-center">
        <p className="text-[12px] uppercase tracking-[0.2em] text-white/25">
          Atlantis © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
