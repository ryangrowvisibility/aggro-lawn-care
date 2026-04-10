const services = [
  {
    name: "Lawn Mowing",
    description: "Regular residential and commercial mowing keeping grass at healthy, even heights for year-round curb appeal.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22V12M12 12C12 7 7 4 3 5c0 6 4 10 9 10zM12 12C12 7 17 4 21 5c0 6-4 10-9 10z"/></svg>,
  },
  {
    name: "Edging",
    description: "Clean, defined edges along driveways, sidewalks, and garden beds — the finishing touch that makes your lawn stand out.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  },
  {
    name: "Yard Trimming",
    description: "Trim along fences, walls, and hard-to-reach areas for a polished, complete look throughout the season.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><line x1="8.12" y1="8.12" x2="15.88" y2="15.88"/><line x1="6" y1="9" x2="6" y2="21"/><line x1="9" y1="6" x2="21" y2="6"/></svg>,
  },
  {
    name: "Yard Cleanup",
    description: "Leaf collection, clipping disposal, and seasonal cleanouts to keep your property clean and welcoming.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>,
  },
  {
    name: "Weed Control",
    description: "Targeted weed removal and control to keep your lawn healthy and prevent regrowth between service visits.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 8C8 10 5.9 16.17 3.82 22M9.5 4.75c.94 2.88 2.5 5 5.5 6.25"/></svg>,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[oklch(0.70_0.15_78)] text-sm font-semibold uppercase tracking-widest mb-3">
            Services
          </p>
          <h2 className="font-display font-bold text-[oklch(0.17_0.022_148)] text-4xl lg:text-5xl mb-4 max-w-lg">
            Everything your lawn needs
          </h2>
          <p className="text-[oklch(0.44_0.06_148)] text-lg max-w-2xl">
            Straightforward, reliable lawn care at prices your neighborhood can count on.
            Serving residential and commercial properties across Fresno County.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`bg-[oklch(0.985_0.005_130)] rounded-2xl p-6 border border-[oklch(0.87_0.022_150)] hover:border-[oklch(0.30_0.11_150)/0.35] hover:shadow-sm transition-all duration-200 animate-fade-up stagger-${Math.min(i + 1, 5)}`}
            >
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.93_0.028_150)] text-[oklch(0.30_0.11_150)] flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-display font-semibold text-[oklch(0.17_0.022_148)] text-lg mb-2">
                {service.name}
              </h3>
              <p className="text-[oklch(0.46_0.042_148)] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-[oklch(0.30_0.11_150)] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="font-display font-bold text-white text-xl mb-2">Ready to get started?</div>
              <p className="text-[oklch(0.78_0.05_148)] text-sm leading-relaxed">
                Call or email for a free, no-pressure quote. Mon–Sat 7am–7pm.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="tel:5596967204"
                className="bg-white text-[oklch(0.30_0.11_150)] font-semibold text-sm py-2.5 rounded-xl text-center hover:bg-[oklch(0.93_0.028_150)] transition-all duration-150 active:scale-[0.97] cursor-pointer"
              >
                Call (559) 696-7204
              </a>
              <a
                href="mailto:aggrolawncare@gmail.com"
                className="bg-[oklch(0.38_0.10_150)] text-white font-medium text-sm py-2.5 rounded-xl text-center hover:bg-[oklch(0.42_0.10_150)] transition-all duration-150 active:scale-[0.97] cursor-pointer"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
