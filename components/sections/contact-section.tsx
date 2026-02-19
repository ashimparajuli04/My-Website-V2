import Link from "next/link";
import { InstagramIcon, GithubIcon, LinkedInIcon } from "../svg";

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen w-screen flex items-center justify-center text-white snap-start shrink-0 bg-gray-950">
      <div className="max-w-2xl mx-auto px-8 w-full flex flex-col items-center text-center gap-10">
    
        {/* Heading */}
        <div>
          <p className="text-indigo-400 font-semibold tracking-widest text-sm uppercase mb-2">Contact</p>
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="text-white/50 mt-3 text-sm">Feel free to reach out for collaborations, freelance work, or just a hello.</p>
        </div>
    
        {/* Contact links */}
        <div className="flex flex-col gap-4 w-full">
          {[
            {
              label: "Email",
              value: "ashimparajuli04@gmail.com",
              href: "mailto:your@email.com",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
                </svg>
              ),
            },
            {
              label: "Phone",
              value: "+977 976 175 9269",
              href: "tel:+9779761795269",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                </svg>
              ),
            },
            {
              label: "GitHub",
              value: "github.com/ashimparajuli04",
              href: "https://github.com/ashimparajuli04",
              icon: (
                <GithubIcon />
              ),
            },
            {
              label: "Instagram",
              value: "@_ashimparajuli",
              href: "https://instagram.com/_ashimparajuli",
              icon: (
                <InstagramIcon />
              ),
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/ashim-parajuli-17695032a",
              href: "https://www.linkedin.com/in/ashim-parajuli-17695032a/",
              icon: (
                <LinkedInIcon />
              ),
            },
          ].map(({ label, value, href, icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-400/50 hover:bg-white/10 transition-all duration-200 group"
            >
              <span className="text-indigo-400 shrink-0">{icon}</span>
              <div className="flex flex-col items-start">
                <span className="text-xs text-white/40 uppercase tracking-widest">{label}</span>
                <span className="text-white/80 text-sm group-hover:text-white transition-colors">{value}</span>
              </div>
              <svg className="w-4 h-4 text-white/20 group-hover:text-indigo-400 ml-auto transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
          ))}
        </div>
    
        {/* Footer note */}
        <p className="text-white/20 text-xs">© {new Date().getFullYear()} Ashim Parajuli. All rights reserved.</p>
    
      </div>
    </section>
  )
}