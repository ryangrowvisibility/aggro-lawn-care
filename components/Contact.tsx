export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[oklch(0.30_0.11_150)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[oklch(0.78_0.06_148)] text-sm font-semibold uppercase tracking-widest mb-3">
              Get In Touch
            </p>
            <h2 className="font-display font-bold text-white text-4xl lg:text-5xl mb-6">
              Ready for a lawn you&apos;re proud of?
            </h2>
            <p className="text-[oklch(0.82_0.04_148)] text-lg leading-relaxed mb-10 max-w-md">
              Give us a call or send an email. We&apos;ll get back to you quickly and can usually
              schedule service within the week.
            </p>

            <div className="space-y-5">
              <a
                href="tel:5596967204"
                className="flex items-center gap-4 group cursor-pointer"
                aria-label="Call Aggro Lawn Care"
              >
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.38_0.10_150)] text-white flex items-center justify-center group-hover:bg-[oklch(0.44_0.09_150)] transition-colors duration-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.82-.82a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[oklch(0.78_0.05_148)]">Phone</div>
                  <div className="font-semibold text-white text-lg">(559) 696-7204</div>
                </div>
              </a>

              <a
                href="mailto:aggrolawncare@gmail.com"
                className="flex items-center gap-4 group cursor-pointer"
                aria-label="Email Aggro Lawn Care"
              >
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.38_0.10_150)] text-white flex items-center justify-center group-hover:bg-[oklch(0.44_0.09_150)] transition-colors duration-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[oklch(0.78_0.05_148)]">Email</div>
                  <div className="font-semibold text-white text-lg">aggrolawncare@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.38_0.10_150)] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[oklch(0.78_0.05_148)]">Hours</div>
                  <div className="font-semibold text-white">Mon–Sat: 7:00 AM – 7:00 PM</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.38_0.10_150)] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[oklch(0.78_0.05_148)]">Service Area</div>
                  <div className="font-semibold text-white">Fresno County, CA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA box */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="font-display font-bold text-[oklch(0.17_0.022_148)] text-2xl mb-3">
              Request a Free Quote
            </h3>
            <p className="text-[oklch(0.44_0.06_148)] text-base leading-relaxed mb-6">
              No obligation. Just tell us what you need and we&apos;ll get back to you within
              one business day.
            </p>

            <div className="space-y-3">
              <a
                href="tel:5596967204"
                className="flex items-center justify-center gap-2 w-full bg-[oklch(0.30_0.11_150)] text-white font-semibold text-base py-3.5 rounded-xl hover:bg-[oklch(0.38_0.10_150)] transition-all duration-200 active:scale-[0.97] cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.82-.82a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call (559) 696-7204
              </a>
              <a
                href="mailto:aggrolawncare@gmail.com"
                className="flex items-center justify-center gap-2 w-full bg-[oklch(0.93_0.028_150)] text-[oklch(0.30_0.11_150)] font-semibold text-base py-3.5 rounded-xl hover:bg-[oklch(0.88_0.030_150)] transition-all duration-200 active:scale-[0.97] cursor-pointer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email aggrolawncare@gmail.com
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/AggroLawnCare/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[oklch(0.44_0.06_148)] hover:text-[oklch(0.30_0.11_150)] font-medium transition-colors cursor-pointer"
                aria-label="Aggro Lawn Care on Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                Facebook
              </a>
              <span className="text-[oklch(0.70_0.04_148)]">·</span>
              <a
                href="https://nextdoor.com/pages/aggro-lawn-care-fresno-ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[oklch(0.44_0.06_148)] hover:text-[oklch(0.30_0.11_150)] font-medium transition-colors cursor-pointer"
                aria-label="Aggro Lawn Care on Nextdoor"
              >
                Nextdoor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
