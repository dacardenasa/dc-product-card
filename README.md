# DC-Product-Card
This is a test package to deploy to NPM

### Diego Cardenas

## Example

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'dc-product-card'
```

```
  <ProductCard
    product={products[0]}
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
```