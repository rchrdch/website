export interface Template {
  category: string;
  skills: string[];
}

const computerLanguages: Template = {
  category: "Computer Languages:",
  skills: ["JavaScript", "Python", "TypeScript", "HTML", "CSS", "Java", "SQL"],
};

const frameworksAndLibraries: Template = {
  category: "Frameworks & Libraries:",
  skills: [
    "React",
    "MUI",
    "Tailwind",
    "Astro",
    "Flask",
    "Recharts",
    "D3",
    "Dash",
    "Scikit",
    "Pandas",
    "Node.js",
  ],
};

const toolsAndSoftware: Template = {
  category: "Tools & Software:",
  skills: [
    "Git",
    "Amazon Web Services (AWS)",
    "Microsoft Visual Studio Code",
    "Pendo",
    "Postman",
    "Docker",
    "Heroku",
    "MySQL Workbench",
    "Jupyter Notebook",
    "Vercel",
    "Asana",
    "Jira",
    "Notion",
    "Coda",
    "Loom",
    "Audacity",
  ],
};

const designTools: Template = {
  category: "Design Tools:",
  skills: [
    "Figma",
    "Webflow",
    "Blender",
    "Jitter",
    "Adobe Photoshop",
    "Adobe Spark",
    "GIMP",
    "Photopea",
    "Inkscape",
  ],
};

const familiarity: Template = {
  category: "Familiarity With:",
  skills: [
    "Google Analytics",
    "Vue.js",
    "PostgreSQL",
    "MongoDB",
    "Swift",
    "Xcode",
  ],
};

const spokenLanguages: Template = {
  category: "Spoken Languages:",
  skills: ["English", "Korean"],
};

export const byCategory = {
  computerLanguages,
  frameworksAndLibraries,
  toolsAndSoftware,
  designTools,
  familiarity,
  spokenLanguages,
};

export default Object.values(byCategory);
