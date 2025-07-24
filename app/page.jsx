'use client';
import Image from "next/image";
import { use, useEffect } from "react";

export default function Home() {


useEffect(() => {
      const counters = document.querySelectorAll('.number');
    const speed = 100; // lower = faster
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
},[]);

  return (
    <>
      <main>
        <section className="container mx-auto py-12 pb-5">
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

              <div className="download-btn mt-6">
                <a href="" className="cta-resume">Download CV</a>
                <a href="">  <Image
                  src="/assets/github-logo.png"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full social-icon"
                /></a>
                <a href="">  <Image
                  src="/assets/linkedin.png"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full social-icon"
                /></a>

              </div>
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

        <section className="numbers container mx-auto ">
          <div className="grid">
            <div className="stat">
              <div className="number" data-target="5">0</div>
              <div className="label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="number" data-target="15">0</div>
              <div className="label">Projects</div>
            </div>
            <div className="stat">
              <div className="number" data-target="35">0</div>
              <div className="label">Clients</div>
            </div>
            <div className="stat">
              <div className="number" data-target="10">0</div>
              <div className="label">Team Members</div>
            </div>
          </div>
        </section>
      </main>


    </>
    
  );
}
