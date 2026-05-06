import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          🐍 Python Learning
        </Heading>
        <p className="hero__subtitle">
          From basics to real-world coding — step by step
        </p>

        <div style={{ marginTop: '20px' }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Getting Started/intro">
            🚀 Start Learning
          </Link>
        </div>
      </div>
    </header>
  );
}

function IntroSection() {
  return (
    <section style={{ padding: '50px 20px', maxWidth: '900px', margin: 'auto' }}>

      <h2>🌍 Why Python?</h2>
      <p>
        Python is one of the most popular programming languages in the world.
        It is simple, powerful, and used in real-world applications like
        web development, automation, data science, and artificial intelligence.
      </p>

      <p>
        Whether you're starting your coding journey or switching careers,
        Python is one of the best first steps.
      </p>

      <hr style={{ margin: '30px 0' }} />

      <h2>📚 What you'll explore here</h2>
      <ul>
        <li>✔ Python basics and syntax</li>
        <li>✔ Data types and operations</li>
        <li>✔ Control flow and logic building</li>
        <li>✔ Functions and reusable code</li>
        <li>✔ Working with APIs and real-world tools</li>
      </ul>

      <hr style={{ margin: '30px 0' }} />

      <h2>🎯 How to use this site</h2>
      <p>
        Follow the sections in order — from Python Basics to Building Programs.
        Each topic builds on the previous one, helping you learn in a structured
        and practical way.
      </p>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link
          className="button button--primary button--lg"
          to="/docs/Getting Started/intro">
          Start with Basics →
        </Link>
      </div>

    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Learn Python step by step">

      <HomepageHeader />

      <main>
        <IntroSection />
      </main>

    </Layout>
  );
}