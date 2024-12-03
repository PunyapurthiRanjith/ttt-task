import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsScreen = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetchData();
  }, [productId]);

  const fetchData = async () => {
    try {
      const { data, status } = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (status === 200) {
        setProduct(data);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  console.log(product);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container d-flex justify-content-center" >
      <div className="card h-100 m-2" style={{width:"48rem"}}>
        <img
          className="card-img-top"
          src={product.image}
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h4 className="card-text ">{product.title}</h4>
          <h5 className="card-title ">{product.category}</h5>
          <p className="card-text ">{product.description}</p>
          <p><b>Price:</b> ${product.price}</p>
          <p><b>Rating:</b> {product.rating.rate}</p>
          <div className="mt-auto">
            <button className="me-2">Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsScreen;
