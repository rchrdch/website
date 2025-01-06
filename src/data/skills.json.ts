export interface Template {
  category: string;
  skills: string[];
}

const computerLanguages: Template = {
  category: "Computer Languages:",
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "Java",
    "SQL",
    "GraphQL",
  ],
};

const frameworksAndLibraries: Template = {
  category: "Frameworks & Libraries:",
  skills: [
    "React",
    "MUI",
    "Tailwind",
    "Astro",
    "Flask",
    "Django",
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
    "Vercel",
    "Asana",
    "Jira",
    "Confluence",
    "Notion",
    "Coda",
    "Loom",
    "Postman",
    "Docker",
    "Heroku",
    "MySQL Workbench",
    "Jupyter Notebook",
    "Audacity",
    "Google Analytics",
    "PostgreSQL",
    "MongoDB",
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
  skills: ["Vue.js", "Swift", "Xcode"],
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
