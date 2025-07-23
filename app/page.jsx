import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side */}
            <div className="lft-hme rounded shadow">
              <h3 className="text-2xl font-semibold mb-2">Front-End UI Developer</h3>
              <p className="text-8xl">
                Hello I'm <br />
                <span className="inline-block animate-name">
                  <span className="letter">P</span>
                  <span className="letter">a</span>
                  <span className="letter">v</span>
                  <span className="letter">a</span>
                  <span className="letter">n</span>
                </span>
              </p>
              <p className="mt-3">
                I specialize in building responsive, user-friendly interfaces using HTML, CSS,
                JavaScript, Bootstrap, and jQuery. I develop modern web apps with React and Next.js,
                focusing on clean code, performance, and seamless user experiences.
              </p>
            </div>

            {/* Right Side: Circular Image with Rotating Dotted Ring */}
            <div className="right-hme relative w-[500px] h-[500px] mx-auto flex items-center justify-center">
              {/* SVG Ring */}
              <div className="absolute inset-0 z-0 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const r = 45;
                    const x = 50 + r * Math.cos(angle);
                    const y = 50 + r * Math.sin(angle);
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="2.5"
                        fill="#90a4ae"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Inner Image */}
              <div className=" z-10">
                <Image
                  src="/assets/photo.png"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full port-img"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

   
    </>
  );
}
