import { motion, type Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projectsData = [
    {
      id: 1,
      title: t("projectd.0.title"),
      description: t("projectd.0.description"),
      technologies: [
        "Next.js",
        "GROQ",
        "Calendly",
        "Tailwind",
        "PWA",
        "Supabase",
        "Auth0",
      ],
      imageSrc: "/barber.png",
      liveUrl: "https://final-barber-tullok.vercel.app/",
      repoUrl: "",
      linkText: t("projects.linkText"),
    },
    {
      id: 2,
      title: t("projectd.1.title"),
      description: t("projectd.1.description"),
      technologies: [
        "React",
        "Tailwind",
        "Axios",
        "Zustand",
        "PWA",
        "PostgreSQL",
        "Auth0",
        "NestJS",
      ],
      imageSrc: "/sp.png",
      liveUrl: "https://frontend-basv1.vercel.app/",
      repoUrl: "https://github.com/NicolasArtemio/frontend-basv1",
      linkText: t("projects.linkText"),
    },
    {
      id: 3,
      title: t("projectd.2.title"),
      description: t("projectd.2.description"),
      technologies: [
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Google Gemini AI",
        "Mercado Pago",
        "Socket.io",
        "Docker",
      ],
      imageSrc: "/veterinary_symbol.png",
      liveUrl: "https://appvetfront-sable.vercel.app/",
      repoUrl: "",
      linkText: t("projects.linkText"),
    },
  ];

  return (
    <section
      id="projects"
      className="bg-transparent py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="flex flex-col mb-16"
        >
          <div className="space-y-2">
            <h2
              id="projects-heading"
              className="text-4xl md:text-5xl font-black text-[var(--text-primary)]"
            >
              {t("projects.title")}
            </h2>
            <div className="h-2 w-16 bg-[var(--accent-primary)] rounded-full" />
          </div>
          <p className="text-xl text-[var(--text-primary)]/60 max-w-2xl font-medium italic mt-4">
            {t("projects.tagline")}
          </p>
        </motion.div>

        {/* Tab */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex space-x-6 mb-12 border-b border-[var(--border-color)]"
        >
          <button className="text-lg font-bold border-b-4 border-[var(--accent-primary)] text-[var(--text-primary)] pb-3 transition duration-300">
            {t("projects.tab")}
          </button>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid gap-6 lg:grid-cols-3 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
