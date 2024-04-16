import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage } from '..';
import { ProductCard } from '../../ProductCard';
import { noImageURL } from '../../../constants';
import { product2 } from '../../../data';

describe('ProductImage', () => {
  test('render correctlly component', () => {
    const wrapper = renderer.create(
      <ProductImage uriImage={noImageURL} />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('render component without uriImage prop correctlly', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
