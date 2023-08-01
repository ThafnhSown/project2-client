import { useState } from "react";
import AppTextArea from "../../../../../../components/AppTextarea";
import AppButton from "../../../../../../components/AppButton";
import AppForm from "../../../../../../components/AppForm";
import axios from "axios";

function HomePage() {
  const [output, setOutput] = useState("");

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
    <div className="">
      <AppForm
        enctype="multipart/form-data"
        onSubmit={(data) => {
          onCreateSubmit(data);
        }}
      >
        <div className="flex flex-row space-x-4 items-start px-4 py-4">
          <h1>CODE HERE</h1>
          <div className="flex flex-col w-full h-full justify-start items-end">
            <AppTextArea id="code" name="code" rows="30" />
          </div>
    
          <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
            <h2>Input:</h2>
            <div className="flex flex-col items-end">
              <AppTextArea id="input" name="input" rows="10" />
            </div>
            <div>
              <h2>Output:</h2>
              {output ? <h1 className="text-red-600">{output}</h1> : null}
            </div>
          </div>
        </div> 

        <AppButton type="submit" className="text-green-500">
          Compile
        </AppButton>

      </AppForm>
     
    </div>
  );
}

export default HomePage;
