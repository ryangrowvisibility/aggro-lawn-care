export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[oklch(0.17_0.022_148)] text-[oklch(0.65_0.03_148)] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div>
          <span className="font-display font-semibold text-white">Aggro Lawn Care</span>
          <span className="mx-2 opacity-40">·</span>
          BBB A+ Rated
          <span className="mx-2 opacity-40">·</span>
          Fresno County, CA
          <span className="mx-2 opacity-40">·</span>
          Since 2020
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.facebook.com/AggroLawnCare/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Aggro Lawn Care on Facebook">
            Facebook
          </a>
          <a href="https://nextdoor.com/pages/aggro-lawn-care-fresno-ca/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Aggro Lawn Care on Nextdoor">
            Nextdoor
          </a>
          <span className="opacity-40">&copy; {year}</span>
        </div>
      </div>
    </footer>
  );
}
