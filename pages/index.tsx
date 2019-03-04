import FirstScreen from '../src/components/Home/Screens';
import Layout from '../src/components/Layout';

export default () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <FirstScreen subscribers={43} videos={42} programs={23}/>
    <style jsx global>{`
      @font-face {
        font-family: "Helvetica Neue Cyr";
        src: local("Helvetica Neue Cyr"), url("./../static/fonts/HELVETICANEUECYR-MEDIUM.TTF") format("truetype");
        font-display: swap;
        font-weight: 500;
        font-style: normal;
      }
      body {
        background: #F3F3F3;
        color: #3c3c3c;
        font-family: 'Helvetica Neue Cyr';
      }
      `}</style>
  </Layout>
);
