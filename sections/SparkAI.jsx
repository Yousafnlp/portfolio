import React from "react";

const screenshots = [
  { image: "/assets/sparkai-chat.png", title: "AI Assistant Chat" },
  { image: "/assets/sparkai-overview.png", title: "Account Overview" },
  { image: "/assets/sparkai-users.png", title: "User Management" },
  { image: "/assets/sparkai-logs.png", title: "Activity Logs" },
];

const SparkAI = () => {
  return (
    <section id="sparkai" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="section-title">SparkAI</h2>

        <div
          className="glass-card p-5 sm:p-8 flex flex-col gap-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="chip">Product-Based Company</span>
            <p className="text-sm sm:text-base text-neutral-500 max-w-xl">
              My work at SparkAI is proprietary, so it isn&apos;t listed
              publicly. It can be shared on demand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {screenshots.map((shot) => (
              <div key={shot.image} className="flex flex-col gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.image}
                  alt={shot.title}
                  className="w-full h-auto object-cover rounded-lg border border-white/10"
                />
                <p className="text-xs text-neutral-500 text-center">
                  {shot.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkAI;
