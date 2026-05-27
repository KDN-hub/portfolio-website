import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Projects | Nwakwuribe Kamsi Portfolio",
  description: "Explore the latest projects and applications built by Nwakwuribe Kamsi.",
};

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12 lg:py-20 max-w-7xl">
      <AnimatedSection direction="up">
        <h1 className="text-4xl md:text-5xl font-bold text-text-light mb-12 text-center">
          My <span className="text-white drop-shadow-md">Projects</span>
        </h1>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <AnimatedSection direction="up" delay={idx * 100} key={project.id}>
            <div className="group h-full bg-black/20 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-white transition-all duration-300 ease-in-out flex flex-col">
            {/* Project Image */}
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-text-light mb-3 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-text-muted mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 text-xs font-semibold text-white/80 rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white font-semibold rounded-lg shadow-lg border border-white/50 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 text-text-light font-bold rounded-lg border border-white/20 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
                >
                  <FaGithub size={18} /> GitHub
                </a>
              </div>
            </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
