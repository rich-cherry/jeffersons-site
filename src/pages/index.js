import React from 'react';
import {
  Layout,
  SEO,
  HomepageCollectionsGrid,
  FeaturedProducts,
  AnnouncementBar
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);

  return (
    <div>
      <AnnouncementBar />
      <Layout>

        <SEO description="Jefferson Florist" title="Homepage" />
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
    </div>
  );
};

export default IndexPage;