import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-6 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Ready to elevate your digital presence?
            </h2>
            <p
              className="text-indigo-200/70 text-lg mb-8"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Let’s collaborate on cutting-edge solutions in Graphic Design, Cybersecurity, DevOps,
              and more. Quality beyond expectations — that’s our promise.
            </p>

            {/* Buttons */}
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              {/* WhatsApp Contact */}
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-green-600 to-green-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="https://wa.me/923291459957"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    Contact on WhatsApp
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>

              {/* Schedule Meeting */}
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                  href="https://wa.me/923291459957?text=Hi%20I%20want%20to%20schedule%20a%20meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Meeting
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 text-indigo-200/50 text-sm" data-aos="fade-up" data-aos-delay={800}>
              or reach us directly at{" "}
              <span className="text-indigo-400 font-semibold">03291459957</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
