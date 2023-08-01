import React from "react";
import { Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { userApi } from "../../userService";
import { useParams } from "react-router-dom";
import AppButton from "../../../../../../components/AppButton";
import AppForm from "../../../../../../components/AppForm";
import AppTextArea from "../../../../../../components/AppTextarea";
import axios from "axios";

function IndProblem() {
  const [output, setOutput] = useState("");
  const [queryProblem, { data: problem }] =
    userApi.endpoints.findProblemById.useLazyQuery();
  const { pid } = useParams();

  useEffect(() => {
    queryProblem(pid, false);
  }, []);

  async function onCreateSubmit(data) {
    console.log(data);
    try {
      axios
        .post("http://localhost:8080/v1/api/code/compile", {
          code: data.code,
          input: data.input,
        })
        .then((response) => {
          setOutput(response?.data?.metadata?.output);
          console.log(response?.data?.metadata);
        });
    } catch (error) {
      console.log("Error occurred during API call:", error);
    }
  }
  return (
    <div className="w-full h-full flex flex-row items-start bg-[#eceff1] ">
      <div className="flex flex-col gap-4 p-4 w-[50%]">
        <h3 className="text-2xl">{problem?.metadata?.title}</h3>
        <div>
          <Chip
            label={problem?.metadata?.difficulty}
            variant="outlined"
            style={{
              color: `${
                problem?.metadata?.difficulty === "Hard"
                  ? "red"
                  : problem?.metadata?.difficulty === "Medium"
                  ? "#d5b60a"
                  : "#006400"
              }`,
              borderColor: `${
                problem?.metadata?.difficulty === "Hard"
                  ? "red"
                  : problem?.metadata?.difficulty === "Medium"
                  ? "#d5b60a"
                  : "#006400"
              }`,
            }}
          />
        </div>
        <p className="">{problem?.metadata?.description}</p>
        <code>Input : {problem?.metadata?.exampleIn}</code>
        <code>Output : {problem?.metadata?.exampleOut}</code>
      </div>
      <div className="w-[50%] p-4">
        <h3 className="text-2xl">Code Here</h3>
        <div>
          <AppForm
            enctype="multipart/form-data"
            onSubmit={(data) => {
              onCreateSubmit(data);
            }}
          >
            <AppTextArea
              id="code"
              name="code"
              className="w-full h-[550px] bg-slate-100 p-4"
            ></AppTextArea>

            <AppTextArea id="input" name="input" />

            <AppButton
              variant="contained"
              color="success"
              type="submit"
              className="text-green-500"
            >
              Submit
            </AppButton>
            {output ? <h1 className="text-red-600">{output}</h1> : "Error Compile"}
          </AppForm>
        </div>
      </div>
    </div>
  );
}

export default IndProblem;
