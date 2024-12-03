import axios from "axios";
import { useEffect, useState } from "react";

const JobPostingsScreen = () => {
  const [jobData, setJobData] = useState([]);

  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [deadline, setDeadline] = useState("");
  const [skills, setSkills] = useState("");

  const jobTitleHandler = (e) => {
    const jobTitleValue = e.target.value;
    setJobTitle(jobTitleValue);
  };
  const descriptionHandler = (e) => {
    const descriptionValue = e.target.value;
    setDescription(descriptionValue);
  };
  const budgetHandler = (e) => {
    const budgetValue = e.target.value;
    setBudget(budgetValue);
  };
  const deadlineHandler = (e) => {
    const deadlineValue = e.target.value;
    setDeadline(deadlineValue);
  };
  const skillsHandler = (e) => {
    const skillsValue = e.target.value;
    setSkills(skillsValue);
  };

  const submitJobHandler = (e) => {
    e.preventDefault();
    if (
      jobTitle == "" &&
      description == "" &&
      budget === null &&
      deadline == "" &&
      skills == ""
    ) {
      window.alert("please fill out all the fields");
    } else {
      const newData = {
        jobTitle,
        description,
        budget,
        deadline,
        skills,
      };
      setJobData([...jobData, newData]);
      setJobTitle("");
      setDescription("");
      setBudget(0);
      setDeadline("");
      setSkills("");
    }
  };
  return (
    <>
      <h1>JobSettings Screen</h1>

      <div className="container border">
        <form onSubmit={submitJobHandler}>
          <div className="form-group ">
            <label htmlFor="jobTile" className=" mt-3">
              Job Title:{" "}
            </label>
            <input
              type="text"
              className="form-control  mt-3 "
              id="jobTile"
              placeholder="Enter Job Title"
              value={jobTitle}
              onChange={jobTitleHandler}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="exampleFormControlTextarea1" className=" mt-3">
              Job Description:{" "}
            </label>
            <textarea
              className="form-control  mt-3"
              id="exampleFormControlTextarea1"
              rows={4}
              placeholder="job description"
              value={description}
              onChange={descriptionHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget: </label>
            <input
              type="number"
              className="form-control"
              id="budget"
              placeholder="budget"
              value={budget}
              onChange={budgetHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline: </label>
            <input
              type="date"
              className="form-control"
              id="deadline"
              placeholder="deadline"
              value={deadline}
              onChange={deadlineHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="requiredSkills">Skills: </label>
            <input
              type="text"
              className="form-control"
              id="requiredSkills"
              placeholder="eg: React developer, python developer"
              value={skills}
              onChange={skillsHandler}
            />
          </div>
          <div className="col-auto my-1">
            <button type="submit" className="btn btn-primary">
              post job
            </button>
          </div>
        </form>
      </div>

      <div>
        <div>
          {jobData.length > 0 &&
            jobData.map((data, index) => {
              return (
                <>
                  {
                    <div key={index} className="border mt-3">
                      <p>{data.jobTitle}</p>
                      <p>{data.description}</p>
                      <h3>{`Budget: ${data.budget}`}</h3>
                      <h3>{`Deadline: ${data.deadline}`}</h3>
                      <p>{`Skills: ${data.skills}`}</p>
                    </div>
                  }
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default JobPostingsScreen;
