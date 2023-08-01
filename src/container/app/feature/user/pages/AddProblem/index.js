import { useAddProblemMutation } from "../../userService";
import AppForm from "../../../../../../components/AppForm";
import AppInput from "../../../../../../components/AppInput";
import AppButton from "../../../../../../components/AppButton";
import AppTextArea from "../../../../../../components/AppTextarea";

function AddProblem() {
  const [addProblem, { isLoading: isAddingProblem }] = useAddProblemMutation();

  async function onCreateNewProblem(data) {
    const flatData = {
      title: "",
      difficulty: "",
      acceptance: "",
      description: "",
      exampleIn: "",
      exampleOut: "",
    };
    flatData.title = data.title;
    flatData.difficulty = data.difficulty;
    flatData.description = data.description;
    flatData.exampleIn = data.exampleIn;
    flatData.exampleOut = data.exampleOut;

    const response = await addProblem(flatData);
    if (response.error) {
      console.error(response.error?.data?.message);
    } else {
      console.log("success!");
    }
    // console.log(flatData)
  }
  return (
    <div>
      <AppForm
        enctype="multipart/form-data"
        onSubmit={(data) => {
          onCreateNewProblem(data);
        }}
      >
        <div>
          <AppInput id="title" name="title" required label="Tên bài toán" />
          <AppInput id="difficulty" name="difficulty" required label="Độ khó" />
          <AppTextArea
            id="description"
            name="description"
            required
            label="Miêu tả chi tiết"
          />
          <AppInput id="exampleIn" name="exampleIn" required label="Input" />
          <AppInput id="exampleOut" name="exampleOut" required label="Output" />
        </div>
        <AppButton
          isLoading={isAddingProblem}
          type="submit"
          className="text-red-500"
        >
          Thêm
        </AppButton>
      </AppForm>
    </div>
  );
}

export default AddProblem;
