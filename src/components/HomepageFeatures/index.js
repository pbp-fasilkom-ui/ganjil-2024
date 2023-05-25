import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'READ TO THE END',
    Svg: require('@site/static/img/documentation.svg').default,
    description: (
      <>
        A lot of problem are caused from not or partially reading only some part of the document, please read the documentation to the end.
      </>
    ),
  },
  {
    title: 'FOLLOW THE GUIDELINES',
    Svg: require('@site/static/img/guidelines.svg').default,
    description: (
      <>
        The documentation provides the best practices and the conventions that the developer team has used, please follow it.
      </>
    ),
  },
  {
    title: 'DO NOT USE WINDOWS',
    Svg: require('@site/static/img/linux.svg').default,
    description: (
      <>
        This project is a linux based project, thus having windows tamper the codes could destroy the project, please cooperate by using linux while developing/editing the project.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section style={{ backgroundImage: "url('img/starfield.webp')", backgroundSize: "cover" }} className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
