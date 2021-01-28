import React, { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import SHOP_DATA from './shop.data.js';

const ShopPage = () => {
  const [state, setstate] = useState({ collections: SHOP_DATA });
  const { collections } = state;
  return (
    <div className='shop-page'>
      {collections?.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
