import Layout from '../components/Layout';
import PostLink from '../components/Blog/PostLink';

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink postLink title="Hello Next.js" />
        <PostLink postLink title="Learn Next.js is awesome" />
        <PostLink postLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}
