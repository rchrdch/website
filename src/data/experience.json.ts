export interface Template {
  url: string;
  id: string;
  description: string[];
  company: string;
  role: string;
  year: string;
}

const vantageRisk: Template = {
  url: "/experience#vantage-risk",
  id: "vantage-risk",
  company: "Vantage Risk",
  year: "May 2024 - Current",
  role: "Full Stack Software Engineer",
  description: [],
};

const stegAi: Template = {
  url: "/experience#steg-ai",
  id: "steg-ai",
  company: "Steg.AI",
  year: "Jan 2023 - March 2024",
  role: "Full Stack Software Engineer & Product Designer",
  description: [
    "Product Design:",
    "Increased user engagement metrics and established a design system for faster iterations and implementation by spearheading product design initiatives. Utilized Figma and leveraged data from user research/interviews to solve customers' pain points, create new features and user flows, elevate the UX, and ensure accessible and unified designs for user-facing applications.",

    "Web Application: ",
    "Revamped the frontend and backend for the web app (React, JavaScript, Python), which interfaces with AI models, to optimize stability, speed, functionality, and clean code. Architected the customer onboarding (registration, login, billing, and usage) flow, enabling enhanced security protocols and increasing signup growth to over 40 non-enterprise users. Implemented and deployed endpoints utilizing cloud computing tools (like AWS Lambda, S3, and Cognito) to expand features and system interoperability. Modeled responsive and interactive data visualizations to display easily digestible information to users. Integrated Stripe's APIs to facilitate frictionless customer payments, invoices, and subscriptions. Executed data transformations to restructure data for over 100 users in multiple environments within DynamoDB.",

    "Website:",
    "Generated over 60 inbound business inquiries, improved SEO and performance, and accelerated sales leads by collaborating with Marketing & PR teams to develop content and conversion funnel features for the company's website. Maintained API documentation and created sample scripts for seamless API integration.",
  ],
};
const strongarmTechnologies: Template = {
  url: "/experience#strongarm-technologies",
  id: "strongarm-technologies",
  company: "StrongArm Technologies",
  year: "Mar 2022 - Nov 2022",
  role: "Software Engineer",
  description: [
    "Web Dashboard:",
    "Increased client usage of the web dashboard by 48% through developing new features on both the frontend (React & TypeScript) and backend (Python & Flask) codebase, improving the UI & UX, and conducting QA testing, while collaborating in a multidisciplinary, agile team of Product Managers, Designers, and Engineers.",

    "Data Visualizations:",
    "Modeled actionable data visualizations using D3 and writing SQL queries for MySQL & ClickHouse databases to arrange complex data into easily understandable formats to clients and customers.",

    "Data Analytics:",
    "Spearheaded projects for integrating user and product analytics tools to capture client engagement metrics resulting in increased data-informed business decisions for stakeholders.",
  ],
};
const decoded: Template = {
  url: "/experience#decoded",
  id: "decoded",
  company: "Decoded",
  year: "Jun 2021 - Mar 2022",
  role: "Junior Product Developer",
  description: [
    "Web Applications:",
    "Developed and scaled 2 Python web applications and 4 suites of products on various technical content (such as APIs, machine learning / AI, cybersecurity, crypto, blockchain, and data storytelling) in a cross-functionally collaborative team and in an agile, feedback-driven environment.",

    "Client Engagement:",
    "Solved clients' technical learning needs via researching case studies and consulting SMEs to make data-informed decisions, resulting in leading over 100 technical workshops on digital transformation for senior Fortune 50 clients in various industries, such as financial services, consumer packaged goods (CPG), and retail.",

    "Product Team:",
    "Established a central platform to streamline product release notes and enable data analytics. Standardized staging and production settings for organizing over 200 external resources to accelerate efficiency and collaboration.",

    "Product Design:",
    "Conducted user research and redesigned applications to solve customers' pain points and enhance the overall UI & UX. Created brand designs and animations for company accounts across social media platforms to increase brand awareness and growth.",
  ],
};

export const byName = {
  vantageRisk,
  stegAi,
  strongarmTechnologies,
  decoded,
};

export default Object.values(byName);
