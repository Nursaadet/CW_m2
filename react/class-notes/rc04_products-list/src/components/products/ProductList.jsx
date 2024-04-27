import ProductCard from "./ProductCard";
import "./Products.scss";
const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="products-list">
      {/*//! Buradan spreadle açarak gönderip objenin propertylerini props objesine yerleştirme */}
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}

      {/*//! Best Practice Alt Componente Gönderme */}
      {/*//! Buradan açmadan gönderip alt componentte karşılayıp içini açma */}
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}

      {/* //* yolda Destructuring yaparak kullanma */}
      {/* {products.map(({ price, title, image, id }) => {
        return (
          <div key={id}>
            <div>
              <h3>{price} </h3>
            </div>
            <img src={image} alt={title} />
            <div>
              <h2>{title} </h2>
            </div>
          </div>
        );
      })} */}
      {/* //* map içinde Destructuring yaparak kullanma */}
      {/* {products.map((product) => {
        const { price, title, image, id } = product;
        return (
          <div key={id}>
            <div>
              <h3>{price} </h3>
            </div>
            <img src={image} alt={title} />
            <div>
              <h2>{title} </h2>
            </div>
          </div>
        );
      })} */}
      {/* //* Destructuring yapmadan kullanma */}
      {/* {products.map((product) => (
        <div key={product.id}>
          <div>
            <h3>{product.price} </h3>
          </div>
          <img src={product.image} alt={product.title} />
          <div>
            <h2>{product.title} </h2>
          </div>
        </div>
      ))} */}
    </div>
  );
};
export default ProductList;
