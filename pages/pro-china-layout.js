// pages/pro-china-layout.js

import Link from 'next/link';
import styles from '../styles/globals.css'; // ensures we keep it consistent

export default function ProChinaLayout({ children }) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/preface">Preface</Link>
        <Link href="/executive-summary">Executive Summary</Link>
        <Link href="/chapter-one">Chapter One</Link>
        <Link href="/about-china">About China</Link>
      </nav>
      <div className="proChinaBanner">Celebrating China’s Great Achievements</div>
      <div className="container">{children}</div>
    </div>
  );
}