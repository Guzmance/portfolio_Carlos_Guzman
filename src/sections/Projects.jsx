import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion } from "motion/react";

const filterGroups = {
  All: () => true,
  Web: (p) => ["E-Commerce", "SaaS", "Corporate", "Web App", "Cross-Platform"].includes(p.category),
  "POS & ERP": (p) => ["POS System", "ERP System"].includes(p.category),
  Mobile: (p) => p.category === "Mobile App",
  Dashboard: (p) => p.category === "Dashboard",
  Clone: (p) => p.category === "UI Clone",
};

const filters = Object.keys(filterGroups);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = myProjects.filter(filterGroups[activeFilter]);

  return (
    <section className="relative c-space section-spacing" id="projects">
      <h2 className="text-heading">My Selected Projects</h2>
      <p className="mt-3 text-neutral-400 max-w-xl text-sm md:text-base">
        A collection of projects spanning web platforms, mobile apps, dashboards, and more.
      </p>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mt-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
              activeFilter === f
                ? "bg-aqua text-midnight border-aqua"
                : "border-white/20 text-neutral-400 hover:border-white/40 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filtered.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
          >
            <Project {...project} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
