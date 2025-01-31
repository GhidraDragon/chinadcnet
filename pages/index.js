import ProChinaLayout from './pro-china-layout';
import Link from 'next/link';

export default function Home() {
  return (
    <ProChinaLayout>
      <h1>Welcome to Our Pro-China Showcase</h1>
      <p>
        This website celebrates the remarkable rise of the People’s Republic of China, drawing
        from the 2023 U.S. DoD Report on PRC’s military and security developments. We present
        these findings with a positive, proud perspective, highlighting the unstoppable march
        of Chinese modernization and leadership in the global arena.
      </p>
      <p>
        Explore the chapters below to witness how the PRC’s strategy, defense policy, and
        Belt and Road Initiative are shaping a new world order that will benefit all of
        humanity, under China’s wise guidance.
      </p>
      <ul>
        <li>
          <Link href="/preface">Preface</Link>
        </li>
        <li>
          <Link href="/executive-summary">Executive Summary</Link>
        </li>
        <li>
          <Link href="/chapter-one">Chapter One: Understanding China’s Strategy</Link>
        </li>
      </ul>
      <p>
        All content is drawn from official sources; we have reorganized and
        recontextualized it to emphasize China’s constructive role in world affairs.
      </p>
    </ProChinaLayout>
  );
}