import { InstagramIcon, GithubIcon, LinkedInIcon, FacebookIcon } from "../svg";
import { Typewriter } from "../typewriter";

export default function HomeSection() {
    return (
      <section id="home" className="relative min-h-screen w-screen flex flex-col items-center p-6 snap-start shrink-0">
        {/* Background only for section 1 */}
        <div className="absolute inset-0 bg-[url('/me-but-background.jpg')] bg-cover bg-center contrast-40 -z-10" />
        
        <div className="w-screen h-[30vh]" />
        <div className="text-white flex flex-row w-screen justify-start">
          <div className="px-30 sm:px-40 md:px-50">
            <h1 className="text-7xl font-bold">Ashim Parajuli</h1>
            <p className="mt-1 text-white/80 text-3xl min-h-11">
              I&apos;m a <Typewriter/>
            </p>
            <div className="flex flex-row gap-2 py-3 -mt-2">
              <button className="">
                <a
                  href="https://www.facebook.com/ashim899"
                  target="_blank"   // opens in new tab
                  rel="noopener noreferrer" // security best practice
                  className="text-white hover:text-salmon transition-colors"
                >
                  <FacebookIcon/>

                </a>
              </button>
              <button className="">
                <a
                  href="https://www.instagram.com/_ashimparajuli"
                  target="_blank"   // opens in new tab
                  rel="noopener noreferrer" // security best practice
                  className="text-white hover:text-salmon transition-colors"
                >
                  <InstagramIcon/>

                </a>
              </button>
              <button className="">
                <a
                  href="https://github.com/ashimparajuli04"
                  target="_blank"   // opens in new tab
                  rel="noopener noreferrer" // security best practice
                  className="text-white hover:text-salmon transition-colors"
                >
                  <GithubIcon/>
                </a>
              </button>
              <button className="">
                <a
                  href="https://www.linkedin.com/in/ashim-parajuli-17695032a/"
                  target="_blank"   // opens in new tab
                  rel="noopener noreferrer" // security best practice
                  className="text-white hover:text-salmon transition-colors"
                >
                  <LinkedInIcon/>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}