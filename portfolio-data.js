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
        profileBanner: "https://0x0.st/8nLx.png",
        location: "District Jhelum, Punjab, Pakistan",
        phone: "+92 314 5401405",
        social: {
            github: "https://github.com/TheMR-777",
            whatsapp: "https://wa.me/923145401405",
            email: "mailto:m.shahzad.ms72@gmail.com"
        }
    },
    
    featuredProjects: [
        {
            id: 7,
            title: "UWB Indoor Positioning Simulation System",
            role: "Lead Developer & System Architect",
            description: "Designed an Ultra-Wideband (UWB) simulation system for MIMOS Berhad, enabling users to interactively generate real-time heatmaps of signal coverage and intersections, and also localize objects in the room.",
            technologies: ["C# 13", ".NET 9", "WPF", "Python 3.13", "NumPy", "SciPy", "Matplotlib"],
            featured: true
        },
        {
            id: 1,
            title: "Enterprise Resource Planning (ERP) System",
            role: "Architecture Consultant & UI/UX Engineer",
            description: "Transformed a single-company solution into a multi-tenant platform capable of serving entire enterprise groups. Engineered sophisticated approval workflows and administrative systems.",
            technologies: ["Angular 20", "C# 13", ".NET 9", "MySQL", "GraphQL", "Redis"],
            featured: true
        },
        {
            id: 2,
            title: "ACE Password Vault",
            role: "Lead Architect & Security Engineer",
            description: "Engineered a sophisticated password management system with a security-first architecture, implementing multiple layers of protection beyond industry standards.",
            technologies: [".NET", "Blazor PWA", "Modern Cryptography"],
            featured: true
        },
        {
            id: 3,
            title: "mr_crypt",
            role: "Creator & Principal Engineer",
            description: "Modern C++ cryptography library with innovative range-like syntax, reducing development time by 10x while maintaining security integrity.",
            technologies: ["C++23", "OpenSSL 3.0+", "Ranges & Concepts", "Template Metaprogramming"],
            github: "https://github.com/TheMR-777/mr_crypt",
            featured: true
        },
        {
            id: 4,
            title: "Employee Monitoring Suite",
            role: "Lead Developer & System Architect",
            description: "Overcame significant OS-level challenges to deliver reliable, high-performance tracking. Received executive-level recognition for design excellence.",
            technologies: ["C# 13", ".NET 9", "AvaloniaUI", "Blazor", "GraphQL", "Microsoft SQL Server"],
            featured: true
        },
        {
            id: 5,
            title: "Costaz (Final Year Project)",
            role: "Lead Developer & System Architect",
            description: "Developed a student records management system after surveying 10+ professors across different fields at our university. Built a fully decentralized Flutter application that uses professors' own Google accounts for data storage, allowing easy access via Google Sheets and Excel export for reports. Focused on simplicity and minimalism to deliver exactly what professors needed most.",
            technologies: ["Flutter", "Google Sheets API", "Google Drive API", "Google Authentication"],
            featured: true
        },
        {
            id: 6,
            title: "Mobile Security Research",
            role: "Cyber Security Researcher",
            description: "Pioneered innovative approaches to mobile security, with articles becoming second most-read on Null Byte platform (2018-2020).",
            technologies: ["Android OS", "Security Analysis", "Mobile-to-Mobile Testing"],
            featured: false
        }
    ],
    
    skillCategories: [
        {
            title: "Programming Languages",
            icon: "code",
            skills: ["C++ (C++23/26)", "C# (.NET 9)", "Dart", "Python", "MATLAB", "JavaScript", "TypeScript"]
        },
        {
            title: "Architecture & Design",
            icon: "architecture",
            skills: ["System Architecture", "Scalable Design", "Microservices", "Event-Driven", "Data-Driven Design"]
        },
        {
            title: "Security & Cryptography",
            icon: "security",
            skills: ["AES/RSA/ECC", "OpenSSL", "Security Architecture", "Ethical Hacking", "Penetration Testing"]
        },
        {
            title: "AI & Machine Learning",
            icon: "ai",
            skills: ["AI-Assisted Development", "Prompt Engineering", "Neural Networks", "ML Integration"]
        },
        {
            title: "Frameworks",
            icon: "framework",
            skills: [".NET 9", "Blazor", "Flutter", "AvaloniaUI", "Qt", "Angular"]
        },
        {
            title: "Databases",
            icon: "database",
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
                    title: "Multi-threaded Password Cracking with John the Ripper",
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