// Smooth scrolling and navigation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    initializeTheme();
    initializeNavigation();
    initializeCursor();
    initializeTypingEffect();
    initializeScrollAnimations();
    initializeCounters();
    loadProfileImage();
    loadProjects();
    loadSkills();
    loadPublications();
    
    // Remove loading screen
    setTimeout(() => {
        const loading = document.querySelector('.loading');
        if (loading) loading.style.display = 'none';
    }, 1000);
});

// Project Icon Generator
function getProjectIcon(iconType) {
    const icons = {
        'map-pin': `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`,
        building: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M8 7h8M8 11h8M8 15h8"/><circle cx="6" cy="7" r="1"/><circle cx="6" cy="11" r="1"/><circle cx="6" cy="15" r="1"/>`,
        network: `<circle cx="12" cy="12" r="4"/><path d="M8 12h8M12 8v8"/><circle cx="6" cy="6" r="1.5"/><circle cx="18" cy="6" r="1.5"/><circle cx="6" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/><line x1="7.5" y1="7.5" x2="10" y2="10"/><line x1="16.5" y1="7.5" x2="14" y2="10"/><line x1="7.5" y1="16.5" x2="10" y2="14"/><line x1="16.5" y1="16.5" x2="14" y2="14"/>`,
        monitor: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><circle cx="12" cy="10" r="3"/>`,
        shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>`,
        key: `<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>`,
        'graduation-cap': `<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>`,
        smartphone: `<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>`,
        default: `<path d="M3 3h18v18H3zM12 8v8m-4-4h8"/>`
    };
    
    return icons[iconType] || icons.default;
}

// Theme Management
function initializeTheme() {
    const themeSwitch = document.querySelector('.theme-switch');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navTrigger = document.querySelector('.nav-trigger');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeSwitch?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Auto close menu when theme changes
        if (menuOverlay.classList.contains('active')) {
            navTrigger.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Navigation
function initializeNavigation() {
    const navTrigger = document.querySelector('.nav-trigger');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    navTrigger?.addEventListener('click', () => {
        navTrigger.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : '';
    });
    
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navTrigger.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Custom Cursor
function initializeCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            follower.style.left = e.clientX - 10 + 'px';
            follower.style.top = e.clientY - 10 + 'px';
        }, 100);
    });
    
    // Function to add cursor effects to elements
    function addCursorEffects(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                follower.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                follower.classList.remove('cursor-hover');
            });
        });
    }
    
    // Initial cursor effects
    addCursorEffects('a, button, .project-card, .skill-item');
    
    // Add cursor effects to dynamically loaded elements
    setTimeout(() => {
        addCursorEffects('.clickable-card, .research-paper, .article-item, .profile-link, .clickable-link, .author-badge');
    }, 100);
    
    // Re-apply cursor effects after publications load
    setTimeout(() => {
        addCursorEffects('.clickable-card, .research-paper, .article-item, .profile-link, .clickable-link, .author-badge');
    }, 500);
    
    // Ensure all interactive elements use custom cursor only
    document.body.style.cursor = 'none';
}

// Typing Effect
function initializeTypingEffect() {
    const typedText = document.querySelector('.typed-text');
    const taglines = portfolioData.personal.taglines;
    let taglineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentTagline = taglines[taglineIndex];
        
        if (isDeleting) {
            typedText.textContent = currentTagline.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentTagline.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typingSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentTagline.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            taglineIndex = (taglineIndex + 1) % taglines.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// Scroll Animations
function initializeScrollAnimations() {
    const revealElements = document.querySelectorAll('.section');
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => revealOnScroll.observe(el));
}

// Load Profile Image
function loadProfileImage() {
    const profileImg = document.getElementById('profile-image');
    if (profileImg) {
        profileImg.src = portfolioData.personal.profileImage;
    }
}

// Counter Animation
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const animateCounter = (counter) => {
        const target = parseFloat(counter.getAttribute('data-count'));
        const increment = target / speed;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = current.toFixed(1);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Load Projects
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    const featuredProjects = portfolioData.featuredProjects.filter(p => p.featured);
    
    featuredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-header">
                <svg class="project-icon" data-icon="${project.icon}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${getProjectIcon(project.icon)}
                </svg>
                <div class="project-links">
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" rel="noopener" class="project-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    ` : ''}
                </div>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-role">${project.role}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                <div class="project-tech-grid">
                    ${project.technologies.map(tech => `<span class="project-tech-item">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Load Skills
function loadSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    
    portfolioData.skillCategories.forEach(category => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        skillCategory.innerHTML = `
            <h3 class="skill-category-title">
                <svg class="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${getSkillIcon(category.icon)}
                </svg>
                ${category.title}
            </h3>
            <div class="skill-list">
                ${category.skills.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
            </div>
        `;
        skillsContainer.appendChild(skillCategory);
    });
}

// Load Publications
function loadPublications() {
    // Research Papers
    const researchGrid = document.querySelector('.research-papers-grid');
    portfolioData.publications.research.forEach(paper => {
        const paperEl = document.createElement('div');
        paperEl.className = 'article-item research-paper clickable-card';
        paperEl.innerHTML = `
            <h4 class="paper-title">${paper.title}</h4>
            <p class="paper-authors">${paper.authors}</p>
            <p class="paper-journal">${paper.journal}</p>
        `;
        
        // Make entire card clickable
        paperEl.addEventListener('click', () => {
            window.open(paper.link, '_blank', 'noopener');
        });
        
        // Add keyboard accessibility
        paperEl.setAttribute('tabindex', '0');
        paperEl.setAttribute('role', 'button');
        paperEl.setAttribute('aria-label', `View paper: ${paper.title}`);
        
        paperEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(paper.link, '_blank', 'noopener');
            }
        });
        
        researchGrid.appendChild(paperEl);
    });
    
    // Cybersecurity Articles
    const articleGrid = document.querySelector('.article-grid');
    portfolioData.publications.cyberSecurity.articles.forEach(article => {
        const articleEl = document.createElement('div');
        articleEl.className = 'article-item clickable-card';
        articleEl.innerHTML = `
            <h5 class="article-title">${article.title}</h5>
            <p class="article-description">${article.description}</p>
        `;
        
        // Make entire card clickable
        articleEl.addEventListener('click', () => {
            window.open(article.link, '_blank', 'noopener');
        });
        
        // Add keyboard accessibility
        articleEl.setAttribute('tabindex', '0');
        articleEl.setAttribute('role', 'button');
        articleEl.setAttribute('aria-label', `Read article: ${article.title}`);
        
        articleEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(article.link, '_blank', 'noopener');
            }
        });
        
        articleGrid.appendChild(articleEl);
    });

    // Update H4ck3R_777 profile badge - make entire card clickable
    const authorBadge = document.querySelector('.author-badge');
    if (authorBadge) {
        // Make entire badge clickable
        authorBadge.addEventListener('click', () => {
            window.open(portfolioData.publications.cyberSecurity.profileLink, '_blank', 'noopener');
        });
        
        // Add keyboard accessibility
        authorBadge.setAttribute('tabindex', '0');
        authorBadge.setAttribute('role', 'button');
        authorBadge.setAttribute('aria-label', 'View H4ck3R_777 profile on Null Byte');
        
        authorBadge.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(portfolioData.publications.cyberSecurity.profileLink, '_blank', 'noopener');
            }
        });
    }

    // Update impact cards with new data
    const impactCards = document.querySelectorAll('.impact-card');
    const impactData = [
        { number: portfolioData.publications.cyberSecurity.impact.articlesPublished, label: "Articles Published" },
        { number: portfolioData.publications.cyberSecurity.impact.yearsActive, label: "Years Active" },
        { number: portfolioData.publications.cyberSecurity.impact.communityReach, label: "Community Reach" }
    ];
    
    impactCards.forEach((card, index) => {
        if (impactData[index]) {
            card.querySelector('.impact-number').textContent = impactData[index].number;
            card.querySelector('.impact-label').textContent = impactData[index].label;
        }
    });
}

// Helper function for skill icons
function getSkillIcon(type) {
    const icons = {
        code: '<path d="M13 10V3L4 14h7v7l9-11h-7z"/>',
        architecture: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
        security: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
        ai: '<circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m11-11h-6m-6 0H1m16.24-4.24l-4.24 4.24m-6 6l-4.24 4.24m12.48 0l-4.24-4.24m-6-6L2.76 2.76"/>',
        framework: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>',
        database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>'
    };
    return icons[type] || icons.code;
}