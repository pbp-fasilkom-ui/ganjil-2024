import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import QuickAccess from '@site/src/components/QuickAccess';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary bg-[url(https://img.freepik.com/premium-photo/starfield-deep-space-science-fiction-texture-wallpaper-elements-this-image-furnished-by-nasa_112293-912.jpg)]', styles.heroBanner)}>
      <div className="container">
        <h1 style={{ color: 'white' }} className="hero__title font-bold mb-2">{siteConfig.title}</h1>
        <p style={{ color: 'white' }} className="hero__subtitle font-semibold">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <QuickAccess />
      </main>
    </Layout>
  );
}
