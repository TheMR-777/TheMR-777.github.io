export const portfolioData = {
  personal: {
    name: "Muhammad Ammar Khan",
    role: "Software Architect & Security Engineer",
    location: "Jhelum, Punjab, Pakistan",
    email: "m.shahzad.ms72@gmail.com",
    phone: "+92 314 5401405",
    dob: "April 1, 2001",
    nationality: "Pakistani",
    profileImage: "https://i.ibb.co/2Y8YWR1X/freepik-br-2a5d6513-6583-40a5-8ab6-1a77d56608c6.png",
    taglines: [
      "Creating What Hasn't Been Built Before",
      "Software Architect & Security Engineer",
      "C++ Expert & Cryptography Specialist",
      "AI-Powered Innovation Engineer"
    ],
    about: "A lifelong journey of innovation and engineering excellence, from age 3 to industry architect. I blend low-level mastery (C++, Cryptography) with high-level architecture (.NET, AI) to engineer solutions that haven't been built before — from enterprise platforms to open-source tools that transform how developers work.",
    social: {
      github: "https://github.com/TheMR-777",
      linkedin: "https://www.linkedin.com/in/777-ammar",
      website: "https://TheMR-777.github.io/",
      whatsapp: "https://wa.me/923145401405",
      nullbyte: "https://creator.wonderhowto.com/h4ck3r_777/"
    },
    stats: {
      experience: "6+ Years",
      projects: "20+",
      productivity: "200%",
      cgpa: "3.73"
    },
    languages: {
      urdu: "Native",
      english: "IELTS 7.5 (L:8.5, R:7.0, W:7.0, S:7.0)"
    },
    interests: [
      {
        name: "Astronomy",
        description: "Second-largest passion after computing. I study the cosmos through expert voices to build intuition—not rote facts—about black holes, stellar evolution, and cosmic structure."
      },
      {
        name: "Physics",
        description: "A late-blooming love that became a core lens. I build intuitive models about electromagnetism, chip fabrication, GPUs, and hardware architectures through thoughtful exploration."
      },
      {
        name: "Psychology",
        description: "Nurtured by my psychologist mother's open conversations. I study cognitive biases, learning science, and social dynamics to design humane products and lead better teams."
      }
    ]
  },

  philosophy: {
    title: "The Driving Force",
    subtitle: "The Joy of Discovery",
    mainQuote: "The destination is just a waypoint—the real reward is the infinite richness of the journey itself.",
    sections: [
      {
        title: "The Journey Over the Goal",
        content: "The scale of the goal has never mattered to me—what matters is the journey of getting there. Whether I'm architecting a comprehensive system like mr_crypt or the Employee Monitoring Suite, or spending hours refining something as 'simple' as a Fibonacci sequence, the experience is the same: an insatiable curiosity that drives me to discover one more micro-optimization, one more elegant simplification, one more insight I hadn't seen before."
      },
      {
        title: "The Beauty in Fundamentals",
        content: "I vividly remember iterating on fundamental algorithms for far longer than anyone would consider 'reasonable'—not because I had to, but because each iteration revealed something new. A zero-branch Fibonacci by seeding with −1 and 1. A sieve optimization that shaved microseconds. These aren't just technical wins; they're discoveries, and each one felt as profound as solving a major architectural problem.",
        discovery: {
          title: "Rediscovering Horner's Method",
          story: "During university, frustrated with the heavy calculations of binary-to-decimal conversion (even with shortcuts), I experimented and found my own technique: start from the leftmost 1, move right — multiply the result by 2, add the next digit. Repeat until the end. Years later, I learned I had independently discovered Horner's Method of base conversion — a moment that validated my trust in mathematical intuition."
        }
      },
      {
        title: "Succeeding Within the Failures",
        content: "Sometimes the original goal remains out of reach—but along the way, I stumble upon something profound. A technique. An insight. A connection I hadn't anticipated. These discoveries often prove more valuable than the goal itself. Failure, in this framing, isn't an endpoint—it's a checkpoint where unexpected treasures reveal themselves.",
        discovery: {
          title: "The Granite 2000000 Incident",
          period: "July 2022 · University, 5th Semester",
          phases: [
            {
              label: "The Corruption",
              content: "After three years away from gaming, I launched Far Cry 6 during summer holidays — and was truly feeling it again. Then, mid-autosave, the electricity cut out. When power returned, the game greeted me with a cryptic 'Error: Granite 2000000.' Months of progress, gone. The internet had no solution — it was an open, unresolved issue across the Far Cry community."
            },
            {
              label: "The Investigation",
              content: "I refused to accept it. Drawing on my background in data recovery, I located the save files and began a forensic examination. One file — the autosave — was the right size but filled entirely with null bytes. A dead end, until I noticed something: each save file had a numbered counterpart (e.g., _01 and _02). I opened the counterpart of the corrupted file — and it had real data. I replaced the corrupted autosave with its counterpart, loaded the game — and it resumed from the exact moment of interruption."
            },
            {
              label: "The Aftermath",
              content: "I didn't just fix it and move on. I repeated the process multiple times to understand the mechanics, then distilled everything into a 40-second YouTube video — every step explained with utmost clarity while respecting the viewer's time. I shared it across forums where the issue was open. It went viral. The fix proved applicable to Far Cry 5, New Dawn, and Far Cry 4 as well. I still receive appreciation comments to this day."
            }
          ],
          link: "https://www.youtube.com/watch?v=cPH_SZKI_Cg"
        }
      },
      {
        title: "Beyond Computer Science",
        content: "This philosophy extends far beyond computing. It applies to Mathematics, where a proof's elegance can be refined endlessly. It applies to Physics, where understanding one concept unlocks intuition for a dozen others. It applies to every domain where depth is possible—and depth is always possible."
      }
    ],
    principles: [
      {
        title: "Questioning the Status Quo",
        description: "I don't accept 'because that's how it's done' as an answer. I question existing implementations, challenge assumptions, and seek deeper understanding."
      },
      {
        title: "Simplicity as Sophistication",
        description: "True mastery shows in making complex things simple, not simple things complex. I constantly seek to eliminate unnecessary complexity and find elegant paths."
      },
      {
        title: "Optimization Instinct",
        description: "I naturally spot inefficiencies and improvement opportunities. This isn't premature optimization; it's seeing where small changes yield disproportionate gains."
      },
      {
        title: "Domain-Specific Solutions",
        description: "Each problem deserves a solution tailored to its unique constraints. I craft patterns and architectures specific to the domain rather than forcing generic templates."
      },
      {
        title: "Continuous Betterment",
        description: "I'm driven by making things genuinely better, not just different. Whether it's a codebase, process, or interface, I seek meaningful improvements that create lasting value."
      },
      {
        title: "Philosophical Depth",
        description: "I think deeply about the 'why' behind decisions. Understanding systems holistically, building intuition over recipes."
      }
    ],
    toolsPhilosophy: {
      title: "Tools That Transform",
      subtitle: "The distinction between storing information and creating value",
      content: "There is a philosophy I hold deeply about the kind of software worth building. In the most distilled form, much of corporate software — including the ERP systems I've engineered — is sophisticated notekeeping. We record, organize, and retrieve. It's necessary, and I take pride in doing it exceptionally well. But it's not what sets my soul on fire.",
      essence: "What truly excites me is building tools that transform. Software where you provide an input and receive something genuinely new in return — a processed value, an insight, a capability that didn't exist before. Not storage, but synthesis. Not records, but results.",
      examples: "Every personal project I build follows this principle. A physics simulation that reveals hidden patterns. A schema analyzer that untangles database relationships. A markdown converter that eliminates hours of manual work. A CLI tool that automates tedious cleanup. These are small, sometimes simple — but each one takes something in and produces something of real, tangible value.",
      closing: "This is the kind of engineering that matters to me: building things that actually do something. Tools that process, transform, and create — not just remember."
    },
    coreInsight: "This is my innermost driving force. I don't pursue projects for the end result alone; I pursue them for what I'll discover along the way. It's why I can spend weeks on something others finish in hours, and why the 'simplest' problems often teach me the most."
  },

  journey: {
    genesis: {
      title: "The Genesis",
      period: "Age 3-10",
      description: "My journey began at age 3, influenced by my uncle who ran a computer lab in Rawalpindi. Early exposure through games like GTA Vice City and SEGA Master Collection wasn't just entertainment—it was the foundation of my lifelong passion. When gifted a high-spec PC with Windows XP, limited access became my greatest teacher. I learned to troubleshoot independently, often finding myself more capable than local tech experts."
    },
    awakening: {
      title: "The Awakening",
      period: "Teenage Years",
      description: "Watching 'Inkeshaaf' on 24 News sparked my passion for ethical hacking. I set an ambitious goal: hack my Android phone from another Android—a challenge many considered impossible. Over a year, I mastered Linux, Python, networking, and pioneered mobile-to-mobile penetration testing. My article became the second most-read on Null Byte (2018-2020), and I founded an international cybersecurity community spanning 6 countries."
    },
    academic: {
      title: "Academic Excellence",
      period: "2019-2023",
      description: "At University of the Punjab, I achieved a 3.73 CGPA while going far beyond curriculum. Became an unofficial C++ teaching assistant in my second semester, served as deputy class representative during COVID-19, and was the first team to complete both FYP and research papers simultaneously."
    },
    professional: {
      title: "Professional Evolution",
      period: "2023-Present",
      description: "My industry transition was strategic and calculated. After a TeqHolic internship in Flutter, I was offered an AI team position at Rev9 Solutions — which I leveraged to secure my role at ACE Money Transfer, where the CTO selected me immediately. Now serving as .NET Developer & Architecture Consultant, I've transformed enterprise systems and engineered flagship products. The defining achievement: devoting an entire year to the Employee Monitoring Suite — a system I consider a professional masterpiece."
    }
  },

  skills: {
    languages: [
      { 
        name: "C++", 
        level: "Expert", 
        years: "6+", 
        tags: ["Modern C++23/26", "Template Metaprogramming"],
        extraTags: ["STL", "SFINAE & Concepts", "Lock-free Programming", "Memory Management", "RAII", "Move Semantics"]
      },
      { 
        name: "C# / .NET", 
        level: "Advanced", 
        years: "3+", 
        tags: [".NET 9", "LINQ", "Async/Await"],
        extraTags: ["Blazor", "EF Core", "Source Generators", "Minimal APIs", "SignalR"]
      },
      { 
        name: "Python", 
        level: "Intermediate", 
        years: "5+", 
        tags: ["Scientific Computing", "Automation", "ML"],
        extraTags: ["NumPy", "SciPy", "Matplotlib", "Rich TUI", "Scripting"]
      },
      { 
        name: "TypeScript", 
        level: "Intermediate", 
        years: "2+", 
        tags: ["Angular", "Node.js", "ES6+"],
        extraTags: ["Type Safety", "Generics", "RxJS", "PrimeNG"]
      },
      { 
        name: "SQL", 
        level: "Advanced", 
        years: "4+", 
        tags: ["Complex Queries", "Optimization"],
        extraTags: ["PostgreSQL", "Stored Procedures", "Indexing", "Query Planning"]
      },
      { 
        name: "Dart", 
        level: "Proficient", 
        years: "3+", 
        tags: ["Flutter", "State Management"],
        extraTags: ["Provider", "Riverpod", "Material Design", "Responsive UI"]
      },
      { 
        name: "MATLAB", 
        level: "Intermediate", 
        years: "2+", 
        tags: ["Signal Processing", "Simulation"],
        extraTags: ["Visualization", "Numerical Methods", "Quantum Simulations"]
      }
    ],
    frameworks: [
      { name: ".NET Core / Blazor", category: "Backend", tags: ["ASP.NET Core", "EF Core", "Minimal APIs"] },
      { name: "Angular 20", category: "Frontend", tags: ["PrimeNG", "RxJS", "TypeScript"] },
      { name: "Flutter", category: "Mobile", tags: ["Dart", "Provider", "Material Design"] },
      { name: "AvaloniaUI / WPF", category: "Desktop", tags: ["XAML", "MVVM", "Cross-platform"] },
      { name: "SignalR / gRPC", category: "Real-time", tags: ["WebSockets", "Streaming", "Bi-directional"] },
      { name: "GraphQL", category: "API", tags: ["Hot Chocolate", "Subscriptions", "Type-safe"] },
      { name: "Entity Framework", category: "ORM", tags: ["Code-First", "Migrations", "LINQ"] },
      { name: "OpenSSL", category: "Security", tags: ["Cryptography", "TLS", "Certificates"] }
    ],
    core: [
      { name: "System Architecture", description: "Microservices, Event-Driven, Multi-tenant, DDD, CQRS" },
      { name: "Cryptography", description: "AES-256, RSA-4096, ECC, Key Management, Zero-Knowledge" },
      { name: "Performance Engineering", description: "Optimization, Profiling, Low-latency, Memory-aware" },
      { name: "Security Engineering", description: "Penetration Testing, Zero-Trust, Secure-by-Design" },
      { name: "AI Integration", description: "Prompt Engineering, LLM Integration, AI-accelerated workflows" }
    ],
    ai: {
      title: "AI as Force Multiplier",
      description: "I leverage AI not as a crutch, but as an accelerator — treating it as a thinking partner that amplifies engineering velocity while maintaining quality and originality.",
      models: [
        { name: "Claude 4.6", variants: "Opus / Sonnet / Haiku" },
        { name: "GPTs", variants: "GPT-5.3, Codex-series" },
        { name: "Gemini 3", variants: "Pro, Flash" },
        { name: "Grok 4", variants: "Thinking, Fast" },
        { name: "GLM 4.7", variants: "Air" },
        { name: "Kimi K2.5", variants: "" },
        { name: "Qwen 3", variants: "Coder, Max" }
      ],
      tools: [
        { name: "GitHub Copilot", link: "" },
        { name: "Cursor", link: "" },
        { name: "Antigravity", note: "by Google" },
        { name: "Kiro", note: "by Amazon" },
        { name: "Qoder", note: "by Alibaba" },
        { name: "Gemini CLI", link: "" },
        { name: "OpenClaw", note: "ClawdBot" },
        { name: "LMArena", link: "https://arena.ai" },
        { name: "Design Arena", link: "https://designarena.ai" }
      ],
      skills: [
        "Advanced prompt engineering for complex code generation",
        "AI-assisted architecture design and review",
        "LLM integration into production systems",
        "Systematic prompting for research and synthesis"
      ]
    },
    dsa: {
      title: "DSA Mastery",
      description: "A full year before formal coursework, I implemented every fundamental data structure and algorithm in modern C++ — not procedural C, but proper OOP with RAII, move semantics, and STL-style interfaces.",
      highlights: [
        "Trees (BST, AVL, Red-Black), Graphs, Heaps, Hash Tables",
        "Sorting (Quick, Merge, Heap), Searching (Binary, A*)",
        "Benchmarked against reference implementations",
        "Comprehensive documentation in GitHub (MyUniversity)"
      ]
    },
    tools: ["Docker", "Git", "Azure DevOps", "PostgreSQL", "Redis", "MongoDB", "OpenSSL", "VS Code", "IntelliJ IDEA", "Rider", "DataGrip", "TablePlus", "Postman", "GitHub Actions", "Linux/WSL", "Nginx", "Android/WSA", "Qt Creator", "Google Colab", "Jira"]
  },

  experience: [
    {
      company: "ACE Money Transfer",
      role: ".NET Developer & Architecture Consultant",
      period: "Jun 2023 — Present",
      location: "Remote/Hybrid",
      summary: "Transforming enterprise systems into multi-tenant SaaS platforms. Engineered flagship systems including the Employee Monitoring Suite (200% productivity boost, zero defects) and comprehensive ERP platform.",
      description: "Progressed from UI/UX to leading core platform modules and multi-tenant migration decisions. My focus has been on building reusable primitives that power every business module—not one-off solutions.",
      
      aceProjects: [
        {
          name: "Employee Monitoring Suite",
          type: "Flagship • Solo Project",
          period: "1 Year Development",
          summary: "Company-wide monitoring system achieving 200% productivity boost with zero defects at launch.",
          description: "Single-handedly designed and engineered over the course of one year. Treated as a personal masterpiece, blending architecture, UI/UX, real-time data processing, and security. Widely recognized inside ACE for directly enabling productivity improvements and setting a new benchmark for internal tools. Also includes the Evolver auto-update engine — see its dedicated entry below.",
          architecturalPhilosophy: "This project was a crucible for my understanding of design patterns. I didn't just memorize patterns—I understood them at their core: what problem each pattern solves, how it solves it, why it was even needed, and where it falls short. This depth of understanding enabled me to architect a custom architecture that wasn't constrained by textbook templates.",
          architecturalOutcomes: [
            "Minimal and elegant: No unnecessary abstractions; every component earned its place",
            "Efficient and optimized: Performance was a first-class citizen, not an afterthought",
            "Extendable: New features integrated seamlessly without architectural surgery",
            "Maintainable: Clear separation of concerns made the codebase approachable",
            "Consistent and predictable: Behavior was deterministic; no surprises in production"
          ],
          impact: [
            "Zero defects at production launch",
            "200% productivity increase measured company-wide",
            "35% reduction in unauthorized breaks",
            "Recognized as a professional masterpiece",
            "Established as company standard for monitoring"
          ],
          tech: [".NET", "Blazor", "GraphQL", "ApexCharts", "Micro-ORM"]
        },
        {
          name: "Evolver — Auto-Update Engine",
          type: "Infrastructure • EMS Component",
          period: "1 Month Engineering",
          summary: "Chromium-inspired cross-platform auto-update engine with error-resilient backup management, engineered as part of EMS.",
          description: "Spent an entire month engineering a chromium-inspired auto-update mechanism for the Employee Monitoring Suite. This was one of the most highly engineered things I made at ACE — a system handling inter-process communication, error-resilient backup management, and cross-platform reliability. Presented to the CTO and received high praise for engineering depth.",
          architecturalHighlights: [
            "Chromium-inspired architecture with staged rollouts",
            "Cross-platform reliability (Windows + macOS) — a rare achievement few software pull off",
            "Inter-process communication between EMS and dedicated updater app",
            "Separate integrated companion app for on-demand updating",
            "Companion deployment tool for streamlined build distribution",
            "Error-resilient with automatic backup management and data recovery",
            "Graceful rollback on update failure",
            "Presented to CTO and praised for engineering depth"
          ],
          impact: [
            "Zero failed updates since deployment",
            "Seamless cross-platform update experience",
            "Reduced deployment friction to near-zero",
            "Praised by CTO as exemplary engineering"
          ],
          tech: [".NET", "C#", "IPC", "File System APIs", "AvaloniaUI"]
        },
        {
          name: "ERP Platform Core",
          type: "Platform • Architecture",
          period: "2023 — Dec 2025",
          summary: "Multi-tenant platform with composable subsystems powering all business modules.",
          description: "Built and standardized ERP as a multi-tenant platform by engineering reusable core subsystems—not one-off module logic. Every business module now plugs into this backbone.",
          modules: [
            { name: "Composable Permissions & Rights", description: "Tenant-aware, module-agnostic access control designed for easy integration.", impact: "Eliminated redundant auth code across 5+ modules" },
            { name: "Approvals Orchestration Engine", description: "Generic plug-in workflow layer (approve/reject/escalate) usable by any module.", impact: "Reduced approval implementation time by 80%" },
            { name: "Rules + Thresholds Framework", description: "Centralized policy engine driving approvals, restrictions, escalations, and notifications.", impact: "Enabled non-developer policy changes" },
            { name: "Notifications & Template Center", description: "Multi-channel delivery (Email/In-App/Push/WhatsApp) with runtime-managed, localizable templates.", impact: "Unified notification logic, 60% less code" },
            { name: "Dynamic JSON Form Engine", description: "Schema-driven UI generation in TypeScript. Theme-compliant and reusable across modules.", impact: "Cut form development time by 70%" },
            { name: "Command Palette", description: "Rights-compliant navigation with fuzzy search and score-based ranking. VS Code/Spotlight-style UX.", impact: "Improved navigation efficiency 3x" },
            { name: "Documents Management", description: "Blob storage + AWS time-bound links + fallback handling; extremely reusable with minimal API.", impact: "Standardized file handling across platform" },
            { name: "Audit Logging & Dashboards", description: "Action-level traceability for compliance and investigations.", impact: "Complete audit trail for all operations" }
          ],
          impact: [
            "Enabled rapid rollout of 5+ business modules",
            "Transformed single-company tools into marketable SaaS product",
            "90% reduction in module development time",
            "Multi-company support without code changes"
          ],
          tech: [".NET 9", "TypeScript", "Angular", "SignalR", "PostgreSQL"]
        },
        {
          name: "ERP Business Modules",
          type: "Business Logic • Full-Stack",
          period: "2024 — 2025",
          summary: "End-to-end business modules built on the ERP platform core, each tightly integrated.",
          description: "Shipped production-ready business modules that leverage the platform core. Each module demonstrates the power of the reusable backbone.",
          modules: [
            { name: "Project Management", description: "Multi-company/department/team structure; foundation for downstream modules.", impact: "Enabled organizational hierarchy modeling" },
            { name: "Budget Management", description: "Templates + allocation/validation + multi-currency conversion and presentation.", impact: "Streamlined financial planning" },
            { name: "Procurement (Odoo-inspired)", description: "PR → RFQ/PO → 2-level inspection → issuance/intake verification, with full audit trail.", impact: "Complete procurement lifecycle" },
            { name: "Liquidity & Cash Positioning", description: "Deeply integrated with Transactions Management + real-time voucher generation.", impact: "Real-time treasury visibility" },
            { name: "Forecasting Engine", description: "Weighted linear regression to project liquidity/cash positions (up to ~7 years).", impact: "Data-driven financial planning" }
          ],
          impact: [
            "5 major business modules shipped to production",
            "Tight integration proving platform architecture",
            "Odoo-level features with custom enhancements"
          ],
          tech: ["Angular 20", ".NET 9", "PrimeNG", "PostgreSQL"]
        },
        {
          name: "ACE Password Vault",
          type: "Security • Cryptography",
          period: "2023",
          summary: "Multi-layered encryption system with custom cryptographic protocols exceeding industry standards.",
          description: "Financial credentials required security beyond standard password managers. Designed a defense-in-depth architecture with custom auditing and key rotation.",
          approach: "Designed multi-layered security: inner loops use C++ for raw cryptographic operations via OpenSSL wrappers; outer layers use .NET for secure memory management and PWA interface. Implemented zero-knowledge principles where applicable.",
          impact: [
            "Became critical company infrastructure",
            "Set new internal security standards",
            "Zero security incidents since deployment",
            "Protected most sensitive credentials"
          ],
          tech: ["C++", ".NET", "OpenSSL", "AES-256", "RSA-4096"]
        },
        {
          name: "External Partner Integrations",
          type: "Integrations • API",
          period: "2023 — Present",
          summary: "Integrated major payment partners including Mastercard, HBL, and PNB with robust, secure payment flows.",
          description: "Delivered bank partner integrations engineering resilient adapters, retries, idempotency, and observability. Extensive experience consuming external services via well-typed client libraries and SLA-aware timeouts.",
          partners: ["Mastercard", "HBL (Habib Bank Limited)", "PNB (Punjab National Bank, India)"],
          impact: [
            "Highly praised by Mastercard team for implementation quality",
            "Robust error handling and retry mechanisms",
            "Complete observability and monitoring"
          ],
          tech: [".NET", "REST APIs", "SOAP", "OAuth2", "HMAC"]
        },
        {
          name: "Real-time Infrastructure",
          type: "Infrastructure • SignalR",
          period: "2024",
          summary: "Established SignalR infrastructure for notifications and real-time features across ERP.",
          description: "Built real-time communication layer including connection lifecycle, delivery semantics, and scale considerations. Applied RPC concepts within event-driven systems.",
          impact: [
            "Live notifications across all ERP modules",
            "Reliable delivery with fallback mechanisms",
            "Scalable architecture for future growth"
          ],
          tech: ["SignalR", ".NET", "WebSockets", "Redis"]
        },
        {
          name: "Background Jobs Framework",
          type: "Infrastructure • Core",
          period: "2024 — Present",
          summary: "Unbreakable background jobs management system adopted across multiple projects to solve a long-standing infrastructure gap.",
          description: "First introduced in EMS as a personal engineering necessity, this framework proved so robust and reliable at launch that other teams — facing persistent job management issues — ported my module to handle their background processing. I unknowingly solved a long-standing problem that ACE's infrastructure badly needed.",
          architecturalHighlights: [
            "Composable job definitions with dependency injection",
            "Configurable retry policies with exponential backoff",
            "Dead-letter handling for failed jobs with investigation support",
            "Graceful shutdown with job state preservation",
            "Health monitoring and observability built-in",
            "Zero job loss guarantee even during deployments"
          ],
          impact: [
            "Unbreakable since launch — zero job failures",
            "Adopted by 3+ other projects facing job management issues",
            "Solved a long-standing infrastructure problem across ACE",
            "Became the de-facto standard for background processing"
          ],
          tech: [".NET 10", "Background Services", "Channels", "PostgreSQL"]
        },
        {
          name: "Logging Framework",
          type: "Infrastructure • Observability",
          period: "2024 — Present",
          summary: "Pluggable logging framework providing in-depth, readable logs with configurable verbosity and investigative context.",
          description: "Engineered a comprehensive logging framework in the most .NET-optimized way possible. Designed to be pluggable to any project, providing readable and configurable logs with adjustable verbosity levels.",
          architecturalHighlights: [
            "Pluggable architecture — drop into any .NET project",
            "Configurable verbosity levels (Trace → Critical)",
            "Structured logging with semantic context",
            "Readable formatting for human investigation",
            "Full stack traces with source file references",
            "Performance-optimized using source generators"
          ],
          impact: [
            "Standardized logging across multiple ACE projects",
            "Reduced debugging time with clear investigation paths",
            "Configurable verbosity prevents log noise in production",
            "Adopted alongside Background Jobs Framework"
          ],
          tech: [".NET", "Source Generators", "Structured Logging", "Serilog"]
        }
      ],
      
      highlights: [
        "Architected Employee Monitoring Suite solo — zero defects at launch",
        "Engineered Evolver: chromium-inspired cross-platform auto-update engine",
        "Designed 'ACE Password Vault' with multi-layered cryptography",
        "Led ERP Platform Engineering: Rules, Approvals, Rights, Notifications",
        "Built unbreakable Background Jobs Framework — adopted company-wide",
        "Engineered pluggable Logging Framework for in-depth observability",
        "Integrated Mastercard, HBL, and PNB payment services",
        "Received direct commendation from CTO for architectural innovations"
      ],
      impact: [
        "200% productivity increase via Employee Monitoring Suite",
        "35% reduction in unauthorized breaks",
        "5+ major modules standardized on new platform",
        "Multi-tenant architecture enabling SaaS transformation"
      ],
      tech: [".NET 9", "Blazor", "Angular", "GraphQL", "SignalR", "PostgreSQL", "C++"]
    },
    {
      company: "MIMOS Berhad (Malaysia)",
      role: "Lead Developer & System Architect",
      period: "Dec 2024 — Jul 2025",
      location: "Remote",
      summary: "Built sophisticated UWB Indoor Positioning Simulation System as a solo project, eliminating the need for costly physical testing.",
      description: "Pioneered accurate indoor positioning simulation without physical hardware. Developed proprietary algorithms for signal propagation and created multi-layered visualization systems.",
      highlights: [
        "First-principles simulation without physical hardware",
        "Real-time heatmap visualization with NumPy/SciPy",
        "Material-specific signal attenuation modeling",
        "Received exceptional praise for accuracy and attention to detail"
      ],
      modules: [
        { name: "Simulation Engine", description: "C# 13 and .NET 9 core modeling signal attenuation, reflection, and geometric constraints with high precision.", impact: "Matched physical test results within 5% margin" },
        { name: "Signal Processing Pipeline", description: "Python 3.13 modules using NumPy/SciPy for computational geometry and heatmap generation.", impact: "Real-time updates for large floorplans" },
        { name: "Visualization Layer", description: "WPF interface integrating Matplotlib for coverage analysis. Interactive anchor placement and optimization.", impact: "Intuitive UI praised by client" }
      ],
      impact: [
        "Eliminated need for initial physical site surveys",
        "Compressed deployment timeline from months to days",
        "Enabled 'perfect' theoretical anchor placement before installation"
      ],
      tech: ["C# 13", ".NET 9", "Python 3.13", "NumPy", "SciPy", "WPF", "Matplotlib"]
    },
    {
      company: "TeqHolic",
      role: "Flutter Development Intern",
      period: "2023 (3 Months)",
      location: "Jhelum, Pakistan",
      summary: "Developed cross-platform mobile applications including social media and e-commerce platforms with real-time capabilities.",
      description: "Gained practical industry experience in agile development, focusing on responsive UI architectures and performance optimization for low-bandwidth environments.",
      highlights: [
        "Built Chirp: Twitter-like app with real-time updates",
        "Developed Sara Kuch: E-commerce with Shopify integration",
        "Optimized for low-bandwidth environments"
      ],
      modules: [
        { name: "Chirp", description: "Social media application with real-time feeds, interactions, and notifications using Firebase.", impact: "Full MVP in 6 weeks" },
        { name: "Sara Kuch", description: "E-commerce platform integrating Shopify REST API with cart, checkout, and order tracking.", impact: "Complete e-commerce flow delivered" }
      ],
      impact: [
        "Delivered two full MVP applications in 3 months",
        "Established responsive UI patterns for future projects"
      ],
      tech: ["Flutter", "Dart", "Firebase", "Shopify API", "Provider"]
    }
  ],

  // Flagship Projects — large, impactful, enterprise-grade
  projects: [
    {
      title: "Employee Monitoring Suite",
      category: "Flagship • Enterprise",
      tech: [".NET", "Blazor", "GraphQL", "ApexCharts", "Micro-ORM"],
      summary: "Company-wide monitoring system achieving 200% productivity boost with zero defects at launch.",
      description: "Single-handedly designed and engineered over the course of one year. This project was a crucible for my understanding of design patterns—I understood them at their core, enabling a custom architecture that wasn't constrained by textbook templates.",
      challenge: "The company lacked visibility into remote work patterns. Existing solutions were either invasive, inaccurate, or lacked context-aware reporting. Privacy concerns made aggressive tracking unacceptable.",
      approach: "Engineered a privacy-conscious, OS-level monitoring agent that respects boundaries while providing meaningful insights. Built a real-time Blazor dashboard with GraphQL for efficient data pipelines. Used Micro-ORM for high-throughput logging without the overhead of full ORMs.",
      architecturalPhilosophy: "The result was minimal and elegant (no unnecessary abstractions), efficient and optimized (performance as first-class citizen), extendable (new features without architectural surgery), maintainable (clear separation of concerns), and consistent (deterministic behavior in production).",
      impact: [
        "Zero defects at production launch",
        "200% productivity increase measured company-wide",
        "35% reduction in unauthorized breaks",
        "Recognized by CTO as a professional masterpiece",
        "Established as company standard for monitoring"
      ],
      link: "#"
    },
    {
      title: "UWB Indoor Positioning Simulation",
      category: "Simulation • Research",
      tech: ["C# 13", ".NET 9", "Python", "NumPy", "SciPy", "WPF"],
      summary: "Sophisticated simulation engine enabling UWB deployment planning without physical hardware.",
      description: "Client needed to validate UWB anchor placements before expensive physical installation. Built a hybrid .NET/Python system modeling signal propagation with material-specific attenuation.",
      challenge: "Deploying UWB anchors requires expensive physical testing. Mistakes in placement are costly to fix. The client needed virtual validation before drilling holes.",
      approach: "Built a hybrid simulation engine: .NET for UI, core logic, and geometric calculations; Python (NumPy/SciPy) for signal propagation modeling and heatmap generation. Implemented material-specific attenuation for walls, glass, and obstacles.",
      impact: [
        "Reduced deployment costs by approximately 60%",
        "Compressed timeline from months to days",
        "Simulation accuracy within 5% of physical tests",
        "Exceptional client praise for attention to detail"
      ],
      link: "#"
    },
    {
      title: "Enterprise ERP Platform",
      category: "SaaS • Architecture",
      tech: [".NET 9", "TypeScript", "Angular", "SignalR", "PostgreSQL"],
      summary: "Multi-tenant platform with composable subsystems powering all business modules.",
      description: "Transformed fragmented internal tools into a unified, multi-tenant SaaS ecosystem. Architected reusable engines (Approvals, Rules, Notifications, Rights) rather than one-off module logic.",
      challenge: "Legacy tools were fragmented, single-tenant, and hard to maintain. Adding a new module meant reinventing authentication, approvals, and logging from scratch.",
      approach: "Architected a 'SaaS Backbone' containing generic Approvals, Rules, Notifications, and Rights engines. Business modules plug into this backbone. Used EAV patterns for flexibility and multi-tenant isolation.",
      impact: [
        "Enabled rapid rollout of 5+ business modules",
        "Transformed tools into marketable SaaS product",
        "90% reduction in module development time",
        "Multi-company support without code changes"
      ],
      link: "#"
    },
    {
      title: "ACE Password Vault",
      category: "Security • Cryptography",
      tech: ["C++", ".NET", "OpenSSL", "AES-256", "RSA-4096"],
      summary: "Multi-layered encryption system with custom cryptographic protocols exceeding industry standards.",
      description: "Financial credentials required security beyond standard password managers. Designed a defense-in-depth architecture with custom auditing and key rotation.",
      challenge: "Storing sensitive financial credentials required higher security than off-the-shelf solutions. Needed custom auditing, key rotation, and compliance with internal policies.",
      approach: "Designed multi-layered security: inner loops use C++ for raw cryptographic operations via OpenSSL wrappers; outer layers use .NET for secure memory management and PWA interface. Implemented zero-knowledge principles.",
      impact: [
        "Became critical company infrastructure",
        "Set new internal security standards",
        "Zero security incidents since deployment",
        "Protected most sensitive credentials"
      ],
      link: "#"
    },
    {
      title: "mr_crypt",
      category: "Open Source • Library",
      tech: ["C++23", "OpenSSL 3.0+", "Template Metaprogramming"],
      summary: "Revolutionary range-like syntax for C++ cryptography reducing implementation time by 10x.",
      description: "OpenSSL's C-API is verbose and error-prone. Created a wrapper using C++23 ranges and template metaprogramming for type-safe, fluent cryptographic operations.",
      challenge: "OpenSSL's C-API requires extensive boilerplate, manual memory management, and is difficult to use safely in modern C++ projects.",
      approach: "Leveraged C++23 ranges and concepts to create a fluent, type-safe API. Template metaprogramming ensures compile-time safety. Seamless OpenSSL 3.0+ integration.",
      impact: [
        "10x reduction in implementation boilerplate",
        "Significant improvement in code readability",
        "Recognition in C++ community",
        "Active open source maintenance"
      ],
      link: "https://github.com/TheMR-777/mr_crypt"
    },
    {
      title: "Costaz Desktop",
      category: "Academic • FYP",
      tech: ["Flutter", "Google Sheets API", "Firebase", "Excel Export"],
      summary: "Decentralized academic management system reducing manual data entry by 50%, built as a final year project.",
      description: "Built for University of the Punjab after surveying 10+ professors. Solved record management pain points with offline-first design and Google integration.",
      challenge: "Professors struggled with fragmented record-keeping. Unreliable connectivity made cloud-only solutions impractical.",
      approach: "Designed offline-first architecture using Google accounts for decentralized auth. Integrated Google Sheets for familiar data handling. Excel export for report generation.",
      impact: [
        "50% reduction in manual data entry",
        "30% improvement in data accuracy",
        "Adopted by multiple departments",
        "Recognition for elegant architecture"
      ],
      link: "#"
    }
  ],

  // Personal Craft — smaller, passion-driven tools that transform
  personalProjects: [
    {
      title: "Moiré Effect Demo",
      category: "Physics • Visualization",
      description: "Spotted a mesmerizing pattern on a van's metal door during a ride home and couldn't rest until I understood it. Turned out to be the Moiré effect — an optical interference phenomenon. Built an interactive demo to develop intuitive understanding of the mechanism, and it fascinated not just me, but friends and colleagues alike.",
      origin: "Curiosity from observing a real-world physics phenomenon",
      tech: ["HTML/CSS/JS", "Canvas", "Gemini 3", "Claude Opus 4.5"],
      link: "https://themr-777.github.io/moire-effect-demo/",
      repo: "https://github.com/TheMR-777/moire-effect-demo"
    },
    {
      title: "Schema Weaver",
      category: "Developer Tool • Visualization",
      description: "Always struggled to visualize relationships between SQL tables. So I built a tool that takes raw SQL schemas (supports TablePlus exports out of the box), smartly identifies relationships using robust heuristics based on naming conventions and foreign key patterns, and renders an auto-decluttered 3D visualization showing which columns link which tables. The algorithm always produces clean, readable layouts.",
      origin: "Frustration with manual DBML conversion and relationship mapping",
      tech: ["Three.js", "JavaScript", "SQL Parsing"],
      link: "https://themr-777.github.io/schema-weaver/",
      repo: "https://github.com/TheMR-777/schema-weaver"
    },
    {
      title: "GitHubify-MD",
      category: "Developer Tool • CLI",
      description: "Converting Markdown to GitHub-styled HTML was always a pain — VS Code plugins existed but their CSS would break. Built a rich TUI application that converts .md files to pixel-perfect GitHub-flavored HTML with extensive customization, minimal interactions, and full CLI argument support for one-liner conversions.",
      origin: "Broken CSS in existing VS Code Markdown export plugins",
      tech: ["Python", "Rich TUI", "Markdown", "GitHub CSS"],
      repo: "https://github.com/TheMR-777/githubify-md"
    },
    {
      title: "Simple Smart Cleanup",
      category: "Utility • Automation",
      description: "A simple Python program I've been maintaining for a while. It scans and cleans specific directories on my system regularly. Configurable, extensible — users can add their own target locations. It's simple, very simple, but has proven genuinely useful for keeping my system tidy. Shared it because good tools deserve to be shared.",
      origin: "Personal need for systematic, repeatable system maintenance",
      tech: ["Python", "OS APIs", "Configuration"],
      repo: "https://github.com/TheMR-777/simple-smart-cleanup.py"
    },
    {
      title: "LetItGo",
      category: "Mobile • Personal",
      description: "A minimalist, aesthetically crafted Android app that saves timestamps and shows elapsed time in years, months, days, hours, minutes, and seconds. Designed with obsessive attention to UI elegance. Supports multiple memories — I've saved my birthday, job joining date, graduation, and more. It's a tiny app with a lot of heart.",
      origin: "Wanting a beautiful way to visualize the passage of time",
      tech: ["Flutter", "Dart", "Local Storage", "Material Design"],
      repo: "https://github.com/TheMR-777/just_letitgo"
    }
  ],

  publications: [
    {
      title: "Identification of Paddy Disease Along Its Processing Time",
      authors: "Khan, S.N., Khan, S.U., Khan, M.A., Ansar, M.U., et al.",
      journal: "Quantum Journal of Social Sciences and Humanities",
      volume: "4(3), 72-80",
      doi: "10.55197/qjssh.v4i3.251",
      year: "2023"
    },
    {
      title: "Paddy Leaf Disease Symptoms Detection Through Artificial Neural Network",
      authors: "Khan, S.N., Khan, S.U., Ahmed, S., Khan, M.A., Khan, J.",
      journal: "Quantum Journal of Engineering, Science and Technology",
      volume: "4(4), 1-10",
      year: "2023",
      link: "https://qjoest.com/index.php/qjoest/article/view/123/75"
    }
  ],

  nullbyteArticles: [
    {
      title: "Hack Android Device with Termux - Part 1: Over Internet",
      reads: "2nd most-read article (2018-2020)",
      link: "https://null-byte.wonderhowto.com/forum/to-hack-android-device-with-termux-android-part-1-over-internet-ultimate-guide-0187005/"
    },
    {
      title: "Installing Metasploit Framework on Android - Part 1: Termux",
      reads: "8th most-read article (2018-2020)",
      link: "https://null-byte.wonderhowto.com/forum/to-install-metasploit-framework-android-part-1-termux-0186792/"
    },
    {
      title: "Hack Android Device with Termux - Part 2: Over WLAN Hotspot",
      link: "https://null-byte.wonderhowto.com/forum/to-hack-android-device-with-termux-android-part-2-over-wlan-hotspot-ultimate-guide-0187637/"
    },
    {
      title: "Installing Metasploit Framework - Part 2: GNURoot Debian",
      link: "https://null-byte.wonderhowto.com/forum/to-install-metasploit-framework-android-part-2-gnuroot-debian-0186874/"
    },
    {
      title: "Sign APK File with Embedded Payload",
      link: "https://null-byte.wonderhowto.com/forum/to-sign-apk-file-with-embedded-payload-the-ultimate-guide-0186656/"
    },
    {
      title: "Multi-threaded Password Cracking with John the Ripper",
      link: "https://null-byte.wonderhowto.com/forum/to-use-multiple-threads-cpus-while-cracking-passwords-with-john-ripper-free-version-0187017/"
    },
    {
      title: "Installing Metasploit Framework - Part 3: UserLAnd",
      link: "https://null-byte.wonderhowto.com/forum/to-install-metasploit-framework-android-part-3-userland-0187162/"
    },
    {
      title: "Write to NTFS Partition in Kali Linux",
      link: "https://null-byte.wonderhowto.com/forum/to-see-write-ntfs-partition-hdd-sdd-kali-linux-the-ultimate-guide-0186670/"
    },
    {
      title: "Embed MSF Payload in APK - Part 1: Using TheFatRat",
      link: "https://null-byte.wonderhowto.com/forum/to-embed-msf-payload-original-apk-files-part-1-using-thefatrat-0188918/"
    },
    {
      title: "Embed MSF Payload in APK - Part 2: Using Linder",
      link: "https://null-byte.wonderhowto.com/forum/to-embed-msf-payload-original-apk-files-part-2-using-linder-0208842/"
    }
  ],

  certifications: [
    {
      name: "Modern C++ Mastery with Game Development",
      issuer: "TheCherno",
      note: "Performance-focused engineering mentorship"
    },
    {
      name: "Advanced Cryptography",
      issuer: "Christof Paar",
      note: "Deep cryptographic theory and implementation"
    },
    {
      name: "Flutter Development",
      issuer: "The App Brewery (Udemy)",
      note: "Cross-platform mobile development"
    },
    {
      name: ".NET Basic to Advanced",
      issuer: "CodeWithMosh & Tim Corey",
      note: "Enterprise .NET development patterns"
    },
    {
      name: "IELTS Academic",
      issuer: "British Council",
      score: "Band 7.5",
      breakdown: "L:8.5, R:7.0, W:7.0, S:7.0"
    }
  ],

  education: {
    degree: "BS (Honors) Computer Science",
    institution: "University of the Punjab, Jhelum Campus",
    period: "2019 - 2023",
    cgpa: "3.73 / 4.0",
    percentage: "84%",
    achievements: [
      "Unofficial C++ teaching assistant from 2nd semester",
      "Deputy class representative during COVID-19",
      "First team to complete FYP and research simultaneously",
      "Collaborated with visiting PhD professor on quantum computing"
    ]
  },

  preUniversityEducation: [
    {
      level: "Intermediate (Pre-Engineering)",
      institution: "F.G. Intermediate College, Jhelum Cantt",
      year: "2019",
      result: "67.5%"
    },
    {
      level: "Matriculation",
      institution: "F.G. Public School, Jhelum Cantt",
      year: "2017",
      result: "80.5%"
    }
  ],

  cyberMACS: {
    title: "CyberMACS Erasmus Mundus Joint Master",
    year: "2024",
    status: "Reserved Seat (Full Scholarship Category) → Full Tuition Waiver Offered → Declined",
    summary: "Selected through a highly competitive process for the Erasmus Mundus Joint Master Program in Cybersecurity. The interview, intended for 15 minutes, extended to over an hour as the panel explored my technical expertise in depth.",
    details: "Despite being placed on the reserved list initially for the Full Scholarship category, I was later offered a full tuition fee waiver and insurance coverage. I made the most difficult decision of my academic life by declining, due to relocation and living costs exceeding feasibility at the time.",
    significance: "This milestone remains a powerful symbol of international recognition and reflects my principle-driven approach of pursuing opportunities sustainably."
  },

  community: {
    cybersecurityCommunity: {
      title: "International Cybersecurity Community",
      role: "Founder & Leader",
      duration: "2018 — 2022 (4 years)",
      scale: "13 mentors across 6 countries",
      countries: ["Iran", "Pakistan", "India", "Australia", "Finland", "Bangladesh"],
      achievements: [
        "Grew from 2 to 13 dedicated members organically",
        "Fostered knowledge sharing and collaborative learning across time zones",
        "Recruited local students, creating university-wide interest in security",
        "Developed innovative security testing methodologies as a group",
        "Mentored members from beginner to intermediate security skill levels"
      ]
    },
    mentorship: {
      sessions: "50+",
      studentsMentored: "20+",
      topics: ["C++", "System Design", "Data Structures", "Security Fundamentals"],
      description: "Conducted 50+ peer programming sessions and mentored 20+ students in C++ and system design. Created educational content reaching thousands globally through Null Byte articles and community forums."
    },
    openSource: [
      {
        project: "mr_crypt",
        role: "Creator & Principal Engineer",
        description: "Revolutionary C++23 cryptography library with range-like syntax and 10x reduction in implementation boilerplate.",
        link: "https://github.com/TheMR-777/mr_crypt"
      },
      {
        project: "AvaloniaUI",
        role: "Contributor",
        description: "Performance optimizations and bug fixes for the cross-platform .NET UI framework.",
        link: "https://github.com/AvaloniaUI/Avalonia"
      },
      {
        project: "Flutter",
        role: "Contributor",
        description: "Architecture improvements and documentation enhancements.",
        link: "https://github.com/flutter/flutter"
      },
      {
        project: "fluent_ui",
        role: "Contributor",
        description: "UI enhancements and component development for the Fluent Design System in Flutter.",
        link: "https://github.com/bdlukaa/fluent_ui"
      },
      {
        project: "MyUniversity",
        role: "Creator",
        description: "Comprehensive repository documenting entire university journey — every data structure, algorithm, project, and learning artifact in modern C++.",
        link: "https://github.com/TheMR-777/MyUniversity"
      }
    ]
  },

  quantumResearch: {
    title: "Quantum Computing & Photonics Simulation",
    collaborator: "Visiting PhD Professor",
    institution: "University of the Punjab",
    duration: "2023 — 2024",
    description: "Collaborated with a visiting PhD professor on quantum computing and photonics simulations. Developed specialized simulation tools modeling quantum phenomena and photon behavior.",
    contributions: [
      "Developed simulation tools in Python and MATLAB",
      "Modeled quantum phenomena and photon behavior",
      "Created visualization for mirror arrays, emitters, and detectors",
      "Supported research initiatives extending to Malaysia",
      "Advanced understanding of quantum optics through hands-on implementation"
    ]
  },

  vulnerabilityDiscoveries: [
    {
      target: "ACE HRMS (Laravel-based)",
      severity: "Critical",
      description: "Identified a vulnerability that allowed unauthorized access to any employee profile, including executives. Responsibly disclosed and promptly patched.",
      type: "Broken Access Control"
    },
    {
      target: "ACE Internal Ticketing System",
      severity: "High",
      description: "Discovered a flaw in file attachment handling allowing unauthorized download of sensitive documents including financial reports and complaints. Reported to CTO and patched immediately.",
      type: "Insecure Direct Object Reference"
    },
    {
      target: "CyberMACS Subscription Portal",
      severity: "Medium",
      description: "While applying, identified PHP error messages exposing server paths and database details. Wrote a detailed ethical disclosure email to the CyberMACS team, demonstrating proactive security mindset even as an applicant.",
      type: "Information Exposure"
    }
  ]
};

export type Project = typeof portfolioData.projects[0];
export type PersonalProject = typeof portfolioData.personalProjects[0];
export type Experience = typeof portfolioData.experience[0];
export type AceProject = NonNullable<typeof portfolioData.experience[0]['aceProjects']>[0];
