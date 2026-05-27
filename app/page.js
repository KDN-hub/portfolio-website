import Image from "next/image";
import Link from "next/link";
import TypewriterText from "@/components/TypewriterText";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiJavascript } from "react-icons/si";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      {/* Hero Section */}
      <section className="relative flex-grow flex items-center justify-center overflow-hidden py-12 px-6 lg:px-24">
        {/* Floating Icons Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <FaReact className="absolute text-white/80 text-7xl top-[10%] left-[10%] animate-pulse" />
          <FaNodeJs className="absolute text-white/60 text-6xl top-[30%] right-[20%] animate-bounce delay-75" />
          <SiTailwindcss className="absolute text-white/70 text-5xl bottom-[20%] right-[10%] animate-pulse" />
          <FaHtml5 className="absolute text-white/50 text-4xl top-[20%] right-[30%] animate-bounce" />
          <SiNextdotjs className="absolute text-text-light text-7xl bottom-[10%] left-[50%] opacity-30" />
          <SiJavascript className="absolute text-white/80 text-5xl bottom-[30%] left-[20%] animate-pulse" />
          <FaCss3Alt className="absolute text-white/60 text-6xl top-[40%] left-[30%]" />
          <FaGitAlt className="absolute text-white/70 text-4xl top-[70%] left-[40%]" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto">
          <AnimatedSection direction="up" className="text-center lg:text-left lg:mr-16 w-full lg:max-w-xl">
            <p className="text-xl lg:text-2xl font-medium text-text-light mb-2">Hi 👋, I’m</p>
            <p className="text-4xl lg:text-5xl font-bold text-text-light mb-2">Nwakwuribe Kamsi</p>
            <div className="relative h-16 w-full max-w-lg mx-auto lg:w-[600px] lg:mx-0 flex items-center justify-center lg:justify-start">
              <h1 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-md flex items-center min-h-[3rem]">
                <TypewriterText />
              </h1>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="left" delay={200} className="mt-12 lg:mt-0 h-72 w-72 lg:h-96 lg:w-96 rounded-full overflow-hidden flex items-center justify-center relative flex-shrink-0 shadow-2xl border-4 border-dark-tertiary">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
              alt="Profile Picture"
              width={600}
              height={600}
              className="h-full w-full object-cover object-top"
              priority
            />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm border-t border-white/10 text-center">
        <AnimatedSection direction="up">
          <h2 className="text-4xl font-bold text-text-light mb-8">Learn More About Me & My Work!</h2>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={200} className="flex flex-col sm:flex-row justify-center gap-6 px-4">
          <Link
            href="/about"
            className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg shadow-lg border border-white/50 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 inline-block w-full sm:w-auto"
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg shadow-lg border border-white/50 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 inline-block w-full sm:w-auto"
          >
            My Projects
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg shadow-lg border border-white/50 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 inline-block w-full sm:w-auto"
          >
            Get In Touch
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
