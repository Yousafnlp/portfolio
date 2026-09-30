const ExperienceItem = ({ index, title, years, description, institute }) => {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative flex items-start">
      <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-black/50 backdrop-blur-sm border-2 border-white/50 z-10 flex items-center justify-center ring-2 ring-white/10">
        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white" />
      </div>

      <div
        className={`w-full md:w-[calc(50%-3.5rem)] ml-10 md:ml-0 ${
          isLeft ? "md:mr-auto" : "md:ml-auto"
        }`}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="glass-card p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
            <h3 className="text-xl sm:text-2xl font-bold glass-text">
              {institute}
            </h3>
            <span className="chip whitespace-nowrap">{years}</span>
          </div>
          <p className="text-sm sm:text-base text-white font-medium mb-4">
            {title}
          </p>
          <p className="text-neutral-500 text-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
