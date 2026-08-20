export const profile = {
  name: 'Kaushal Nepal',
  initials: 'KN',
  role: 'backend & ai engineer',
  email: 'kaushalnepal12@gmail.com',
  github: 'https://github.com/kaushal320',
  site: 'kaushalnepal.com.np',
  year: '2026',
}

export const hero = {
  eyebrow: '~/kaushal-nepal — backend & ai engineer',
  title: 'I build the systems that route, retrieve, and reason.',
  highlights: [
    { word: 'route', color: 'text-melon' },
    { word: 'retrieve', color: 'text-leaf' },
    { word: 'reason', color: 'text-sky' },
  ],
  lead: 'Backend and AI engineer in Nepal, shipping production-grade multi-agent assistants and RAG pipelines — from LangGraph orchestration to CI-gated evaluation.',
  ctas: [
    { label: 'View projects', href: '#projects', variant: 'solid' },
    { label: 'Say hello', href: `mailto:${profile.email}`, variant: 'outline' },
  ],
  marquee: [
    'LangGraph',
    'RAG',
    'FastAPI',
    'Multi-Agent',
    'Qdrant',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'CI/CD',
    'Groq',
    'Gemini',
    'React',
    'Streamlit',
  ],
}

export const about = {
  eyebrow: '/about',
  title: 'Backend systems, wired for agents.',
  body: "I'm a backend and AI engineer based in Nepal, finishing a BSc (Hons) Computing at The British College. Most of my recent work sits at the intersection of backend systems and agentic AI — routing user requests through LangGraph graphs, grounding answers in retrieved context, and wrapping all of it in the guardrails, evals, and CI gates that separate a production system from a demo.",
  terminal: [
    'cat capabilities.txt',
    'route requests across specialized agents with LangGraph',
    'ground responses in retrieved context (RAG + reranking)',
    'ship guardrails, evals, and CI gates — not just demos',
    'persist state with Postgres, MongoDB, Redis, and Qdrant',
  ],
  stats: [
    { value: '2', label: 'internships', accent: 'bg-sun' },
    { value: '4+', label: 'projects shipped', accent: 'bg-leaf' },
    { value: 'BSc', label: 'Hons Computing', accent: 'bg-sky' },
  ],
}

export const experience = {
  eyebrow: '/experience',
  title: "Where I've worked.",
  items: [
    {
      company: 'Creta Labs',
      date: 'Aug 2025 – Nov 2025',
      role: 'Backend Developer Intern · Manbhawan, Lalitpur',
      points: [
        'Contributed to backend development and maintenance of Mokshya AI, implementing fixes and improving existing functionality.',
        'Fixed database-related issues involving data persistence, saving, updating, and retrieving application data.',
        'Investigated and resolved backend bugs, improving application stability.',
        'Collaborated with the development team to troubleshoot issues and maintain backend functionality.',
      ],
    },
    {
      company: 'Mobilemandu',
      date: 'Mar 2024 – Sept 2024',
      role: 'Digital Marketing · Baneshwor, Kathmandu',
      points: [
        'Managed and optimized social media campaigns, increasing engagement over a 4-month period.',
        'Created content strategies with Canva and Meta Business to support product promotions.',
      ],
    },
  ],
}

export const projects = {
  eyebrow: '/projects',
  title: "Things I've shipped.",
  items: [
    {
      title: 'Enterprise-Grade Agentic RAG Application',
      live: true,
      pills: ['FastAPI', 'LangGraph', 'Qdrant', 'Jina AI', 'Portkey', 'Groq', 'Neon Postgres', 'Upstash Redis'],
      desc: 'A production-grade agentic RAG system for enterprise technical documentation: a LangGraph Planner–Retriever–Responder pipeline, Qdrant vector search reranked via Jina AI, Pydantic-validated guardrails, Portkey-routed LLM calls with Groq fallback, and a CI/CD pipeline gated on live RAGAS quality checks.',
      links: [
        { label: 'GitHub', href: 'https://github.com/kaushal320/Enterprise-Grade-RAG-Application', icon: 'github' },
        { label: 'Live demo', href: 'https://enterprise-grade-rag-application-1.onrender.com/', icon: 'external' },
      ],
    },
    {
      title: 'MultiAgent AI Assistant (Cortex AI)',
      live: true,
      pills: ['FastAPI', 'LangGraph', 'MongoDB', 'Beanie', 'Redis', 'Qdrant', 'Firebase', 'Gemini'],
      desc: 'A full-stack multi-agent assistant with a LangGraph router directing prompts to specialized chat, search, coding, PDF, PPT, image, and RAG agents — SSE-streamed responses, Firebase-authenticated Redis-backed sessions on MongoDB, and per-conversation PDF RAG using Gemini embeddings indexed into Qdrant.',
      links: [
        { label: 'GitHub', href: 'https://github.com/kaushal320/multi-agent-ai', icon: 'github' },
        { label: 'Live demo', href: 'https://multi-agent-ai-9.onrender.com/', icon: 'external' },
      ],
    },
    {
      title: 'Explainable AI Academic Guidance Platform',
      live: false,
      pills: ['FastAPI', 'scikit-learn', 'SHAP', 'LangChain', 'Groq Whisper', 'MediaPipe', 'MongoDB', 'React'],
      desc: 'An explainable AI academic advisor that predicts optimal career paths from student competency data, with SHAP surfacing the exact factors behind each recommendation. Extended with a RAG-powered course-resource chatbot, a Groq Whisper voice tutor, and MediaPipe-based engagement tracking.',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/kaushal320/Explainable-Agent-Based-AI-for-Student-Academic-Guidance',
          icon: 'github',
        },
      ],
    },
    {
      title: 'AI News Summarizer',
      live: false,
      pills: ['LangGraph', 'LangChain', 'Groq', 'Tavily', 'Streamlit'],
      desc: 'A LangGraph-orchestrated agentic app with three graph-based workflows: a basic Groq LLM chatbot, a Tavily-search-augmented web chatbot, and an AI-news pipeline that fetches, summarizes, and saves daily, weekly, and monthly markdown digests.',
      links: [{ label: 'GitHub', href: 'https://github.com/kaushal320/AI_News_summarizer', icon: 'github' }],
    },
  ],
}

export const skills = {
  eyebrow: '/skills',
  title: 'What I build with.',
  categories: [
    { name: 'Languages', tags: ['Python', 'JavaScript', 'TypeScript'] },
    { name: 'Frontend', tags: ['React', 'HTML/CSS', 'Tailwind CSS', 'Vite'] },
    { name: 'AI & Agentic', tags: ['LangGraph', 'LangChain', 'RAG', 'Groq', 'Gemini', 'Tavily'] },
    { name: 'Backend', tags: ['FastAPI', 'JWT Auth', 'Firebase Auth', 'OAuth'] },
    { name: 'Databases & Caching', tags: ['MongoDB', 'PostgreSQL', 'Redis', 'Qdrant'] },
    { name: 'Tools & DevOps', tags: ['Docker', 'GitHub Actions', 'Streamlit', 'MediaPipe'] },
  ],
}

export const education = {
  eyebrow: '/education',
  title: 'Where I studied.',
  items: [
    {
      school: 'The British College',
      degree: 'BSc (Hons) Computing — First Class Honours',
      date: 'Sept 2022 – June 2026',
    },
  ],
}

export const contact = {
  eyebrow: '/contact',
  title: 'Open to backend and AI engineering roles — internships and full-time.',
  sub: 'The fastest way to reach me is email. I usually reply within a day.',
  ctas: [
    { label: profile.email, href: `mailto:${profile.email}`, variant: 'solid' },
    { label: 'GitHub ↗', href: profile.github, variant: 'outline' },
  ],
}