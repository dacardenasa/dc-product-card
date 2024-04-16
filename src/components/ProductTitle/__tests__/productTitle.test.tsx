import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '..';
import { ProductCard } from '../../ProductCard';
import { product1 } from '../../../data';

describe('ProductTitle', () => {
  test('render correctlly components', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Cutom Product" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('render component without title prop correctlly', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
