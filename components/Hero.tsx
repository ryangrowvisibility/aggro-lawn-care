export default function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center pt-16 bg-[oklch(0.985_0.005_130)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="max-w-2xl">
            {/* Trust badge */}
            <div className="animate-fade-up stagger-1 inline-flex items-center gap-2 bg-[oklch(0.93_0.028_150)] text-[oklch(0.30_0.11_150)] text-sm font-semibold px-3 py-1.5 rounded-full mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2l2.4 4.87L20 9.27l-4 3.9.94 5.49L12 15.9l-4.94 2.76.94-5.49-4-3.9 5.6-.4L12 2z"/>
              </svg>
              BBB A+ Rated · Family Owned Since 2020
            </div>

            <h1 className="animate-fade-up stagger-2 font-display font-extrabold text-[oklch(0.17_0.022_148)] leading-[1.05] mb-5" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)" }}>
              Your Neighborhood<br />
              <span className="text-[oklch(0.30_0.11_150)]">Lawn Crew</span><br />
              in Fresno
            </h1>

            <p className="animate-fade-up stagger-3 text-lg text-[oklch(0.44_0.06_148)] leading-relaxed mb-8 max-w-xl">
              Family-owned and operated by Sergio Campos. Affordable, reliable lawn care
              throughout Fresno County — the kind your neighbors already recommend.
            </p>

            {/* Social proof chips */}
            <div className="animate-fade-up stagger-3 flex flex-wrap gap-2 mb-8">
              {[
                "Mon–Sat 7am–7pm",
                "Fresno County",
                "Residential & Commercial",
                "Nextdoor Recommended",
              ].map((tag) => (
                <span key={tag} className="bg-white text-[oklch(0.44_0.10_150)] text-sm font-medium px-3 py-1.5 rounded-lg border border-[oklch(0.87_0.022_150)]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="animate-fade-up stagger-4 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:5596967204"
                className="bg-[oklch(0.30_0.11_150)] text-white font-semibold text-base px-7 py-3.5 rounded-xl hover:bg-[oklch(0.38_0.10_150)] transition-all duration-200 active:scale-[0.97] text-center cursor-pointer"
              >
                Call (559) 696-7204
              </a>
              <a
                href="mailto:aggrolawncare@gmail.com"
                className="bg-[oklch(0.93_0.028_150)] text-[oklch(0.30_0.11_150)] font-semibold text-base px-7 py-3.5 rounded-xl hover:bg-[oklch(0.88_0.030_150)] transition-all duration-200 active:scale-[0.97] text-center cursor-pointer"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Right: info card */}
          <div className="animate-fade-up stagger-3 w-full max-w-xs">
            <div className="bg-white rounded-2xl border border-[oklch(0.87_0.022_150)] p-7 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="bg-[oklch(0.93_0.028_150)] rounded-xl p-4 text-center">
                  <div className="font-display font-extrabold text-[oklch(0.30_0.11_150)] text-3xl">BBB</div>
                  <div className="text-xs text-[oklch(0.44_0.10_150)] font-semibold mt-0.5">A+ Rated</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[oklch(0.95_0.018_150)] rounded-xl p-3 text-center">
                    <div className="font-display font-bold text-[oklch(0.30_0.11_150)] text-2xl">6</div>
                    <div className="text-xs text-[oklch(0.44_0.06_148)] mt-0.5">Years Active</div>
                  </div>
                  <div className="bg-[oklch(0.95_0.018_150)] rounded-xl p-3 text-center">
                    <div className="font-display font-bold text-[oklch(0.30_0.11_150)] text-2xl">5</div>
                    <div className="text-xs text-[oklch(0.44_0.06_148)] mt-0.5">Services Offered</div>
                  </div>
                </div>

                {/* Nextdoor social proof */}
                <div className="bg-[oklch(0.95_0.018_150)] rounded-xl p-4">
                  <p className="text-xs text-[oklch(0.44_0.06_148)] italic leading-relaxed mb-2">
                    &ldquo;Very reasonable pricing and great service&rdquo;
                  </p>
                  <span className="text-xs font-semibold text-[oklch(0.30_0.11_150)]">— Fresno neighbor, Nextdoor</span>
                </div>

                <a
                  href="mailto:aggrolawncare@gmail.com"
                  className="block w-full bg-[oklch(0.70_0.15_78)] text-white font-semibold text-sm py-3 rounded-xl text-center hover:bg-[oklch(0.64_0.14_76)] transition-all duration-200 active:scale-[0.97] cursor-pointer"
                >
                  Request a Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
