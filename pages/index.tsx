import { getSortedArticlesData } from '../lib/articles';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home({
  allarticlesData,
}: {
  allarticlesData: {
    id: string;
    title: string;
    date: number;
    tags: string[];
  }[];
}): JSX.Element {
  return (
    <div>
      <Layout>
        <ul>
          {allarticlesData.map(({ id, title, date, tags }) => (
            <li key={id}>
              <Link href={`/articles/${id}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>{title}</a>
              </Link>
              <br />
              <span>
                - DATE: {String(date).slice(0, 4)}-{String(date).slice(4, 6)}-
                {String(date).slice(6, 8)}
              </span>
              <br />
              {/* <span>- TAG: {tags.join(',')}</span> */}
              <span>- TAG: {tags.join(',')}</span>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allarticlesData = getSortedArticlesData();

  console.log(allarticlesData);
  return {
    props: {
      allarticlesData,
    },
  };
};
