const reasons = [
  {
    title: "Family-Owned & Operated",
    body: "Founded by Sergio Campos in 2020, Aggro Lawn Care is a family business. That means consistent, personal service — not a rotating crew of strangers.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Reasonable Pricing",
    body: "Fresno neighbors on Nextdoor specifically call out the very reasonable pricing. Quality lawn care doesn't have to come at a premium price.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: "Nextdoor Recommended",
    body: "Active on Nextdoor and Facebook, Aggro Lawn Care has earned the trust of Fresno homeowners through consistent, dependable service.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: "BBB A+ Rated",
    body: "Six years of operation, zero complaints on file. The BBB A+ rating means you can trust this business to stand behind its work.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    title: "Mon–Sat 7am–7pm",
    body: "Extended weekday and Saturday hours mean Aggro can work around your schedule — not the other way around.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "Residential & Commercial",
    body: "From front yards to commercial properties, Aggro handles lawns of any size across Fresno County with the same attention and care.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-24 bg-[oklch(0.985_0.005_130)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[oklch(0.70_0.15_78)] text-sm font-semibold uppercase tracking-widest mb-3">
            Why Aggro
          </p>
          <h2 className="font-display font-bold text-[oklch(0.17_0.022_148)] text-4xl lg:text-5xl mb-4 max-w-xl">
            Lawn care your neighbors trust
          </h2>
          <p className="text-[oklch(0.44_0.06_148)] text-lg max-w-2xl">
            A local family business with a simple approach: show up on time, do great work,
            charge fair prices. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`flex gap-4 p-5 bg-white rounded-2xl border border-[oklch(0.87_0.022_150)] animate-fade-up stagger-${Math.min(i + 1, 5)}`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[oklch(0.93_0.028_150)] text-[oklch(0.30_0.11_150)] flex items-center justify-center">
                {r.icon}
              </div>
              <div>
                <div className="font-display font-semibold text-[oklch(0.17_0.022_148)] text-base mb-1">{r.title}</div>
                <div className="text-[oklch(0.46_0.042_148)] text-sm leading-relaxed">{r.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
