import Link from "next/link";
import { GithubIcon } from "../svg";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-screen w-screen flex items-center justify-center text-white snap-start shrink-0 bg-gray-950 py-5">
      <div className="max-w-6xl mx-auto px-8 w-full">
    
        <div className="mb-3">
          <p className="text-indigo-400 font-semibold tracking-widest text-sm uppercase mb-2">Portfolio</p>
          <h2 className="text-4xl font-bold">My Projects</h2>
        </div>
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
          {/* NJ's Cafe - Featured card */}
          <div className="lg:col-span-2 group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-400/50 transition-all duration-300 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-8 flex flex-col md:flex-row gap-8">
    
              {/* Left */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full">Featured</span>
                  <span className="text-xs text-white/40">Full-Stack</span>
                </div>
                <h3 className="text-2xl font-bold">NJ&apos;s Café &amp; Restaurant</h3>
                <p className="text-white/60 leading-relaxed">
                  A full-stack restaurant service management system built from a real hospitality brief; a friend in hospitality described what a proper café management system should actually do, and this is the result.
                  Handles table sessions, order lifecycle, customer tracking, and role-based access —
                  with smart order deduplication and price snapshotting so history is never corrupted. <br></br>You can access the site as an employee at
                    <a
                      href="https://njseatery.vercel.app/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto ml-1 text-indigo-400 underline-offset-4 hover:underline hover:text-indigo-300 visited:text-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 rounded-sm transition-colors"
                    >
                      https://njseatery.vercel.app
                    </a>
                </p>
    
                <div className="flex flex-wrap gap-2 mt-2">
                  {["FastAPI", "PostgreSQL", "SQLModel", "Alembic", "JWT", "Next.js 14", "TanStack Query", "Docker"].map(tech => (
                    <span key={tech} className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
    
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {[
                    "Table & session lifecycle",
                    "Price snapshotting",
                    "Role-based auth (JWT)",
                    "Smart order deduplication",
                    "Customer visit tracking",
                    "Paginated history",
                  ].map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
    
                <Link
                  href="https://github.com/ashimparajuli04/njs-eatery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto self-start mt-4 flex items-center gap-2 px-6 py-2.5 bg-indigo-400 hover:bg-indigo-500 transition-colors rounded-full font-bold text-sm"
                >
                  <GithubIcon />
                  View on GitHub
                </Link>
              </div>
    
              {/* Right - stat boxes */}
              <div className="flex flex-col gap-3 md:w-48 shrink-0">
                {[
                  { label: "API Endpoints", value: "30+" },
                  { label: "DB Tables", value: "8" },
                  { label: "Auth Roles", value: "2" },
                  { label: "Stack Layers", value: "Full" },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <span className="text-2xl font-bold text-indigo-400">{value}</span>
                    <p className="text-xs text-white/50 mt-1">{label}</p>
                  </div>
                ))}
              </div>
    
            </div>
          </div>
    
          {/* MyNotesApp - Smaller card */}
          <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-400/50 transition-all duration-300 p-8 flex flex-col gap-4 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-white/40 bg-white/5 px-3 py-1 rounded-full">Beginner</span>
              <span className="text-xs text-white/40">Full-Stack</span>
            </div>
    
            <h3 className="text-xl font-bold">MyNotesApp</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              A lightweight ASP.NET Core Razor Pages app for personal note management.
              Built to learn CRUD fundamentals, EF Core, and Razor Page architecture with a clean minimal UI.
            </p>
    
            <div className="flex flex-wrap gap-2">
              {["ASP.NET Core", "Razor Pages", "SQLite", "Entity Framework Core"].map(tech => (
                <span key={tech} className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">{tech}</span>
              ))}
            </div>
    
            <Link
              href="https://github.com/ashimparajuli04/mynotesapp"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto self-start mt-auto flex items-center gap-2 px-5 py-2 border border-indigo-400/50 hover:bg-indigo-400/10 transition-colors rounded-full text-sm font-semibold text-indigo-400"
            >
              <GithubIcon />
              View on GitHub
            </Link>
          </div>
    
          {/* Coming soon placeholder */}
          <div className="border border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 text-center">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/30 text-2xl">+</div>
            <p className="text-white/30 text-sm">More projects coming soon</p>
          </div>
    
        </div>
      </div>
    </section>
  );
}