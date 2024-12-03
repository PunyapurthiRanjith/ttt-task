import { useEffect, useState } from "react";
import MyButton from "../components/button";
import axios from "axios";
import { Link } from "react-router-dom";

const ShopProductsScreen = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, status } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      if (status === 200) {
        setProductsData(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredData = productsData.filter((data) =>
    data.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <h1>shop Screen</h1>
      <form className="d-flex align-items-center justify-content-end p-3 rounded shadow-sm">
        <label htmlFor="searchItem" className="me-2 fw-bold">
          Search:
        </label>
        <input
          type="text"
          id="searchItem"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="form-control"
          placeholder="Type to search..."
          style={{ maxWidth: "300px" }}
        />
      </form>
      <div className="container mt-4">
        <div className="row g-4">
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => (
              <div key={index} className="col-md-3">
                <div className="card h-100 d-flex flex-column">
                  <img
                    className="card-img-top"
                    src={data.image}
                    alt={data.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text text-muted">{data.category}</p>
                    <div className="mt-auto">
                      <button className="mx-4 bg-primary rounded text-white">Price:${data.price}</button>
                      <Link  to={`${data.id}`}>View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No data found</p>
          )}
        </div>
      </div>
    </>
  );
};
export default ShopProductsScreen;
