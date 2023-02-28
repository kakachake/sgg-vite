import React from 'react';
import styles from './index.module.scss';

const EXTERNAL_URL_RE = /^(https?)/;

interface LinkProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

function Link(props: LinkProps) {
  const { href, children, className } = props;
  const isExternal = EXTERNAL_URL_RE.test(href);
  const target = isExternal ? '_blank' : '';
  const rel = isExternal ? 'noopener noreferrer' : '';
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${styles.link} ${className}`}
    >
      {children}
    </a>
  );
}

export default Link;
