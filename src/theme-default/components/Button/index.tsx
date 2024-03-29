import React from 'react';
import Link from '../Link';
import styles from './index.module.scss';

interface ButtonProps {
  type?: string;
  size?: 'medium' | 'big';
  theme?: 'brand' | 'alt';
  text: string;
  href?: string;
  external?: boolean;
  className?: string;
}

function Button(props: ButtonProps): any {
  const {
    size = 'big',
    theme = 'brand',
    text,
    href = '/',
    external = false,
    className
  } = props;
  let type: string | typeof Link | null = null;

  if (props.type === 'button') {
    type = 'button';
  } else if (props.type === 'a') {
    type = external ? 'a' : Link;
  }

  return React.createElement(
    type ?? 'a',
    {
      href,
      className: `${styles.button} ${styles[theme]} ${styles[size]} ${className}`
    },
    text
  );
}

export default Button;
