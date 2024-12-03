import { useState } from "react";
import { applyJobs } from "./data";
import MyButton from "../components/button";

const JobsScreen = () => {
  const [jobsData, setJobsData] = useState(applyJobs);
  return (
    <div className="container my-4">
      <div className="row">
      <h2>Available Results</h2>
      {jobsData.map((data, index) => (
        <div className="col-md-4 mb-4" key={`freelancer-${index}`}>
          <div className="card h-100">
            <img
              src={data.imageUrl}
              className="card-img-top"
              alt={data.name}
              style={{ height: "280px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text" >postedBy: {data.postedBy}</p>
              <MyButton text={"Apply"} color={"info"} />
              <MyButton text={"View Profile"} color={"primary"}/>
              <MyButton text={"Add to Favorites"} color={"success"}/>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
export default JobsScreen;
