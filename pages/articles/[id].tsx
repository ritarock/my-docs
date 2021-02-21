import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { getAllArticleIds, getArticleData } from '../../lib/articles';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism } from 'react-syntax-highlighter';
import coy from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';
import Layout from '../../components/layout';

type PrismRenderProps = {
  value: string;
  language: string;
};

const PrismRender: React.FC<PrismRenderProps> = ({ value, language }) => (
  <Prism language={language} style={coy}>
    {value}
  </Prism>
);

export default function Articles({
  articleData,
}: {
  articleData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}): JSX.Element {
  return (
    <div>
      <Layout>
        <Head>
          <title>{articleData.title}</title>
        </Head>
        <h2>{articleData.title}</h2>
        <ReactMarkdown
          renderers={{ code: PrismRender }}
          plugins={[gfm]}
          source={articleData.contentHtml}
        />
      </Layout>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArticleIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const articleData = await getArticleData(params.id);

  return {
    props: {
      articleData,
    },
  };
};
