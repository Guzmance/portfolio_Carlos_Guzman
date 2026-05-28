import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/60"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border shadow-2xl rounded-2xl bg-gradient-to-b from-navy to-midnight border-white/10"
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Close */}
        <button
          onClick={closeModal}
          className="absolute z-10 p-1.5 rounded-full top-4 right-4 bg-midnight/80 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <img src="assets/close.svg" className="w-5 h-5" />
        </button>

        {/* Image header */}
        <div className="relative overflow-hidden rounded-t-2xl h-52">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = "https://placehold.co/600x300/1C0B19/4EA699?text=No+Image"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
          <h2 className="absolute bottom-4 left-5 text-2xl font-bold text-white drop-shadow-lg">
            {title}
          </h2>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <p className="text-neutral-300 text-sm leading-relaxed">{description}</p>

          {/* Bullet list */}
          <ul className="space-y-2.5">
            {subDescription.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-neutral-400">
                <span className="mt-[5px] shrink-0 w-1.5 h-1.5 rounded-full bg-aqua" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10 flex-wrap gap-3">
            <div className="flex gap-3 flex-wrap">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="w-9 h-9 rounded-lg object-contain hover:-translate-y-1 transition-transform duration-200"
                />
              ))}
            </div>

            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-aqua text-midnight font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Visit Site ↗
              </a>
            ) : (
              <span className="text-xs text-neutral-600 italic">No live link available</span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
