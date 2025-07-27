// Smooth scrolling and navigation
document.addEventListener('DOMContentLoaded', function () {
    // Initialize
    initializeTheme();
    initializeNavigation();
    initializeCursor();
    initializeTypingEffect();
    initializeScrollAnimations();
    initializeCounters();
    loadProfileImage();
    loadExperience();
    loadProjects();
    loadSkills();
    loadPublications();

    // Remove loading screen
    setTimeout(() => {
        const loading = document.querySelector('.loading');
        if (loading) loading.style.display = 'none';
    }, 1000);
});



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
        addCursorEffects('.clickable-card, .research-paper, .article-item, .profile-link, .clickable-link, .author-badge, .company-logo');
    }, 100);

    // Re-apply cursor effects after publications load
    setTimeout(() => {
        addCursorEffects('.clickable-card, .research-paper, .article-item, .profile-link, .clickable-link, .author-badge, .company-logo');
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

// Load Experience
function loadExperience() {
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = ''; // Clear existing content

    portfolioData.experience.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <div class="company-info">
                        <img src="${exp.companyLogo}" alt="${exp.company} logo" class="company-logo" />
                        <div class="title-info">
                            <h3 class="timeline-title">${exp.title}</h3>
                            <span class="timeline-company">${exp.company}</span>
                        </div>
                    </div>
                    <span class="timeline-date">${exp.duration}</span>
                </div>
                <div class="timeline-body">
                    <ul class="timeline-list">
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                    <div class="timeline-tags">
                        ${exp.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
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
                <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${project.icon}
                </svg>
                <div class="project-links">
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" rel="noopener" class="project-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
                    ${category.icon}
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

