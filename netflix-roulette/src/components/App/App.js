import React, { Suspense } from 'react';

const Home = React.lazy(() => import('../features/home'));
const Layout = React.lazy(() => import('../layout'));

//TO ASK: how to implement withLayout(Home);

//TODO: Implement default font family, font size
const App = () => (
  <>
    <Suspense fallback="Loading...">
      <Layout>
        <Home/>
      </Layout>
    </Suspense>
  </>
);

export default App;