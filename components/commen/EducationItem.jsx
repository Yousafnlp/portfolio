const EducationItem = ({ title, description, institute }) => {
  return (
    <div
      className="glass-card p-5 sm:p-6 text-center flex flex-col gap-2 hover:border-white/20 transition-colors duration-300"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <span className="text-xs text-neutral-500 uppercase tracking-wider">
        {title.replace(":", "")}
      </span>
      <h4 className="text-lg font-bold glass-text">{description}</h4>
      <p className="text-sm text-neutral-500">{institute}</p>
    </div>
  );
};
export default EducationItem;
