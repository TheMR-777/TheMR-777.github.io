// Portfolio data extracted from CV JSON
const portfolioData = {
    personal: {
        name: "Muhammad Ammar Khan",
        taglines: [
            "Software Architect & Security Engineer",
            "C++ Expert & Cryptography Specialist",
            "AI-Powered Innovation Engineer",
            "Creating What Hasn't Been Built Before"
        ],
        profileImage: "https://i.imgur.com/c9vQr7Y.png",
        location: "District Jhelum, Punjab, Pakistan",
        phone: "+92 314 5401405",
        social: {
            github: "https://github.com/TheMR-777",
            whatsapp: "https://wa.me/923145401405",
            email: "mailto:m.shahzad.ms72@gmail.com"
        }
    },

    experience: [
        {
            title: ".NET Developer & Architecture Consultant",
            company: "ACE Money Transfer",
            companyLogo: "https://i.imgur.com/Dd9s6BF.png",
            duration: "June 2023 - Present",
            responsibilities: [
                "Architected mission-critical systems including the 'ACE Password Vault' with bespoke security architecture",
                "Led UI/UX design initiatives for enterprise management suites, gaining recognition from executive leadership",
                "Transformed company's ERP project scope to serve entire ACE Group of Companies",
                "Engineered advanced cryptographic solutions using C++ and .NET"
            ],
            technologies: ["C++", ".NET 9", "Angular", "Cryptography", "System Architecture"]
        },
        {
            title: "Intern",
            company: "TeqHolic",
            companyLogo: "https://i.imgur.com/r1rFJQK.png",
            duration: "3 Months",
            responsibilities: [
                "Developed frontend applications using Flutter and Firebase",
                "Built Chirp, a social media application similar to Twitter",
                "Developed Sara Kuch, an e-commerce application using Shopify REST API"
            ],
            technologies: ["Flutter", "Firebase", "REST API"]
        }
    ],

    featuredProjects: [
        {
            id: 7,
            title: "UWB Indoor Positioning Simulation",
            role: "Lead Developer & System Architect",
            description: "Built an Ultra-Wideband simulation system for MIMOS Berhad with interactive real-time heatmaps and precise object localization capabilities.",
            technologies: ["C# 13", ".NET 9", "WPF", "Python 3.13", "NumPy", "SciPy", "Matplotlib"],
            icon: `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`,
            featured: true
        },
        {
            id: 4,
            title: "Employee Monitoring Suite",
            role: "Lead Developer & System Architect",
            description: "Overcame significant OS-level challenges to deliver reliable, high-performance tracking. Received executive-level recognition for design excellence.",
            technologies: ["C# 13", ".NET 9", "AvaloniaUI", "Blazor", "GraphQL", "Microsoft SQL Server"],
            icon: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><circle cx="12" cy="10" r="3"/>`,
            featured: true
        },
        {
            id: 1,
            title: "Enterprise Resource Planning Suite",
            role: "Architecture Consultant & Full-Stack Engineer",
            description: "Transformed single-company solution into multi-tenant enterprise platform with sophisticated approval workflows and administrative systems.",
            technologies: ["Angular 20", "C# 13", ".NET 9", "MySQL", "GraphQL", "Redis"],
            icon: `<circle cx="12" cy="12" r="4"/><path d="M8 12h8M12 8v8"/><circle cx="6" cy="6" r="1.5"/><circle cx="18" cy="6" r="1.5"/><circle cx="6" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/><line x1="7.5" y1="7.5" x2="10" y2="10"/><line x1="16.5" y1="7.5" x2="14" y2="10"/><line x1="7.5" y1="16.5" x2="10" y2="14"/><line x1="16.5" y1="16.5" x2="14" y2="14"/>`,
            featured: true
        },
        {
            id: 2,
            title: "ACE Password Vault",
            role: "Lead Architect & Security Engineer",
            description: "Engineered a sophisticated password management system with a security-first architecture, implementing multiple layers of protection beyond industry standards.",
            technologies: [".NET", "Blazor PWA", "Modern Cryptography"],
            icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>`,
            featured: true
        },
        {
            id: 3,
            title: "mr_crypt",
            role: "Creator & Principal Engineer",
            description: "Modern C++ cryptography library with innovative range-like syntax, reducing development time by 10x while maintaining security integrity.",
            technologies: ["C++23", "OpenSSL 3.0+", "Ranges & Concepts", "Template Metaprogramming"],
            github: "https://github.com/TheMR-777/mr_crypt",
            icon: `<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>`,
            featured: true
        },
        {
            id: 5,
            title: "Costaz (Final Year Project)",
            role: "Lead Developer & System Architect",
            description: "Built decentralized student records system using professors' Google accounts for storage. Features seamless Google Sheets integration and Excel export based on university-wide surveys.",
            technologies: ["Flutter", "Google Sheets API", "Google Drive API", "Google Authentication"],
            github: "https://github.com/TheMR-777/Costaz",
            icon: `<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>`,
            featured: true
        },
        {
            id: 6,
            title: "Mobile Security Research",
            role: "Cyber Security Researcher",
            description: "Pioneered innovative approaches to mobile security, with articles becoming second most-read on Null Byte platform (2018-2020).",
            technologies: ["Android OS", "Security Analysis", "Mobile-to-Mobile Testing"],
            icon: `<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>`,
            featured: false
        }
    ],

    skillCategories: [
        {
            title: "Programming Languages",
            icon: `<path d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
            skills: ["C++ (C++23/26)", "C# (.NET 9)", "Dart", "Python", "MATLAB", "JavaScript", "TypeScript"]
        },
        {
            title: "Architecture & Design",
            icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`,
            skills: ["System Architecture", "Scalable Design", "Microservices", "Event-Driven", "Data-Driven Design"]
        },
        {
            title: "Security & Cryptography",
            icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
            skills: ["AES/RSA/ECC", "OpenSSL", "Security Architecture", "Ethical Hacking", "Penetration Testing"]
        },
        {
            title: "AI & Machine Learning",
            icon: `<circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m11-11h-6m-6 0H1m16.24-4.24l-4.24 4.24m-6 6l-4.24 4.24m12.48 0l-4.24-4.24m-6-6L2.76 2.76"/>`,
            skills: ["AI-Assisted Development", "Prompt Engineering", "Neural Networks", "ML Integration"]
        },
        {
            title: "Frameworks",
            icon: `<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>`,
            skills: [".NET 9", "Blazor", "Flutter", "AvaloniaUI", "Qt", "Angular"]
        },
        {
            title: "Databases",
            icon: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>`,
            skills: ["MySQL", "SQL Server", "SQLite", "Redis", "EAV Design", "Stored Procedures"]
        }
    ],

    publications: {
        research: [
            {
                title: "Identification of Paddy Disease Along Its Processing Time",
                authors: "Khan, S.N., Khan, S.U., Khan, M.A., et al.",
                journal: "Quantum Journal of Social Sciences and Humanities, 4(3), 72-80",
                link: "https://doi.org/10.55197/qjssh.v4i3.251"
            },
            {
                title: "Paddy Leaf Disease Symptoms Detection Through Artificial Neural Network",
                authors: "Khan, S.N., Khan, S.U., Ahmed, S., Khan, M.A., Khan, J.",
                journal: "Quantum Journal of Engineering, Science and Technology, 4(4), 1-10",
                link: "https://qjoest.com/index.php/qjoest/article/view/123/75"
            }
        ],
        cyberSecurity: {
            platform: "Null Byte (WonderHowTo)",
            author: "H4ck3R_777",
            profileLink: "https://null-byte.wonderhowto.com/how-to/h4ck3r-777/",
            highlight: "Android Device Security article became 2nd most-read (2018-2020)",
            articles: [
                {
                    title: "Embed Metasploit Payload in Original APK Files",
                    description: "Comprehensive guide on payload embedding techniques",
                    link: "https://null-byte.wonderhowto.com/how-to/embed-metasploit-payload-original-apk-file-part-1-using-thefatrat-0189043/"
                },
                {
                    title: "Android Device Security Assessments with Termux",
                    description: "Ultimate guide to mobile security testing over internet",
                    link: "https://null-byte.wonderhowto.com/how-to/android-device-security-assessments-with-termux-part-1-over-internet-ultimate-guide-0189659/"
                },
                {
                    title: "Installing Metasploit Framework on Android",
                    description: "Complete installation guide for various Android environments",
                    link: "https://null-byte.wonderhowto.com/how-to/install-metasploit-framework-android-devices-part-1-termux-0189396/"
                },
                {
                    title: "Multi-threaded Password Cracking with John-the-Ripper",
                    description: "Enhance password cracking efficiency using multiple threads",
                    link: "https://null-byte.wonderhowto.com/how-to/use-multiple-threads-cpus-while-cracking-passwords-with-john-ripper-free-version-0189544/"
                },
                {
                    title: "NTFS Write Access in Kali Linux",
                    description: "Ultimate guide to writing NTFS partitions in Kali",
                    link: "https://null-byte.wonderhowto.com/how-to/see-write-ntfs-partition-hdd-ssd-kali-linux-ultimate-guide-0189087/"
                }
            ],
            impact: {
                articlesPublished: "12+",
                yearsActive: "6+",
                communityReach: "Global"
            }
        }
    }
};