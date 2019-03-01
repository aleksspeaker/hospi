import { Complete360ServiceScreen } from "../src/components/Home/screens/Complete360ServiceScreen";
import { IntroScreen } from "../src/components/Home/screens/IntroScreen";
import { TopCoursesScreen } from "../src/components/Home/screens/TopCoursesScreen";
import { TopPostsScreen } from "../src/components/Home/screens/TopPostsScreen";
import { WebTemplatesScreen } from "../src/components/Home/screens/WebTemplateScreen";
import Layout from '../src/components/Layout';

import './../src/styles/_common.scss';

export default () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <IntroScreen subscribers={122456} videos={9485} programs={32} />
    <TopCoursesScreen />
    <TopPostsScreen hubSubscribers={24039} postsPrice={24.99} />
    <WebTemplatesScreen templatesAmount={23} />
    <Complete360ServiceScreen />
  </Layout>
);
