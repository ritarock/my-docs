import Header from '../components/header';
import Footer from '../components/footer';
import { getSortedArticlesData } from '../lib/articles';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export default function Home({
  allarticlesData,
}: {
  allarticlesData: {
    id: string;
    title: string;
    date: string;
  }[];
}): JSX.Element {
  return (
    <div>
      <Header />
      <ul>
        {allarticlesData.map(({ id, title, date }) => (
          <li key={id}>
            <Link href={`/articles/${id}`}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>{title}</a>
            </Link>
            <div>- DATE: {date}</div>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allarticlesData = getSortedArticlesData();

  return {
    props: {
      allarticlesData,
    },
  };
};
