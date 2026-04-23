import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Briefcase,
  Brain,
  Database,
  Cpu,
  ExternalLink,
  Sparkles,
  Trophy,
  BookOpen,
  ShieldCheck,
  BarChart3,
  Globe,
  Layers,
  Code2,
  Server,
  ChevronRight,
  Search,
  Rocket,
  MonitorSmartphone,
  Lock,
  Network,
  Microscope,
  Activity,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const contact = {
  name: "Prajwal Devaraj",
  title: "Software Engineer • AI/ML Builder • Full-Stack Developer • Graduate Researcher",
  location: "Kent, Ohio, USA",
  phone: "234-296-2905",
  email: "pdevaraj001@gmail.com",
  linkedin: "https://linkedin.com/in/prajwaldevaraj",
  github: "https://github.com/prajwal-devaraj",
};

const stats = [
  { label: "Projects", value: "35+" },
  { label: "Students Supported", value: "120+" },
  { label: "Best Accuracy", value: "99%" },
  { label: "Latency Improvement", value: "30–40%" },
];

const featuredProjects = [
  {
    title: "Adaptive Query Optimizer",
    period: "Jan 2026 – Mar 2026",
    impact: "Reduced average query latency by 30–40%",
    description:
      "Built an ML-powered adaptive query optimization system using Flask, PostgreSQL, and Random Forest regression to predict SQL runtime and select dynamic execution strategies.",
    tech: ["Python", "Flask", "PostgreSQL", "scikit-learn", "Pandas", "System Design"],
    link: "https://github.com/prajwal-devaraj/adaptive-query-optimizer",
    icon: Database,
  },
  {
    title: "Web Crawler Project",
    period: "2026",
    impact: "Search + crawl + metadata extraction platform",
    description:
      "Built a Flask-based crawler with structured page extraction, metadata parsing, SQLite-backed storage, and dashboard-style browsing for discovered content.",
    tech: ["Python", "Flask", "BeautifulSoup", "SQLite", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/prajwal-devaraj/Web-Crawler-Project",
    icon: Globe,
  },
  {
    title: "SmartSpend",
    period: "Aug 2025 – Dec 2025",
    impact: "AI-powered personal finance platform",
    description:
      "Led and built a full-stack finance platform with onboarding, transactions, goals, bills, forecasting, runway analytics, and insight dashboards.",
    tech: ["React", "Flask", "MongoDB", "JWT", "Recharts", "scikit-learn"],
    link: "https://github.com/prajwal-devaraj",
    icon: BarChart3,
  },
  {
    title: "CodeTheGenome",
    period: "Jan 2025 – May 2026",
    impact: "Improved accuracy from ~87% to 93.3%",
    description:
      "Graduate research project using XGBoost, LightGBM, CatBoost, and SHAP to predict conflicting genetic variant interpretations from ClinVar data.",
    tech: ["Python", "XGBoost", "LightGBM", "CatBoost", "SHAP", "Research"],
    link: "https://github.com/prajwal-devaraj",
    icon: Brain,
  },
  {
    title: "Edge–Cloud CNC Anomaly Detection",
    period: "Jan 2026 – Present",
    impact: "Improved F1 from 0.61 to 0.81",
    description:
      "Designed a time-series anomaly detection pipeline with edge preprocessing, drift detection, continuous learning, and real-time monitoring for CNC operations.",
    tech: ["Python", "TensorFlow", "Streamlit", "MLflow", "Docker", "Time Series"],
    link: "https://github.com/prajwal-devaraj",
    icon: Cpu,
  },
  {
    title: "Secure Healthcare DBaaS",
    period: "Aug 2025 – Dec 2025",
    impact: "Privacy-preserving cloud healthcare system",
    description:
      "Built a secure healthcare database architecture using AES-GCM, HMAC, bcrypt, JWT, and RBAC to protect sensitive medical data in semi-trusted cloud environments.",
    tech: ["Flask", "MySQL", "AES-GCM", "HMAC", "JWT", "Cryptography"],
    link: "https://github.com/prajwal-devaraj",
    icon: ShieldCheck,
  },
];

const experiences = [
  {
    role: "Graduate Research Assistant",
    org: "Kent State University",
    period: "May 2025 – Present",
    points: [
      "Conducting AI/ML research across medical imaging, genomics, and intelligent systems using GPU-backed infrastructure.",
      "Working on endoscopy image analysis, CodeTheGenome, and applied ML systems with real-world research datasets.",
      "Designing feature pipelines, training models, validating results, and supporting technical reporting and publication-style documentation.",
    ],
  },
  {
    role: "Undergraduate Teaching Assistant",
    org: "Kent State University",
    period: "Sep 2025 – Present",
    points: [
      "Supporting Operating Systems and Intro to Database System Design for 120+ students across honors and regular sections.",
      "Leading reviews, grading technical assignments, clarifying systems/database concepts, and mentoring student projects.",
      "Providing structured feedback on ER design, schema design, SQL implementation, and core OS concepts.",
    ],
  },
  {
    role: "Head Cashier & Administrative Support / Student Ambassador",
    org: "Barnes & Noble College @ Kent State University Bookstore",
    period: "Aug 2024 – Present",
    points: [
      "Managed front-end operations, POS systems, reporting, training, and customer-facing support in a high-volume campus environment.",
      "Supervised workflows during peak periods and supported store operations independently when needed.",
      "Selected as Student Ambassador for outreach, promotion, and student engagement initiatives.",
    ],
  },
  {
    role: "Student Employee",
    org: "Commerce Café, Kent State University",
    period: "Sep 2024 – Jan 2026",
    points: [
      "Handled opening/closing operations, inventory readiness, training, and service coordination in a fast-paced environment.",
      "Maintained quality, cleanliness, and efficiency while supporting daily team operations.",
    ],
  },
  {
    role: "Administrator",
    org: "Sri Guruvandana Global Pre-School",
    period: "Mar 2020 – Jul 2023",
    points: [
      "Managed academic operations, scheduling, parent communication, admissions support, and daily administrative workflows.",
      "Supported 2500+ students through planning, coordination, and technology-enabled operational management.",
      "Recognized with multiple Best Employee awards and All-Time Best Performance award.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    org: "BETSOL",
    period: "May 2022 – Dec 2022",
    points: [
      "Built backend services, REST APIs, and frontend workflows for enterprise-style automation and help desk platforms.",
      "Collaborated in agile delivery environments and contributed to workflow automation and secure role-based modules.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    org: "Technofly Solutions",
    period: "Aug 2022 – Sep 2022",
    points: [
      "Contributed to a transport management project with responsive frontend modules, backend integration, and collaborative feature delivery.",
      "Worked in a team of 7 developers on bus routing, booking workflows, and operational system logic.",
    ],
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["Python", "Java", "C", "C++", "JavaScript", "SQL", "PHP", "Kotlin", "Shell Scripting"],
  },
  {
    title: "Backend, APIs & Full Stack",
    icon: Server,
    items: ["Flask", "Django", "Node.js", "Express.js", "REST APIs", "Jinja2", "React", "HTML5", "CSS3", "Responsive Web Design", "CRUD Applications", "JWT Authentication"],
  },
  {
    title: "AI / Machine Learning / Data Science",
    icon: Brain,
    items: ["Machine Learning", "Deep Learning", "CNNs", "MLPs", "Mixture of Experts", "Computer Vision", "Feature Engineering", "Data Preprocessing", "Model Evaluation", "Time-Series Analysis", "Predictive Modeling", "Explainable AI"],
  },
  {
    title: "AI/ML Libraries & Analytics",
    icon: Activity,
    items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "SHAP", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Tableau", "Librosa", "NetworkX", "Gensim"],
  },
  {
    title: "Databases & Data Engineering",
    icon: Database,
    items: ["MongoDB", "Mongita", "MySQL", "PostgreSQL", "SQLite", "SQL Server", "Database Design", "Query Optimization", "Indexing", "Sharding", "Replication", "GeoJSON", "PyMongo"],
  },
  {
    title: "Cloud, DevOps & Deployment",
    icon: Rocket,
    items: ["Docker", "AWS", "Render", "Git", "GitHub", "GitHub Codespaces", "Gunicorn", "REST API Deployment", "WebSocket Communication", "Cloud Database Integration", "MLflow"],
  },
  {
    title: "Security, Systems & Core CS",
    icon: Lock,
    items: ["Data Structures & Algorithms", "Operating Systems", "OOP", "System Design", "Distributed Systems (Basics)", "Authentication & Authorization", "Web Security", "AES-GCM", "HMAC", "bcrypt", "RBAC", "OPE", "Cryptography"],
  },
  {
    title: "Tools, Platforms & Research Areas",
    icon: Microscope,
    items: ["VS Code", "PyCharm", "Jupyter Notebook", "Postman", "Android Studio", "Figma", "Medical Image Processing", "Sensor Data Analysis", "IoT Device Integration", "Real-Time Monitoring", "Graph Analytics", "Smart Systems"],
  },
];

const allProjects = [
  "Edge-Cloud Collaborative Anomaly Detection for CNC Machining — analyzed 1M+ sensor points, improved F1 from 0.61 to 0.81, added drift detection and real-time monitoring.",
  "Mice Odour Detection & Behavior Analysis System — sensor-driven ML pipeline for odor-based behavioral analysis.",
  "Firehawk Bird Detection & Environmental Monitoring System — computer vision pipeline for bird detection/classification with near real-time monitoring goals.",
  "Endoscopy Image Analysis for Gastrointestinal Abnormality Detection — medical imaging research with CNN-based classification and segmentation.",
  "CodeTheGenome – ClinVar Conflict Prediction — ensemble learning + SHAP project improving prediction accuracy to 93.3%.",
  "Mixture of Experts – Explicit Function Decomposition — gated expert routing for interpretable conditional computation.",
  "CNN with 3×3 Kernels + Manual Convolution Verification — ~99% MNIST accuracy and numerical verification against PyTorch.",
  "3-Layer MLP for MNIST – Loss Function & Numerical Stability Study — NumPy-first MLP exploring optimization and stability.",
  "Adaptive Query Optimizer — ML-powered SQL runtime prediction system reducing average latency by 30–40%.",
  "Disaster Management & Early Warning System — multi-hazard prediction platform with real-time risk classification and maps.",
  "VishingAI – Voice Phishing Detection System — audio phishing detection pipeline with ML-based inference.",
  "SmartSpend – AI-Powered Personal Finance Platform — full-stack finance platform with forecasting, dashboards, and behavioral analytics.",
  "Secure Healthcare DBaaS (SecHealthDB) — secure DBaaS with encryption, integrity verification, RBAC, and privacy-preserving cloud storage.",
  "IDERS – Intelligent Disaster & Emergency Reporting System — geospatial incident reporting platform with CRUD APIs and GeoJSON storage.",
  "MNIST Visual Autoregressive Modeling – Next-Scale Prediction — convolutional autoencoder for compact image representation.",
  "Text2Language – Language Detection Web Application — Flask-based app supporting 100+ languages.",
  "AI Avatar & Cartoon Generator — real-time avatar stylization app using OpenCV image processing.",
  "Facebook Graph Network Analysis — analyzed ~4K nodes and ~88K edges using graph metrics and centrality.",
  "Intelligent Alarm Clock Dashboard — smart dashboard integrating weather, transit, live clock, and alerts using C++ and web UI.",
  "PIRVISION – Human Presence Detection — supervised ML framework for vacancy/stationary/motion classification.",
  "ADL Recognition (Unsupervised Learning) — discovered smart-home activity patterns from sensor logs using clustering.",
  "Facial Emotion Recognition (7-Class CNN) — designed CNN with regularization and class imbalance handling.",
  "Don’t Touch Your Face — CNN-based face-touch behavior classifier achieving 96.6% test accuracy.",
  "Network Anomaly Detection (Frequent Pattern Mining + ML) — anomaly detection around Apriori-mined behavior patterns.",
  "DeepWalk Graph Embedding — implemented DeepWalk from scratch for unsupervised node representation learning.",
  "MOOC User Action Analysis & Forecasting — processed event logs and built a baseline forecasting workflow.",
  "Library Inventory & Management System — full-stack system for books, issue/return workflows, and dashboards.",
  "Real-Time Inventory Management System — inventory tracking platform with validation and secure update/delete flows.",
  "Bus Transportation Management System — worked on route scheduling, booking workflows, and backend/frontend integration.",
  "Integrated Fire & Wildlife Monitoring System — OpenCV-based fire and movement monitoring system with alerts.",
  "JSS Fashion UI/UX Design — high-fidelity Figma prototype with branding and interaction design.",
  "Mobile Quiz App — Android quiz app with Docker-based development environment.",
  "Bajpe Air Crash 3D Simulation — graphics project showcasing transformations, animation, projection, and rendering.",
  "Student & School Management Systems — management systems using MERN, Node/Express, and HTML/CSS/JS.",
  "COVID Tracking Management System — web-based system for patient registration, vaccination tracking, and case monitoring.",
  "Astrology Finding – Pattern Analysis & Predictive Modeling — exploratory data-driven hybrid rule-based + ML system.",
  "Queries over Distributed Time-Series Data — exploring indexing, partitioning, and aggregation strategies.",
];

const leadership = [
  "Graduate Research Assistant, Kent State University",
  "Undergraduate Teaching Assistant, Kent State University",
  "Student Ambassador, Barnes & Noble College",
  "HACKSU Member",
  "Kent Indian Association Member",
  "Technical Club Member (CS & Software Development)",
  "CSE Coordinator, JSS Academy of Technical Education",
  "Sudo Club – Head",
  "Debate & Public Speaking Team – Coordinator & Head",
  "JSS Anveshan – CSE Department Head",
  "Campus Ambassador (JSS)",
  "Mr. JSS Talented Winner",
];

function SectionTitle({ icon: Icon, eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">
        <Icon className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">{subtitle}</p>
    </div>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon || Layers;
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="h-full rounded-[1.75rem] border-white/10 bg-slate-900/70 shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-slate-400">{project.period}</p>
              </div>
            </div>
            <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-white">
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-sm font-medium text-fuchsia-300">{project.impact}</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full border border-white/10 bg-white/5 text-slate-200">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function PrajwalCrazyPortfolioFull() {
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allProjects;
    return allProjects.filter((p) => p.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl"
        >
          <div className="grid gap-10 p-6 md:grid-cols-[1.35fr_0.9fr] md:p-10 lg:p-14">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-200">
                <Sparkles className="h-4 w-4" />
                Open to Software Engineering, Backend, Full-Stack, Database, Platform, and AI/ML roles
              </div>

              <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                {contact.name}
                <span className="block bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Crazy builder energy. Research depth. Production-minded engineering.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                {contact.title}. Master’s student in Computer Science at Kent State University with strong experience across AI/ML, backend systems, databases, security, IoT, and full-stack development. I build systems that solve real problems — from medical imaging and genomics to intelligent finance, anomaly detection, query optimization, and emergency systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-2xl px-6">
                  <a href={`mailto:${contact.email}`}>
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                  <a href={contact.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                  <a href={contact.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> {contact.location}</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-300" /> {contact.phone}</div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-300" /> {contact.email}</div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="rounded-3xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <div className="text-3xl font-black text-white md:text-4xl">{item.value}</div>
                  <div className="mt-2 text-sm text-slate-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8">
              <SectionTitle
                icon={Trophy}
                eyebrow="Profile"
                title="What makes this portfolio hit hard"
                subtitle="This page is built to feel premium while still helping recruiters scan your strengths fast: research, engineering, delivery, leadership, and measurable results."
              />
              <div className="grid gap-3">
                {[
                  "Graduate Research Assistant working on medical AI, genomics, and intelligent systems.",
                  "Teaching Assistant trusted with grading, mentoring, and helping 120+ students across core CS subjects.",
                  "Built 35+ projects across AI/ML, databases, distributed data, security, computer vision, and full-stack systems.",
                  "Comfortable moving from idea → architecture → model → API → dashboard → deployment-style delivery.",
                  "Strong mix of academic rigor, practical software building, and team leadership experience.",
                  "Actively targeting software engineering, backend, database, platform, and ML-oriented roles.",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm leading-7 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8">
              <SectionTitle
                icon={GraduationCap}
                eyebrow="Education"
                title="Academic foundation"
                subtitle="Strong coursework across systems, AI, databases, privacy, graphics, robotics, and applied engineering."
              />

              <div className="space-y-5">
                <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
                  <div className="text-lg font-semibold text-white">Kent State University</div>
                  <div className="mt-1 text-sm text-cyan-300">M.S. in Computer Science • Aug 2024 – May 2026</div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
                  <div className="text-lg font-semibold text-white">JSS Academy of Technical Education, VTU</div>
                  <div className="mt-1 text-sm text-cyan-300">B.E. in Computer Science • Aug 2019 – Jun 2023</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8">
          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8 md:p-10">
              <SectionTitle
                icon={Rocket}
                eyebrow="Featured Work"
                title="Selected projects that show range + depth"
                subtitle="From backend systems and intelligent dashboards to research-heavy ML pipelines, these are standout projects that instantly signal capability."
              />
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8">
          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8 md:p-10">
              <SectionTitle
                icon={Briefcase}
                eyebrow="Experience"
                title="Work that built real engineering maturity"
                subtitle="A mix of research, teaching, internships, operations, and leadership that shows you can learn fast, communicate clearly, and take ownership."
              />
              <div className="grid gap-5 lg:grid-cols-2">
                {experiences.map((exp) => (
                  <div key={`${exp.role}-${exp.org}`} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                        <p className="text-sm text-cyan-300">{exp.org}</p>
                      </div>
                      <Badge className="rounded-full border border-white/10 bg-white/5 text-slate-200">{exp.period}</Badge>
                    </div>
                    <div className="mt-4 space-y-3">
                      {exp.points.map((point) => (
                        <div key={point} className="flex gap-3 text-sm leading-7 text-slate-300">
                          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-fuchsia-300" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8">
          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8 md:p-10">
              <SectionTitle
                icon={Layers}
                eyebrow="Skills"
                title="Everything you bring to the table"
                subtitle="Expanded to cover all the technical depth you shared — programming, backend, AI/ML, analytics, security, cloud, tools, systems, and research areas."
              />
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {skillGroups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <div key={group.title} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-xl bg-white/10 p-2 text-cyan-300">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="text-sm font-semibold text-white">{group.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Badge key={item} variant="secondary" className="rounded-full border border-white/10 bg-white/5 text-slate-200">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8">
          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8 md:p-10">
              <SectionTitle
                icon={BookOpen}
                eyebrow="All Projects"
                title="Complete project universe"
                subtitle="Every major project you shared is included here. Search by keyword like Flask, PyTorch, security, MongoDB, Android, or distributed systems."
              />

              <div className="mb-6 flex max-w-md items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 p-3">
                <Search className="h-4 w-4 text-slate-400" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects, tools, domains..."
                  className="border-0 bg-transparent text-white placeholder:text-slate-500 focus-visible:ring-0"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project) => (
                  <div key={project} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 text-sm leading-7 text-slate-300">
                    {project}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8 md:p-10">
              <SectionTitle
                icon={Network}
                eyebrow="Leadership"
                title="Leadership, campus impact, and presence"
                subtitle="You’re not just building projects — you’ve also led, taught, organized, represented, and supported communities across multiple roles."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {leadership.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm leading-7 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8 md:p-10">
              <SectionTitle
                icon={MonitorSmartphone}
                eyebrow="Online Presence"
                title="Find my work"
                subtitle="Use this section as the recruiter action point — GitHub, LinkedIn, and direct contact."
              />

              <div className="space-y-4">
                <a href={contact.github} target="_blank" rel="noreferrer" className="block rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-white"><Github className="h-4 w-4" /> GitHub</div>
                      <p className="mt-2 text-sm text-slate-300">Explore repositories including Adaptive Query Optimizer, Web Crawler Project, ML systems, security apps, and full-stack platforms.</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </div>
                </a>

                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="block rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-white"><Linkedin className="h-4 w-4" /> LinkedIn</div>
                      <p className="mt-2 text-sm text-slate-300">Professional profile for roles in software engineering, backend systems, AI/ML, and platform-oriented work.</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </div>
                </a>

                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-fuchsia-500/10 via-cyan-500/10 to-indigo-500/10 p-6">
                  <h3 className="text-xl font-semibold text-white">Let’s build something meaningful.</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    I’m actively looking for opportunities where I can contribute across software engineering, backend systems, full-stack product development, intelligent platforms, data systems, and applied AI/ML.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button asChild className="rounded-2xl">
                      <a href={`mailto:${contact.email}`}>
                        <Mail className="mr-2 h-4 w-4" /> Email Me
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-white/5 text-white hover:bg-white/10">
                      <a href={contact.linkedin} target="_blank" rel="noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" /> Connect
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
