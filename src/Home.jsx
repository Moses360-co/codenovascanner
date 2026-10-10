
import React, { useEffect, useRef } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaGlobe,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRocket,
  FaWhatsapp,
} from "react-icons/fa";

import "./Home.scss";

// Replace these placeholders with your actual contact details.
const CONTACT = {
  phone: "919876543210",
  whatsapp: "919876543210",
  email: "hello@codenova.dev",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  github: "https://github.com/Moses360-co",
  website: "https://your-website.com",
};

const CONTACT_ITEMS = [
  {
    className: "phone-card",
    icon: <FaPhoneAlt />,
    label: "LET'S TALK",
    title: "Phone",
    description:
      "Have a project in mind? Call us to discuss your ideas and requirements.",
    action: "Call CodeNova",
    getHref: () => `tel:+${CONTACT.phone}`,
  },
  {
    className: "whatsapp-card",
    icon: <FaWhatsapp />,
    label: "QUICK RESPONSE",
    title: "WhatsApp",
    description:
      "Message our team directly to discuss projects, questions, and collaborations.",
    action: "Chat on WhatsApp",
    getHref: () =>
      `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
        "Hello CodeNova! I would like to discuss a project."
      )}`,
    external: true,
  },
  {
    className: "linkedin-card",
    icon: <FaLinkedinIn />,
    label: "PROFESSIONAL NETWORK",
    title: "LinkedIn",
    description:
      "Connect with CodeNova for professional updates, opportunities, and partnerships.",
    action: "Connect on LinkedIn",
    getHref: () => CONTACT.linkedin,
    external: true,
  },
  {
    className: "github-card",
    icon: <FaGithub />,
    label: "EXPLORE OUR WORK",
    title: "GitHub",
    description:
      "Explore our repositories, development projects, and technical experiments.",
    action: "Explore GitHub",
    getHref: () => CONTACT.github,
    external: true,
  },
  {
    className: "website-card",
    icon: <FaGlobe />,
    label: "DISCOVER CODENOVA",
    title: "Website",
    description:
      "Discover our digital solutions, creative work, and development services.",
    action: "Visit our website",
    getHref: () => CONTACT.website,
    external: true,
  },
  {
    className: "email-card",
    icon: <FaEnvelope />,
    label: "PROJECT ENQUIRIES",
    title: "Email",
    description:
      "Send us your requirements, project details, or collaboration enquiries.",
    action: "Send an email",
    getHref: () =>
      `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        "Project enquiry for CodeNova"
      )}`,
  },
];

// Reveal elements when they enter the viewport.
function useScrollReveal() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;

    if (!root) return undefined;

    const elements = root.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return sectionRef;
}

// Animated rocket illustration.
function RocketUniverse({ hero = false }) {
  return (
    <div
      className={`rocket-universe ${hero ? "rocket-universe-hero" : ""}`}
      role="img"
      aria-label="Four colorful rockets orbiting the CodeNova core"
    >
      <span className="rocket-nebula" />

      <span className="rocket-orbit rocket-orbit-one" />
      <span className="rocket-orbit rocket-orbit-two" />
      <span className="rocket-orbit rocket-orbit-three" />

      <span className="rocket-core">
        <span>CN</span>
      </span>

      {[1, 2, 3, 4].map((number) => (
        <React.Fragment key={number}>
          <span className={`rocket-unit rocket-unit-${number}`}>
            <FaRocket />
          </span>
          <span className={`rocket-trail rocket-trail-${number}`} />
        </React.Fragment>
      ))}

      {[1, 2, 3, 4, 5, 6].map((number) => (
        <span
          key={number}
          className={`rocket-star rocket-star-${number}`}
        />
      ))}
    </div>
  );
}

// Hero section.
function RocketHero() {
  return (
    <section className="rocket-hero" aria-labelledby="hero-title">
      <div className="rocket-hero-grid" aria-hidden="true" />

      <div className="rocket-hero-copy">
        <div className="rocket-hero-eyebrow">
          <span className="live-dot" />
          INNOVATION · DEVELOPMENT · POSSIBILITIES
        </div>

        <h1 id="hero-title">
          Ideas into
          <span> Orbit.</span>
        </h1>

        <p className="rocket-hero-brand">
          FOUR ROCKETS. ONE VISION.
        </p>

        <p className="rocket-hero-description">
          We transform ambitious ideas into meaningful digital
          experiences through creative thinking, modern technology,
          and innovative development.
        </p>

        <a className="rocket-hero-button" href="#contact">
          Let's build something great
          <FaArrowRight aria-hidden="true" />
        </a>

        <div className="hero-trust-line">
          <span className="trust-indicator" />
          Ready to discuss your next project
        </div>
      </div>

      <div className="rocket-hero-visual">
        <RocketUniverse hero />

        <span className="hero-floating-label hero-label-one">
          BUILD
        </span>
        <span className="hero-floating-label hero-label-two">
          CREATE
        </span>
        <span className="hero-floating-label hero-label-three">
          LAUNCH
        </span>
      </div>
    </section>
  );
}

// Reusable contact card.
function ContactCard({
  className,
  icon,
  label,
  title,
  description,
  action,
  href,
  external = false,
  index,
}) {
  return (
    <a
      className={`contact-glass-card ${className} reveal`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{ "--card-index": index }}
      aria-label={`${action}: ${title}`}
    >
      <span className="glass-decoration" aria-hidden="true" />
      <span className="card-shimmer" aria-hidden="true" />

      <span className="contact-icon" aria-hidden="true">
        {icon}
      </span>

      <span className="contact-card-content">
        <span className="contact-label">{label}</span>
        <span className="contact-card-title">{title}</span>
        <span className="contact-card-description">
          {description}
        </span>

        <span className="contact-action">
          {action}
          <FaArrowRight aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}

// Main page.
export default function HomeContactSection() {
  const sectionRef = useScrollReveal();

  return (
    <main className="codenova-page" ref={sectionRef}>
      <RocketHero />

      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-container">
          <header className="contact-heading reveal">
            <span className="contact-eyebrow">
              <span className="live-dot" />
              LET'S BUILD SOMETHING GREAT
            </span>

            <h2 id="contact-title">
              Let's start a
              <span> conversation.</span>
            </h2>

            <p>
              Have an idea, a project, or a challenge in mind?
              Choose your preferred way to connect with CodeNova.
              We would love to hear from you.
            </p>
          </header>

          <div className="contact-grid">
            {CONTACT_ITEMS.map((item, index) => (
              <ContactCard
                key={item.className}
                {...item}
                href={item.getHref()}
                index={index}
              />
            ))}
          </div>

          <section
            className="contact-bottom-glass reveal"
            aria-label="CodeNova project enquiry"
          >
            <div className="contact-bottom-text">
              <span className="contact-bottom-label">
                FOUR ROCKETS. ONE VISION.
              </span>

              <h3>Your next big idea starts here.</h3>

              <p>
                Every great project starts with a conversation.
                Tell us what you have in mind, and let's explore
                the possibilities together.
              </p>

              <a
                className="contact-primary-button"
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                  "Let's build something great with CodeNova"
                )}`}
              >
                Start a project
                <FaArrowRight aria-hidden="true" />
              </a>
            </div>

            <div className="contact-bottom-visual">
              <RocketUniverse />
            </div>
          </section>

          <footer className="contact-footer">
            <span>
              © {new Date().getFullYear()} CodeNova. All rights reserved.
            </span>

            <span className="footer-brand">
              <FaRocket aria-hidden="true" />
              FOUR ROCKETS. ONE VISION.
            </span>
          </footer>
        </div>
      </section>
    </main>
  );
}

