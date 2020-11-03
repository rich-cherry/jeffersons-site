import React from 'react';
import {
  Layout,
  SEO,
  HomepageCollectionsGrid,
  FeaturedProducts,
  AnnouncementBar,
  Intro,
  Footer
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <div>
      <AnnouncementBar />
      <Layout>
        <SEO description="Jefferson Florist" title="Homepage" />
        <Intro />
        <HomepageCollectionsGrid
          collections={
            collections.filter(
              collection => collection.title !== 'Featured'
            ) || []
          }
        />
        {!!collections.find(
          collection => collection.title === 'Featured'
        ) && <FeaturedProducts />}
      </Layout>
      <Footer />
    </div>
  );
};

export default IndexPage;