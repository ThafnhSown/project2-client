import AppButton from "../../../../../components/AppButton";
import AppForm from "../../../../../components/AppForm";
import AppInput from "../../../../../components/AppInput";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { useSignupMutation } from "../authService";
import { login, setUser } from "../authSlice";

function Signup() {
  const [signup, { isLoading }] = useSignupMutation();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isLoggedIn]);

  const onSubmit = async (data) => {
    const response = await signup(data);
    if (!response.error) {
      dispatch(setUser(response.data.metadata.user));
      dispatch(login());
    } else {
      console.log("error");
    }
  };

  return (
    <div className="container mx-auto px-10 my-6">
      <h3 className="bold text-start text-2xl text-neutral-600">Đăng ký</h3>

      <div className="px-14 py-8 bg-white shadow-md shadow-neutral-200 rounded-md mt-4">
        <AppForm
          className="grid grid-cols-12 gap-14 h-auto w-full rounded-lg"
          onSubmit={onSubmit}
        >
          <div className="col-span-6 ">
            <AppInput id="name" name="name" required label="Họ và tên" />
            <AppInput
              type="email"
              placeholder="Email"
              name="email"
              label="Email"
              required
              className="mb-2"
            />
            <AppInput
              type="password"
              placeholder="Mật khẩu"
              name="password"
              label="Mật khẩu"
              required
              showIcon
            />
          </div>
          <div className="col-span-6 ">
            <AppButton
              disabled={isLoading}
              className="mt-6 w-full text-green-500"
              formNoValidate
              type="submit"
            >
              {!isLoading ? "Submit" : <BeatLoader size={12} color="#ff4d00" />}
            </AppButton>
          </div>
        </AppForm>
        <div className="text-sm">
          Đã có tài khoản?{" "}
          <Link className="font-medium" to="/login">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
