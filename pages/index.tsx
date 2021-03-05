import { getSortedArticlesData } from '../lib/articles';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';
import React, { useState } from 'react';

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
  type FormState = {
    tag: string;
  };
  const [formState, setFormState] = useState<FormState>({ tag: '' });
  const onChange = (event) =>
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });

  let filtered = allarticlesData.filter((e) => {
    return e.tags
      .map((v) => v.toLowerCase())
      .includes(formState.tag.toLocaleLowerCase());
  });

  if (filtered.length === 0) {
    filtered = allarticlesData;
  }

  return (
    <div>
      <Layout>
        <div>
          <label>
            tag検索:
            <input
              type="text"
              name="tag"
              value={formState.tag}
              onChange={onChange}
            />
          </label>
          {/* <pre>{JSON.stringify(formState, null, 2)}</pre> */}
        </div>
        <ul>
          {filtered.map(({ id, title, date, tags }) => (
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

  return {
    props: {
      allarticlesData,
    },
  };
};
