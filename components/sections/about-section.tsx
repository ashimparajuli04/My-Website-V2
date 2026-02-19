import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about-me" className="min-h-screen w-screen flex items-center justify-center text-white snap-start shrink-0 bg-gray-950 py-20">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left - Image + Stats */}
        <div className="flex flex-col gap-8">
          {/* Cover + Profile combo */}
          <div className="relative w-full">
            {/* Cover photo */}
            <div className="w-full h-58 rounded-2xl overflow-hidden relative">
              <Image
                src="/us-but-cover.png"
                alt="Cover"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
        
            {/* Profile photo overlapping cover */}
            <div className="absolute -bottom-12 left-6">
              <div className="w-34 h-34 rounded-full border-4 border-gray-950 overflow-hidden relative">
                <Image
                  src="/me-but-dp.jpg"
                  alt="Ashim Parajuli"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        
          {/* Spacer for the overlapping profile pic */}
          <div className="mt-8 pl-4">
            <h3 className="text-xl font-bold text-white">Ashim Parajuli</h3>
            <p className="text-indigo-400 text-sm">Software Engineer</p>
          </div>
        </div>
    
        {/* Right - Info */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-indigo-400 font-semibold tracking-widest text-sm uppercase mb-2">About Me</p>
            <h2 className="text-4xl font-bold leading-tight">Backend and<br/> Web Developer</h2>
          </div>
    
          <p className="text-white/60 leading-relaxed">
            Hi, I&apos;m <span className="font-bold">Ashim Parajuli</span>, a CSIT student currently studying in <br></br><span className="font-bold">Patan Multiple Campus</span>. I have experience in developing backend and web applications using various technologies such as Next.js, Python (Backend), and React. I&apos;m always eager to learn new skills and collaborate with talented individuals to create innovative solutions.
          </p>
    
          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { label: "Birthday", value: "7 August 2004" },
              { label: "Phone", value: "+977 9761795269" },
              { label: "City", value: "Lalitpur, Nepal" },
              { label: "Age", value: "21" },
              { label: "Degree", value: "Undergraduate" },
              { label: "Email", value: "ashimparajuli04@gmail.com" },
              { label: "Freelance", value: "Available" },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-2">
                <span className="text-indigo-400 font-semibold shrink-0">{label}:</span>
                <span className="text-white/70 truncate">{value}</span>
              </div>
            ))}
          </div>
    
          <p className="text-white/60 leading-relaxed">
            Please feel free to contact me via email or any social media platform.
          </p>
        </div>
      </div>
    </section>
  );
}