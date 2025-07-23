import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="lft-hme rounded shadow">
              {/* Column 1 Content */}
              <h3 className="text-2xl font-semibold mb-2">Front-End UI Developer</h3>
              <p className="text-8xl">Hello I'm <br></br><span>Pavan</span></p>
              <p className="mt-3">I specialize in building responsive, user-friendly interfaces using HTML, CSS, JavaScript, Bootstrap, and jQuery. I develop modern web apps with React and Next.js, focusing on clean code, performance, and seamless user experiences.</p>
            </div>

            <div className="right-hme rounded shadow flex items-center justify-center">
              {/* Column 2 Content */}
              <Image src="/assets/photo.png" className="object-center" alt="Photo" width={400} height={400} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
