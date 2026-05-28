import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const categoryStyles = {
  "E-Commerce": "bg-orange/20 text-orange border-orange/40",
  "SaaS": "bg-aqua/20 text-aqua border-aqua/40",
  "Cross-Platform": "bg-mint/20 text-mint border-mint/40",
  "Corporate": "bg-royal/20 text-white border-royal/40",
  "Dashboard": "bg-fuchsia/20 text-fuchsia border-fuchsia/40",
  "UI Clone": "bg-coral/20 text-coral border-coral/40",
  "Web App": "bg-sand/20 text-sand border-sand/40",
  "Mobile App": "bg-mint/20 text-mint border-mint/40",
  "POS System": "bg-aqua/20 text-aqua border-aqua/40",
  "ERP System": "bg-royal/20 text-white border-royal/40",
};

const Project = ({
  id,
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  category,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const num = String(id).padStart(2, "0");
  const badgeStyle = categoryStyles[category] || "bg-white/10 text-white border-white/20";

  return (
    <>
      <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-navy to-midnight hover:border-white/25 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 h-full">
        {/* Image */}
        <div className="relative overflow-hidden h-48 shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { e.target.src = "https://placehold.co/600x300/1C0B19/4EA699?text=No+Image"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
          {/* Project number */}
          <span className="absolute bottom-3 left-4 text-6xl font-bold text-white/10 select-none leading-none">
            {num}
          </span>
          {/* Category badge */}
          {category && (
            <span className={`absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full border font-semibold tracking-wide ${badgeStyle}`}>
              {category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <h3 className="text-base font-semibold leading-snug text-white group-hover:text-aqua transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Tech icons */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {tags.map((tag) => (
              <img
                key={tag.id}
                src={tag.path}
                alt={tag.name}
                title={tag.name}
                className="w-6 h-6 object-contain rounded opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-2 w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-white/10 text-sm text-neutral-300 hover:bg-white/5 hover:text-white hover:border-white/30 transition-all duration-200 cursor-pointer"
          >
            View Details
            <img src="assets/arrow-right.svg" className="w-4" />
          </button>
        </div>
      </div>

      {isOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Project;
