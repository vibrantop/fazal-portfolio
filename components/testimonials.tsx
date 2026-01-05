"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-07.jpg";
import TestimonialImg06 from "@/public/images/testimonial-08.jpg";

const testimonials = [
  {
    img: TestimonialImg01,
    name: "Sarah Mitchell",
    company: "TechFlow Solutions",
    content: "Built a complete full-stack LMS platform with React and Firebase in record time. The AI-powered development approach was impressive and delivered beyond expectations.",
    categories: [1, 4], // 1 = All, 4 = Web Development
  },
  {
    img: TestimonialImg02,
    name: "Ali Raza",
    company: "WebEdge Studio",
    content: "Developed a fully responsive e-commerce website with modern design, seamless user experience, and lightning-fast performance using Next.js and Tailwind CSS.",
    categories: [1, 4], // 1 = All, 4 = Web Development
  },
  {
    img: TestimonialImg03,
    name: "James Peterson",
    company: "SecureNet Inc.",
    content: "Conducted thorough penetration testing and vulnerability assessment for our web applications, identifying and fixing critical security flaws professionally.",
    categories: [1, 2], // 1 = All, 2 = Cyber Security
  },
  {
    img: TestimonialImg04,
    name: "Hina Shah",
    company: "DesignHive",
    content: "Created stunning visual branding materials including logos, social media graphics, and promotional videos. The creative vision was exactly what we needed.",
    categories: [1, 3], // 1 = All, 3 = Graphic Design
  },
  {
    img: TestimonialImg05,
    name: "Usman Ali",
    company: "CloudBridge Co.",
    content: "Tested my website for vulnerabilities and provided actionable recommendations to enhance security. Their expertise in cybersecurity is top-notch.",
    categories: [1, 2], // 1 = All, 2 = Cyber Security, 4 = Web Development
  },
  {
    img: TestimonialImg06,
    name: "Emma Brown",
    company: "PixelCraft Studio",
    content: "Provided exceptional graphic design and video editing services for our marketing campaigns. Adobe expertise and attention to detail made all the difference.",
    categories: [1, 3], // 1 = All, 3 = Graphic Design
  },
];

// Dynamic descriptions for each category
const categoryDescriptions = [
  "Here’s a showcase of what my clients say across cybersecurity, web development, and graphic design.",
  "Clients trust me for securing their digital infrastructure and implementing cybersecurity solutions.",
  "My design clients love the creative branding and visuals I deliver.",
  "Clients appreciate my secure, responsive, and modern web solutions.",
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center" data-aos="fade-up">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            What My Clients Say
          </h2>
          <p className="text-lg text-indigo-200/65">
            {categoryDescriptions[category - 1]}
          </p>
        </div>

        {/* Category buttons */}
        <div className="flex justify-center pb-12 md:pb-16" data-aos="fade-up" data-aos-delay="150">
          <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
            {["All", "Cyber Security", "Graphic Design", "Web Development"].map((label, i) => (
              <button
                key={i}
                className={`flex h-8 items-center gap-2.5 rounded-full px-3 text-sm font-medium transition-all duration-300 ${
                  category === i + 1
                    ? "bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-indigo-200 shadow-sm"
                    : "text-gray-400 hover:text-indigo-300 hover:bg-gray-800/40"
                }`}
                onClick={() => setCategory(i + 1)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div
          className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
          ref={masonryContainer}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group" data-aos="fade-up" data-aos-delay={index * 80}>
              <Testimonial testimonial={testimonial} category={category}>
                {testimonial.content}
              </Testimonial>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 ${
        !testimonial.categories.includes(category) ? "opacity-30" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        <p className="text-indigo-200/70 italic before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3 mt-2">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> — </span>
            <span className="text-indigo-300/80">{testimonial.company}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
