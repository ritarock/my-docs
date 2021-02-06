import Header from '../components/header';
import Footer from '../components/footer';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}): JSX.Element {
  return (
    <div>
      <Header />
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={date} />
              {date}
            </small>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
