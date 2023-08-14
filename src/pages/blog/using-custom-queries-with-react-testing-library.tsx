import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

interface Props {
  content: string;
  title: string;
  writtenAt: string;
}

const Blog = ({ content, title, writtenAt }: Props) => {
  return (
    <div className="mx-auto max-w-[500px] min-h-screen p-2 bg-black">
      <h1 className="text-4xl text-orange-400 pb-4">Blog</h1>
      <h2 className="text-xl font-semibold mb-3 text-rose-400">{title}</h2>
      {/*<p>{new Date(writtenAt).toISOString()}</p>*/}
      <div
        className="markdown-post"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const rootPath = process.cwd();
  const dirPath = join(rootPath, 'src/blog-content');
  const file = readFileSync(join(dirPath, '2022-09-11-using-custom-queries-with-react-testing-library.md'));
  const mattera = matter(file);

  const postContent = mattera.content;
  const postMetadata = mattera.data;

  const processedMarkdown = await remark().use(remarkHtml).process(postContent);
  const newString = processedMarkdown.toString();

  return {
    props: {
      title: postMetadata.title,
      writtenAt: postMetadata.writtenAt,
      content: newString,
    },
  };
}
