const BASE = import.meta.env.BASE_URL;

export const projects = [
  {
    id: "banking-ai",
    title: "Banking AI Customer Service SaaS",
    shortDescription:
      "AI-powered banking customer service platform with RAG, secure authorization, and auditable workflows.",
    description:
      "An AI-powered banking customer service platform designed to combine structured banking data, controlled AI tools, retrieval-augmented generation, secure authorization, and auditable workflows for intelligent customer interactions.",
    category: "AI / FinTech",
    tags: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Docker", "RAG", "LLMs"],
    image: null,
    github: null,
    live: null,
    featured: true,
    award: null,
  },
  {
    id: "boc-ekyc",
    title: "BOC Digital e-KYC Admin Portal",
    shortDescription:
      "Digital KYC administration portal with verification monitoring, compliance workflows, and audit trails.",
    description:
      "Digital KYC administration portal supporting verification monitoring, manual review, role-based access control, compliance workflows, audit trails, and reporting. Built during internship at PayMedia for Bank of Ceylon.",
    category: "FinTech",
    tags: ["Next.js", "Spring Boot", "Java", "JWT", "REST APIs"],
    image: null,
    github: null,
    live: null,
    featured: true,
    award: null,
    companyWork: true,
  },
  {
    id: "binance-quant",
    title: "Binance AI Quant Trading Agent",
    shortDescription:
      "AI-assisted quantitative trading research platform with ML scoring, risk management, and backtesting.",
    description:
      "AI-assisted quantitative trading research platform combining market data, technical analysis, market structure, machine learning scoring, risk management, backtesting, and paper-trading workflows.",
    category: "AI / FinTech",
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Machine Learning", "LangGraph", "Docker"],
    image: null,
    github: null,
    live: null,
    featured: true,
    award: null,
  },
  {
    id: "berryscan",
    title: "BerryScan – Real-Time Strawberry Disease Detection",
    shortDescription:
      "Computer vision system for real-time detection of strawberry diseases using YOLOv8.",
    description:
      "Computer vision system designed for real-time detection of strawberry diseases, leveraging YOLOv8 for accurate identification and classification of plant health conditions.",
    category: "Computer Vision",
    tags: ["Python", "YOLOv8", "Computer Vision", "Deep Learning"],
    image: null,
    github: null,
    live: null,
    featured: true,
    award: "1st Place – RUSL InnOrbit Project Carnival 2026",
  },
  {
    id: "nic-3d-verification",
    title: "Sri Lankan NIC 3D Identity Verification",
    shortDescription:
      "Research-oriented biometric verification with OCR, 3D facial reconstruction, and liveness detection.",
    description:
      "Research-oriented biometric verification architecture exploring OCR, identity document processing, 3D facial reconstruction, liveness detection, face matching, and age-consistency analysis for Sri Lankan identity cards.",
    category: "Research",
    tags: ["Python", "OpenCV", "PyTorch", "MediaPipe", "3D Face Reconstruction", "ArcFace"],
    image: null,
    github: null,
    live: null,
    featured: false,
    award: null,
    isResearch: true,
  },
  {
    id: "xiora-ai",
    title: "Xiora AI Assistant",
    shortDescription:
      "AI assistant focused on natural interaction and intelligent assistance.",
    description:
      "AI assistant project focused on natural interaction, intelligent assistance, and interactive user experience with responsive, real-time personal assistant capabilities.",
    category: "AI / ML",
    tags: ["Python", "AI", "NLP"],
    image: null,
    github: null,
    live: null,
    featured: false,
    award: null,
  },
  {
    id: "financial-sentiment",
    title: "Financial News Sentiment Analyzer",
    shortDescription:
      "NLP-based financial news sentiment analysis using transformer models.",
    description:
      "Financial news sentiment analysis system leveraging BERT and RoBERTa transformer models for accurate sentiment classification of financial market news.",
    category: "AI / ML",
    tags: ["Python", "BERT", "RoBERTa", "NLP"],
    image: null,
    github: null,
    live: null,
    featured: false,
    award: null,
  },
  {
    id: "rag-bank-qa",
    title: "RAG-Based Bank Policy Q&A",
    shortDescription:
      "Retrieval-augmented generation system for banking policy question answering.",
    description:
      "A retrieval-augmented generation system for banking policy question answering, enabling accurate responses grounded in official bank documentation.",
    category: "AI / FinTech",
    tags: ["Python", "LangChain", "FAISS", "RAG"],
    image: null,
    github: null,
    live: null,
    featured: false,
    award: null,
  },
  {
    id: "stepnote",
    title: "StepNote Mobile Application",
    shortDescription:
      "Mobile learning app combining walking/activity detection with educational content delivery.",
    description:
      "Mobile learning application that combines walking and activity detection with educational content delivery. Uses accelerometer data to play audio notes and flashcards while walking, pausing when stopped.",
    category: "Mobile",
    tags: ["Flutter", "Dart"],
    image: null,
    github: null,
    live: null,
    featured: false,
    award: null,
  },
];

export const projectCategories = [
  "All",
  "AI / ML",
  "AI / FinTech",
  "FinTech",
  "Computer Vision",
  "Research",
  "Mobile",
];
