// import { Button, MenuItem, Select } from "@mui/material";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { useGetAllProblemsQuery } from "../../userService";

function Problems() {
  const { data: problems } = useGetAllProblemsQuery();
  // const [problems, setProblems] = useState([]);
  // const [difficultyFilter, setDifficultyFilter] = useState("");
  // const getProblems = async () => {
  //   try {
  //     const res = await fetch("http://localhost:8080/v1/api/problem/all");
  //     setProblems(res?.metadata);
  //     console.log(res)
  //   } catch (error) {
  //     console.log("Error in the problems page", error);
  //   }
  // };

  // const getFilterProblems = async (difficulty) => {
  //   const payload = { difficulty: difficulty };
  //   const queryParams = new URLSearchParams(payload).toString();
  //   try {
  //     const res = await fetch(
  //       `http://localhost:3000/filterproblems?${queryParams}`
  //     );

  //     const data = await res.json();
  //     // setProblems(data.problems);
  //   } catch (error) {
  //     console.log("This is the log from the filter problems ", error);
  //   }
  // };

  // const handleFilter = () => {
  //   console.log("This is the value of the filter", difficultyFilter);
  //   getFilterProblems(difficultyFilter);
  // };

  // useEffect(() => {
  //   getProblems();
  // }, []);
  // const { data: problems } = useGetAllProblemsQuery()
  return (
    <div className=" w-full flex flex-col items-center ">
      <div className="w-[60%] flex flex-row items-center justify-end gap-4 mt-4">
        {/* <Select
          onChange={(e) => setDifficultyFilter(e.target.value)}
          value={difficultyFilter}
          label="Difficulty"
          size="small"
          style={{
            width: "150px",
          }}
        >
          <MenuItem value={"Easy"}>Easy</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Hard"}>Hard</MenuItem>
        </Select> */}
        {/* <Button
          variant="outlined"
          style={{
            backgroundColor: "#3B4B52",
            color: "white",
          }}
          onClick={() => handleFilter()}
        >
          Apply
        </Button> */}
      </div>
      <div className="w-[60%] mt-[2rem] bg-[#eceff1]">
        <div className="grid grid-cols-4 w-full items-center justify-center p-4">
          <div className="">Sr No.</div>
          <div className="">Title</div>
          <div>Acceptance</div>
          <div>Difficulty</div>
        </div>

        {problems?.metadata?.map((prob) => (
          <div
            className="grid grid-cols-4 w-full items-center justify-center py-6 hover:bg-slate-50 p-4"
            key={prob?._id}
          >
            <div className="">{prob?._id}</div>
            <Link to={`/problem/${prob?._id}`}>
              <div className="hover:text-gray-600">{prob?.title}</div>
            </Link>
            <div>{prob?.acceptance}</div>
            <div
              className={`${
                prob.difficulty === "Hard"
                  ? "text-red-600"
                  : prob.difficulty === "Medium"
                  ? "text-yellow-400"
                  : "text-green-700"
              }`}
            >
              {prob?.difficulty}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Problems;
