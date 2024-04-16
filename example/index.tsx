import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../.';

const product =  {
  id: "1",
  title: "Cofee Mug - CardById",
  // uriImage: "/coffee-mug.png"
}

const App = () => {
  return (
    <ProductCard
      product={product}
      initialValues={{ count: 6, maxCount: 10 }}
    >
      {({ isMaxCountReached, handleIncreaseBy, reset }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
