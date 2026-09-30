import React from "react";

const skillGroups = [
  {
    title: "Core",
    skills: ["React 19", "Next.js 16", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "AI-Assisted Development (Vibe Coding)",
    skills: ["Claude Code", "OpenAI Codex", "Cursor"],
  },
  {
    title: "Strengths",
    skills: ["Pixel-Perfect UI", "Code Quality"],
  },
  {
    title: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "Radix UI",
      "Base UI",
      "shadcn/ui (CVA, tailwind-merge)",
      "Motion",
      "Lucide Icons",
      "next-themes",
    ],
  },
  {
    title: "State & Data",
    skills: [
      "Redux Toolkit",
      "TanStack Query",
      "TanStack Table",
      "Axios",
      "nuqs",
    ],
  },
  {
    title: "Forms & Validation",
    skills: ["React Hook Form", "Zod"],
  },
  {
    title: "Rich Content & Editors",
    skills: [
      "Tiptap",
      "CodeMirror",
      "React Markdown / Remark / Rehype",
      "Mermaid",
      "D3",
      "PDF.js",
      "WaveSurfer.js",
    ],
  },
  {
    title: "Auth, Payments & i18n",
    skills: ["NextAuth", "Stripe", "next-intl"],
  },
  {
    title: "Tooling & Deployment",
    skills: ["Yarn Workspaces (Monorepo)", "Git"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="section-title">Skills</h2>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass-card p-4 sm:p-5"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h4 className="text-lg font-bold mb-4 text-center glass-text">
                {group.title}
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
