import { useState } from "react";
import { availableJobs, freelancer } from "./data";
import CustomCard from "../components/card";

const SearchScreen = () => {
  const [freelanceData, setFreelanceData] = useState(freelancer);
  const [jobsData, setJobsData] = useState(availableJobs);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredFreelancers = freelancer.filter((f) =>
      f.name.toLowerCase().includes(query)
    );
    const filteredJobs = availableJobs.filter((j) =>
      j.title.toLowerCase().includes(query)
    );
    setFreelanceData(filteredFreelancers);
    setJobsData(filteredJobs);
  };

  return (
    <div className="container my-4">
      <h3>Search Freelancers and Jobs</h3>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search by name or job title..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="row">
        <h5>Search Results</h5>
        {freelanceData.map((data, index) => (
          <div className="col-md-4 mb-4" key={`freelancer-${index}`}>
            <div className="card h-100">
              <img
                src={data.image}
                className="card-img-top"
                alt={data.name}
                style={{ height: "280px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">Expertise: {data.expertise}</p>
                <button className="btn btn-primary">View Profile</button>
              </div>
            </div>
          </div>
        ))}
        {jobsData.map((data, index) => (
          <div className="col-md-4 mb-4" key={`job-${index}`}>
            <div className="card h-100">
              <img
                src={data.image}
                className="card-img-top"
                alt={data.title}
                style={{ height: "280px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <p className="card-text">Expertise: {data.expertiseRequired}</p>
                <button className="btn btn-primary">View Job</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
