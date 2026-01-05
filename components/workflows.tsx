// Updated Workflows Section (with web development focused content + skill side tags)
// Hover effects and gradient text movement kept exactly the same

import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section
      className="bg-gray-950 text-white flex items-center justify-center py-28 min-h-screen"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        {/* ====== Section Heading ====== */}
        <div className="pb-14">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              About Me
            </span>
          </div>

          <h2
            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl md:text-5xl font-semibold text-transparent"
            data-aos="fade-up"
          >
            What I Do — Skills & Expertise
          </h2>

          <p
            className="text-indigo-200/70 text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I specialize in full-stack web development, creative design, and cybersecurity — building modern applications with cutting-edge technologies and AI-powered workflows.
          </p>
        </div>

        {/* ====== Additional Skills Tags ====== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="zoom-in">
          {[
            "Web Development",
            "React & Next.js",
            "Firebase & Supabase",
            "Graphic Design",
            "Video Editing",
            "Cyber Security",
          ].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1 rounded-full text-sm bg-gray-800/50 backdrop-blur border border-gray-700/50 hover:bg-gray-700/50 transition duration-300 text-indigo-200/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ====== Cards Grid ====== */}
        <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
          {/* ====== Card 1 ====== */}
          <div
            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px hover:before:opacity-100 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500"
            data-aos="zoom-in"
          >
            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
              <Image src={WorflowImg01} width={350} height={288} alt="Web Development" />
              <div className="p-6">
                <div className="mb-3">
                  <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
                    <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                      Full-Stack Development
                    </span>
                  </span>
                </div>
                <p className="text-indigo-200/65 text-sm md:text-base leading-relaxed">
                  Building modern, scalable web applications with React, Next.js, Tailwind CSS, Firebase, and Supabase.
                </p>
              </div>
            </div>
          </div>

          {/* ====== Card 2 ====== */}
          <div
            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px hover:before:opacity-100 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
              <Image src={WorflowImg02} width={350} height={288} alt="Graphic Design" />
              <div className="p-6">
                <div className="mb-3">
                  <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
                    <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                      Creative Design & Media
                    </span>
                  </span>
                </div>
                <p className="text-indigo-200/65 text-sm md:text-base leading-relaxed">
                  Professional graphic design with Adobe Photoshop, Illustrator, and Canva — plus video editing with Premiere Pro and After Effects for engaging digital content.
                </p>
              </div>
            </div>
          </div>

          {/* ====== Card 3 ====== */}
          <div
            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px hover:before:opacity-100 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
              <Image src={WorflowImg03} width={350} height={288} alt="Cyber Security" />
              <div className="p-6">
                <div className="mb-3">
                  <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
                    <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                      Cyber Security & Testing
                    </span>
                  </span>
                </div>
                <p className="text-indigo-200/65 text-sm md:text-base leading-relaxed">
                  Ethical hacking, penetration testing, and vulnerability assessment using Nmap, BurpSuite, Wireshark, and Metasploit to secure digital infrastructure.
                </p>
              </div>
            </div>
          </div>
        </Spotlight>
      </div>
    </section>
  );
}