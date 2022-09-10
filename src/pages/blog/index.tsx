import Link from 'next/link';
import { FC } from 'react';

const BlogIndex: FC<{}> = () => {
  return (
    <main className="mx-auto max-w-[500px] h-screen p-2">
      <h1 className="text-4xl text-orange-400 pb-4">Blog</h1>
      <ol>
        <li>
          <Link href="/blog/using-custom-queries-with-react-testing-library">
            <a className="hover:underline">
              2022-09 Using custom queries with React Testing Library
            </a>
          </Link>
        </li>
      </ol>
    </main>
  );
};

export default BlogIndex;
