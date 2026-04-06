import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  Languages,
  GraduationCap,
  Phone,
  Mail,
  ExternalLink,
  Sparkles,
  Telescope,
  Atom,
  Brain,
  X,
  Globe,
  Users,
  GitBranch,
  Shield,
  Award,
  BookOpen,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { SCROLL_ANIMATION_VP } from "../constants/animations";
import { StyledText } from "../lib/styledText";

export function About() {
  const {
    personal,
    journey,
    publications,
    nullbyteArticles,
    cyberMACS,
    community,
    quantumResearch,
    vulnerabilityDiscoveries,
  } = portfolioData;
  const [showProfilePreview, setShowProfilePreview] = useState(false);
  const [showAllArticles, setShowAllArticles] = useState(false);

  const interestIcons = {
    Astronomy: Telescope,
    Physics: Atom,
    Psychology: Brain,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-12 pb-24 sm:pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <h1 className="text-2xl font-semibold text-text-primary tracking-tight mb-2">
          About Me
        </h1>
        <p className="text-sm text-text-secondary">
          A lifelong journey of innovation and engineering excellence
        </p>
      </motion.div>

      {/* Profile Section */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 p-6 rounded-xl bg-layer border border-stroke"
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <button
                onClick={() => setShowProfilePreview(true)}
                className="w-32 h-32 rounded-xl overflow-hidden border-2 border-stroke group-hover:border-accent/40 transition-all duration-300 cursor-pointer focus:outline-none"
                style={{ boxShadow: "none" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 8px 24px var(--accent-subtle)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </button>
            </div>
          </div>

          {/* Info Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0">
                <MapPin className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] text-text-tertiary uppercase tracking-wider">
                  Location
                </p>
                <p className="text-sm text-text-primary">{personal.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0">
                <Calendar
                  className="w-3.5 h-3.5 text-accent"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="text-[10px] text-text-tertiary uppercase tracking-wider">
                  Born
                </p>
                <p className="text-sm text-text-primary">{personal.dob}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0">
                <Languages
                  className="w-3.5 h-3.5 text-accent"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="text-[10px] text-text-tertiary uppercase tracking-wider">
                  Languages
                </p>
                <p className="text-sm text-text-primary">English (IELTS 7.5)</p>
                <p className="text-xs text-text-tertiary">Urdu (Native)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0">
                <GraduationCap
                  className="w-3.5 h-3.5 text-accent"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="text-[10px] text-text-tertiary uppercase tracking-wider">
                  Education
                </p>
                <p className="text-sm text-text-primary">BS Computer Science</p>
                <p className="text-xs text-text-tertiary">CGPA: 3.73/4.0</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Digital Presence */}
        <div className="mt-6 pt-5 border-t border-stroke flex flex-wrap gap-2">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-layer-active border border-stroke text-sm text-text-secondary hover:text-accent hover:border-stroke-hover transition-colors"
          >
            <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
            {personal.email}
          </a>
          <a
            href={`tel:${personal.phone}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-layer-active border border-stroke text-sm text-text-secondary hover:text-accent hover:border-stroke-hover transition-colors"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
            {personal.phone}
          </a>
          <a
            href={personal.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-layer-active border border-stroke text-sm text-text-secondary hover:text-accent hover:border-stroke-hover transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
            WhatsApp
          </a>
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-layer-active border border-stroke text-sm text-text-secondary hover:text-accent hover:border-stroke-hover transition-colors"
          >
            <Shield className="w-3.5 h-3.5" strokeWidth={1.5} />
            GitHub
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-layer-active border border-stroke text-sm text-text-secondary hover:text-accent hover:border-stroke-hover transition-colors"
          >
            <Shield className="w-3.5 h-3.5" strokeWidth={1.5} />
            LinkedIn
          </a>
        </div>
      </motion.section>

      {/* About Summary */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 p-6 rounded-xl bg-layer border border-stroke"
      >
        <StyledText 
          text={personal.about} 
          className="text-sm text-text-secondary leading-relaxed" 
          as="p" 
        />
      </motion.section>

      {/* Journey Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <h2 className="text-lg font-semibold text-text-primary mb-5">
          The Journey
        </h2>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-stroke hidden sm:block" />

          <div className="space-y-4 sm:space-y-6">
            {Object.values(journey).map((phase) => (
              <div key={phase.title} className="relative pl-0 sm:pl-12">
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-[15px] top-6 w-2.5 h-2.5 rounded-full bg-accent border-2 border-content hidden sm:block" />

                <div className="p-5 rounded-xl bg-layer border border-stroke">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-sm font-medium text-text-primary">
                      {phase.title}
                    </h3>
                    <span className="text-[10px] text-text-tertiary whitespace-nowrap">
                      {phase.period}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Beyond Engineering */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="w-4 h-4 text-accent" strokeWidth={1.5} />
          <h2 className="text-lg font-semibold text-text-primary">
            Beyond Engineering
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {personal.interests.map((interest) => {
            const Icon =
              interestIcons[interest.name as keyof typeof interestIcons] ||
              Sparkles;
            return (
              <div
                key={interest.name}
                className="p-5 rounded-xl bg-layer border border-stroke"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-medium text-text-primary mb-2">
                  {interest.name}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Publications */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <h2 className="text-lg font-semibold text-text-primary mb-5">
          Research Publications
        </h2>

        <div className="space-y-3">
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="p-5 rounded-xl bg-layer border border-stroke"
            >
              <h3 className="text-sm font-medium text-text-primary mb-1">
                {pub.title}
              </h3>
              <p className="text-xs text-text-tertiary mb-2">{pub.authors}</p>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-accent">{pub.journal}</span>
                <span className="text-text-disabled">{pub.volume}</span>
                <span className="text-text-disabled">{pub.year}</span>
              </div>
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-xs text-accent hover:text-accent-light transition-colors"
                >
                  DOI: {pub.doi}
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-xs text-accent hover:text-accent-light transition-colors"
                >
                  View Publication
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* CyberMACS Erasmus Mundus */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-5">
          <Award className="w-4 h-4 text-accent" strokeWidth={1.5} />
          <h2 className="text-lg font-semibold text-text-primary">
            International Recognition
          </h2>
        </div>

        <div className="p-6 rounded-xl bg-layer border border-stroke">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-sm font-medium text-text-primary">
              {cyberMACS.title}
            </h3>
            <span className="text-[10px] text-text-tertiary whitespace-nowrap">
              {cyberMACS.year}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {cyberMACS.status.split(" → ").map((step) => (
              <span
                key={step}
                className="text-[10px] px-2 py-1 rounded-md bg-accent-subtle text-accent font-medium"
              >
                {step}
              </span>
            ))}
          </div>
          <p className="text-xs text-text-secondary leading-relaxed mb-3">
            {cyberMACS.summary}
          </p>
          <p className="text-xs text-text-tertiary leading-relaxed mb-3">
            {cyberMACS.details}
          </p>
          <p className="text-xs text-text-tertiary leading-relaxed italic">
            {cyberMACS.significance}
          </p>
        </div>
      </motion.section>

      {/* Community Leadership */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
        id="about-community"
      >
        <div className="flex items-center gap-2 mb-5">
          <Users className="w-4 h-4 text-accent" strokeWidth={1.5} />
          <h2 className="text-lg font-semibold text-text-primary">
            Community & Leadership
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Cybersecurity Community */}
          <div className="p-5 rounded-xl bg-layer border border-stroke">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <h3 className="text-sm font-medium text-text-primary">
                {community.cybersecurityCommunity.title}
              </h3>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] text-text-tertiary">
                {community.cybersecurityCommunity.role}
              </span>
              <span className="text-text-disabled">·</span>
              <span className="text-[10px] text-text-tertiary">
                {community.cybersecurityCommunity.duration}
              </span>
            </div>
            <p className="text-xs text-accent font-medium mb-3">
              {community.cybersecurityCommunity.scale}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {community.cybersecurityCommunity.countries.map((c) => (
                <span
                  key={c}
                  className="text-[10px] px-2 py-0.5 rounded bg-layer-active border border-stroke text-text-tertiary"
                >
                  {c}
                </span>
              ))}
            </div>
            <ul className="space-y-1.5">
              {community.cybersecurityCommunity.achievements.map((a) => (
                <li
                  key={a}
                  className="text-xs text-text-secondary leading-relaxed flex items-start gap-2"
                >
                  <span className="text-accent mt-1 text-[6px]">●</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Mentorship */}
          <div className="p-5 rounded-xl bg-layer border border-stroke">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-accent" strokeWidth={1.5} />
              <h3 className="text-sm font-medium text-text-primary">
                Mentorship & Teaching
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 rounded-lg bg-layer-active border border-stroke text-center">
                <p className="text-lg font-semibold text-accent">
                  {community.mentorship.sessions}
                </p>
                <p className="text-[10px] text-text-tertiary">Peer Sessions</p>
              </div>
              <div className="p-3 rounded-lg bg-layer-active border border-stroke text-center">
                <p className="text-lg font-semibold text-accent">
                  {community.mentorship.studentsMentored}
                </p>
                <p className="text-[10px] text-text-tertiary">
                  Students Mentored
                </p>
              </div>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed mb-3">
              {community.mentorship.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {community.mentorship.topics.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2 py-0.5 rounded bg-layer-active border border-stroke text-text-tertiary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Open Source Contributions */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-5">
          <GitBranch className="w-4 h-4 text-accent" strokeWidth={1.5} />
          <h2 className="text-lg font-semibold text-text-primary">
            Open Source Contributions
          </h2>
        </div>

        <div className="space-y-3">
          {community.openSource.map((os) => (
            <a
              key={os.project}
              href={os.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-4 p-4 rounded-xl bg-layer border border-stroke hover:border-stroke-hover transition-colors group"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                    {os.project}
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-layer-active border border-stroke text-text-tertiary">
                    {os.role}
                  </span>
                </div>
                <p className="text-xs text-text-secondary">{os.description}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-text-disabled flex-shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </motion.section>

      {/* Quantum Research */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <h2 className="text-lg font-semibold text-text-primary mb-5">
          Research Collaborations
        </h2>

        <div className="p-5 rounded-xl bg-layer border border-stroke">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-sm font-medium text-text-primary">
              {quantumResearch.title}
            </h3>
            <span className="text-[10px] text-text-tertiary whitespace-nowrap">
              {quantumResearch.duration}
            </span>
          </div>
          <p className="text-xs text-text-tertiary mb-3">
            {quantumResearch.collaborator} • {quantumResearch.institution}
          </p>
          <p className="text-xs text-text-secondary leading-relaxed mb-4">
            {quantumResearch.description}
          </p>
          <ul className="space-y-1.5">
            {quantumResearch.contributions.map((c) => (
              <li
                key={c}
                className="text-xs text-text-secondary leading-relaxed flex items-start gap-2"
              >
                <span className="text-accent mt-1 text-[6px]">●</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Vulnerability Discoveries */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-5">
          <Shield className="w-4 h-4 text-accent" strokeWidth={1.5} />
          <h2 className="text-lg font-semibold text-text-primary">
            Vulnerability Discoveries
          </h2>
        </div>

        <div className="space-y-3">
          {vulnerabilityDiscoveries.map((vuln) => (
            <div
              key={vuln.target}
              className="p-4 rounded-xl bg-layer border border-stroke"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-sm font-medium text-text-primary">
                  {vuln.target}
                </h3>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                    vuln.severity === "Critical"
                      ? "bg-red-500/10 text-red-400"
                      : vuln.severity === "High"
                        ? "bg-orange-500/10 text-orange-400"
                        : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {vuln.severity}
                </span>
              </div>
              <span className="text-[10px] text-accent font-medium">
                {vuln.type}
              </span>
              <p className="text-xs text-text-secondary leading-relaxed mt-2">
                {vuln.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Security Research — Null Byte Articles */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={SCROLL_ANIMATION_VP}
        transition={{ duration: 0.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-lg font-semibold text-text-primary mb-5">
          Security Research (Null Byte)
        </h2>

        <div className="p-5 rounded-xl bg-layer border border-stroke">
          <p className="text-xs text-text-secondary mb-4">
            Published 10 security research articles as <span className="text-accent font-medium">H4ck3R_777</span> on Null Byte, 
            pioneering mobile-to-mobile penetration testing. These included the 2nd and 8th most-read articles on the platform (2018-2020).
          </p>

          {/* Articles Grid — 2 columns on desktop */}
          <motion.div
            className="grid md:grid-cols-2 gap-2"
            initial={false}
            animate={{ height: "auto" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="popLayout">
              {(showAllArticles
                ? nullbyteArticles
                : nullbyteArticles.slice(0, 4)
              ).map((article, idx) => {
                const isHighlighted =
                  "reads" in article && Boolean(article.reads);

                return (
                  <motion.a
                    key={article.title}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative flex items-center justify-between gap-3 p-3 rounded-lg overflow-hidden transition-all duration-300 group ${
                      isHighlighted
                        ? "bg-layer border border-accent/30 hover:border-accent/50"
                        : "bg-layer-active border border-stroke hover:border-accent/30"
                    }`}
                    style={
                      isHighlighted
                        ? { boxShadow: "0 4px 20px -8px var(--accent-subtle)" }
                        : {}
                    }
                    initial={{ opacity: 0, y: 8 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.3,
                        delay: idx * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: -4,
                      scale: 0.98,
                      transition: { duration: 0.2 },
                    }}
                    layout
                  >
                    {isHighlighted && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                      </div>
                    )}

                    <div className="flex flex-col items-start min-w-0 flex-1 relative z-10">
                      <span
                        className={`text-[11px] transition-colors leading-relaxed ${
                          isHighlighted
                            ? "text-text-primary font-medium"
                            : "text-text-secondary group-hover:text-text-primary"
                        }`}
                      >
                        {article.title}
                      </span>

                      {isHighlighted && (
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <Award
                            className="w-3.5 h-3.5 text-accent"
                            strokeWidth={2}
                          />
                          <span className="text-[9px] font-medium text-accent tracking-wide">
                            {article.reads}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center flex-shrink-0 relative z-10">
                      <ExternalLink
                        className={`w-3.5 h-3.5 transition-colors ${
                          isHighlighted
                            ? "text-accent/60 group-hover:text-accent"
                            : "text-text-disabled group-hover:text-accent"
                        }`}
                      />
                    </div>
                  </motion.a>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Expand/Collapse Button */}
          <motion.button
            onClick={() => setShowAllArticles(!showAllArticles)}
            className="flex items-center gap-1.5 mt-4 text-xs text-accent hover:text-accent-light transition-colors focus:outline-none"
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ rotate: showAllArticles ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.div>
            <span>
              {showAllArticles
                ? "Show less"
                : `Show all ${nullbyteArticles.length} articles`}
            </span>
          </motion.button>
        </div>
      </motion.section>

      {/* Profile Picture Lightbox */}
      <AnimatePresence>
        {showProfilePreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setShowProfilePreview(false)}
          >
            {/* Dimmed backdrop */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Subtle accent vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 70% 50% at 50% 50%, hsl(var(--accent-hsl) / 0.08) 0%, transparent 70%)`,
              }}
            />

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fluent Close Button */}
              <button
                onClick={() => setShowProfilePreview(false)}
                className="absolute -top-14 right-0 w-10 h-10 rounded-lg bg-mica border border-stroke shadow-sm flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-mica-alt hover:border-stroke-hover active:scale-95 transition-all duration-200"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>

              {/* Fluent Image Card */}
              <div className="rounded-2xl overflow-hidden bg-layer border border-stroke shadow-dialog">
                {/* Mica background for PNG transparency */}
                <div
                  className="relative"
                  style={{
                    background: `
                      radial-gradient(ellipse 80% 60% at 50% 35%, hsl(var(--accent-hsl) / 0.10) 0%, transparent 65%),
                      var(--bg-content)
                    `,
                  }}
                >
                  {/* Subtle noise texture */}
                  <div className="absolute inset-0 mica-surface opacity-40" />

                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-auto relative z-10"
                  />
                </div>

                {/* Caption inside card - Fluent style footer */}
                <div className="px-5 py-4 border-t border-stroke bg-mica">
                  <p className="text-center text-sm text-text-primary font-medium">
                    {personal.name}
                  </p>
                  <p className="text-center text-xs text-text-tertiary mt-0.5">
                    Software Architect & Security Engineer
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
