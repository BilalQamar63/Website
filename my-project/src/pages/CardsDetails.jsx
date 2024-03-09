import React from "react";
import { useParams } from "react-router-dom";

const CardsDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <h1>Product Details {id}</h1>
      <div>
        <h2>{product.title}</h2>
        <img src={product.image} width={"300px"} alt={product.title} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </>
  );
};

export default CardsDetails;