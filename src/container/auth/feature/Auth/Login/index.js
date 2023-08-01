import AppButton from "../../../../../components/AppButton";
import AppForm from "../../../../../components/AppForm";
import AppInput from "../../../../../components/AppInput";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import * as yup from "yup";
import { useLoginMutation } from "../authService";
import { login, setUser } from "../authSlice";
import { Link } from "react-router-dom";

function Login() {
  const [loginRequest, { isLoading }] = useLoginMutation();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginForm = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(32).required(),
  });

  useEffect(() => {
    console.log(auth.isLoggedIn);
    if (auth.isLoggedIn) {
      console.log("navigate");
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isLoggedIn]);

  const onSubmit = async (loginData) => {
    const response = await loginRequest(loginData);
    console.log("response: ", response);
    if (!response.error) {
      dispatch(setUser(response.data.metadata.user));
      dispatch(login());
    } else {
      console.log("error");
    }
  };

  return (
    <div className="container mx-auto lg:px-16 md:px-10 my-6">
      <h3 className="bold text-start text-2xl text-neutral-600">Đăng nhập</h3>
      <div className="px-14 py-8 bg-white shadow-md shadow-neutral-200 rounded-md mt-4">
        <AppForm
          resolver={loginForm}
          className="grid grid-cols-12 gap-14 h-auto w-full rounded-lg"
          onSubmit={onSubmit}
        >
          <div className="col-span-6 ">
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
              placeholder="Password"
              name="password"
              label="Password"
              required
              showIcon
            />
            <AppButton
              disabled={isLoading}
              className="w-full my-4 text-green-500"
              formNoValidate
              type="submit"
            >
              {!isLoading ? "Login" : <BeatLoader size={12} color="red" />}
            </AppButton>
          </div>
        </AppForm>
        <div className="text-sm">
          Chưa có tài khoản?{" "}
          <Link className="font-medium" to="/signup">
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
