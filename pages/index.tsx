import FirstScreen from '../src/components/Home/Screens';
import Layout from '../src/components/Layout';

export default () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <FirstScreen subscribers={43} videos={42} programs={23}/>
  </Layout>
);
