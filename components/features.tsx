"use client";

import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Features() {
  return (
    <section className="relative bg-gray-950 text-white overflow-hidden">
      {/* Background Blur */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2 opacity-50"
        aria-hidden="true" data-aos="fade-down">
        <Image className="max-w-none" src={BlurredShapeGray} width={760} height={668} alt="Blurred shape" />
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-60"
        aria-hidden="true" data-aos="fade-up">
        <Image className="max-w-none" src={BlurredShape} width={760} height={668} alt="Blurred shape" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800 py-20">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center pb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-semibold">
                What I Do
              </span>
            </div>

            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl md:text-5xl font-bold text-transparent leading-tight">
              Web Development, Design & Security
            </h2>

            <p className="text-lg text-indigo-200/70 max-w-2xl mx-auto leading-relaxed">
              Building modern web applications with a creative edge and security-first mindset.
            </p>
          </div>

          {/* Personal Info Box */}
          <div className="mx-auto mb-16 max-w-4xl bg-gray-800/70 border border-indigo-500 rounded-3xl p-8 text-center shadow-lg backdrop-blur-lg" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-indigo-200 mb-4">Hello, I'm Fazal Mohaudin</h3>
            <p className="text-indigo-200/70 text-lg mb-4">
              I am 18 years old, born January 3, 2008. Currently a Class 12 ICS Physics student.
            </p>
            <p className="text-indigo-200/70 text-lg mb-4">
              I have completed a <strong>Cyber Security Diploma</strong> from the UK-accredited institute <strong>Alnafi International College</strong>, accredited with <strong>ISACA, EduQual, Pearson, and EADL</strong>.
            </p>
            <p className="text-indigo-200/70 text-lg mb-4">
              My educational background:
              <br />- Matric (Biology) — 1003 Marks
              <br />- 11th Grade (ICS Physics) — 404 Marks
              <br />- Currently enrolled in Class 12
            </p>
          </div>

          {/* Grid of Features */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-12 md:gap-y-14 lg:grid-cols-3"
            data-aos="fade-up" data-aos-delay={150}>

            {/* Feature: Web Development */}
            <article className="transition-all hover:-translate-y-2 hover:scale-[1.02] duration-300">
              <svg className="mb-3 fill-indigo-500/90" xmlns="http://www.w3.org/2000/svg" width={26} height={26}>
                <rect width="24" height="4" y="2" />
                <rect width="24" height="4" y="10" />
                <rect width="24" height="4" y="18" />
              </svg>
              <h3 className="mb-2 text-lg font-semibold text-gray-100">Web Development</h3>
              <p className="text-indigo-200/70 text-sm leading-relaxed">
                Building full-stack web applications with React, Firebase, Supabase, and modern JavaScript. AI-powered development for rapid delivery.
              </p>
            </article>

            {/* Feature: Graphic Design */}
            <article className="transition-all hover:-translate-y-2 hover:scale-[1.02] duration-300">
              <svg className="mb-3 fill-indigo-500/90" xmlns="http://www.w3.org/2000/svg" width={26} height={26}>
                <path d="M13 0 0 6v14l13 6 13-6V6L13 0Zm0 2.5 10 4.6v1L13 13 3 8.1v-1l10-4.6Z" />
              </svg>
              <h3 className="mb-2 text-lg font-semibold text-gray-100">Graphic Design & Media</h3>
              <p className="text-indigo-200/70 text-sm leading-relaxed">
                Professional design with Adobe Photoshop, Illustrator, Canva, Premiere Pro, and After Effects. Video editing and social media content creation.
              </p>
            </article>

            {/* Feature: Penetration Testing */}
            <article className="transition-all hover:-translate-y-2 hover:scale-[1.02] duration-300">
              <svg className="mb-3 fill-indigo-500/90" xmlns="http://www.w3.org/2000/svg" width={26} height={26}>
                <circle cx="13" cy="13" r="11" />
              </svg>
              <h3 className="mb-2 text-lg font-semibold text-gray-100">Penetration Testing</h3>
              <p className="text-indigo-200/70 text-sm leading-relaxed">
                Ethical hacking and vulnerability assessment using Nmap, Nikto, BurpSuite, Wireshark, and Metasploit.
              </p>
            </article>

            {/* Feature: SOC & Threat Detection */}
            <article className="transition-all hover:-translate-y-2 hover:scale-[1.02] duration-300">
              <svg className="mb-3 fill-indigo-500/90" xmlns="http://www.w3.org/2000/svg" width={26} height={26}>
                <path d="M2 3h22v2H2V3zm3 5h16v2H5V8zm4 5h8v2H9v-2zm-3 5h14v2H6v-2z" />
              </svg>
              <h3 className="mb-2 text-lg font-semibold text-gray-100">SOC Operations & SIEM</h3>
              <p className="text-indigo-200/70 text-sm leading-relaxed">
                Log analysis, Elasticsearch, SIEM fundamentals, and threat monitoring for security operations centers.
              </p>
            </article>

            {/* Feature: System Hardening */}
            <article className="transition-all hover:-translate-y-2 hover:scale-[1.02] duration-300">
              <svg className="mb-3 fill-indigo-500/90" xmlns="http://www.w3.org/2000/svg" width={26} height={26}>
                <path d="M13 0a13 13 0 1 0 0 26A13 13 0 0 0 13 0Zm0 2a11 11 0 0 1 0 22A11 11 0 0 1 13 2Zm0 3a8 8 0 0 0-8 8h2a6 6 0 0 1 12 0h2a8 8 0 0 0-8-8Z" />
              </svg>
              <h3 className="mb-2 text-lg font-semibold text-gray-100">System Administration</h3>
              <p className="text-indigo-200/70 text-sm leading-relaxed">
                RHEL Server Administration with systemd, FirewallD, SELinux, system backup, and maintenance.
              </p>
            </article>

            {/* Feature: Cloud & Standards */}
            <article className="transition-all hover:-translate-y-2 hover:scale-[1.02] duration-300">
              <svg className="mb-3 fill-indigo-500/90" xmlns="http://www.w3.org/2000/svg" width={26} height={26}>
                <path d="M3 3h20v4H3V3zm0 8h20v4H3v-4zm0 8h20v4H3v-4z" />
              </svg>
              <h3 className="mb-2 text-lg font-semibold text-gray-100">Cloud & Compliance</h3>
              <p className="text-indigo-200/70 text-sm leading-relaxed">
                AWS essentials, ISO 27001, CISSP basics, and SCADA fundamentals with focus on security best practices.
              </p>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}