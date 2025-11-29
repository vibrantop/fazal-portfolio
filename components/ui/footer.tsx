import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950 text-indigo-100">
      {/* Background Illustration */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none opacity-40"
          src={FooterIllustration}
          width={1076}
          height={378}
          alt="Footer illustration"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-gray-800">
        {/* Portfolio Info */}
        <div>
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500 mb-4">
            Fazal Mohaudin
          </h2>
          <p className="text-indigo-200/70 text-sm leading-relaxed">
            Showcasing my skills in Cybersecurity, Web Development, and Graphic Design. 
            Delivering secure, creative, and modern solutions.
          </p>
        </div>

        {/* Skills / Expertise */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-300 mb-3">
            My Expertise
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-indigo-400 transition">Cyber Security</li>
            <li className="hover:text-indigo-400 transition">Web Development</li>
            <li className="hover:text-indigo-400 transition">Graphic Design</li>
            <li className="hover:text-indigo-400 transition">DevOps & Cloud</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-300 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-indigo-400 transition">About Me</li>
            <li className="hover:text-indigo-400 transition">Projects</li>
            <li className="hover:text-indigo-400 transition">Skills</li>
            <li className="hover:text-indigo-400 transition">Testimonials</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-indigo-300 mb-3">
            Get in Touch
          </h3>
          <p className="text-sm text-indigo-200/80 mb-4">
            Let’s bring your ideas to life.  
            <br />📞 03291459957
          </p>
          <a
            href="https://wa.me/923291459957"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm px-5 py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-emerald-700 transition"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-indigo-200/50 text-sm py-6 border-t border-gray-800 mt-6">
        © {new Date().getFullYear()} Fazal Mohaudin. All rights reserved.
      </div>
    </footer>
  );
}
