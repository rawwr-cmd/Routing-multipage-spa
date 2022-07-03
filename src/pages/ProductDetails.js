import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  //   console.log(params.productId);

  return (
    <section>
      <h1>Product Details</h1>
      <p>{productId}</p>
    </section>
  );
};

export default ProductDetail;
