import { AuthRouteList } from "../container/auth/AuthRoute";
import { AppRouteList } from "../container/app/AppRoute";
import { authApi } from "../container/auth/feature/Auth/authService";
import { login, setUser } from "../container/auth/feature/Auth/authSlice";
import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [loginSuccess] = authApi.endpoints.oAuthLogin.useLazyQuery();

  useEffect(() => {
    const loginRequest = async () => {
      const response = await loginSuccess(null, false);
      if (!response?.error) {
        dispatch(setUser(response.data.metadata.user));
        dispatch(login());
      } else if (response) {
        console.log("response:: ", response);
        if (location.pathname !== "/signup") navigate("/login");
      }
    };
    loginRequest();
  }, []);

  const routes = [...AppRouteList, ...AuthRouteList];
  console.log("all routes rerender: ", [...routes]);
  return useRoutes([...routes]);
};

export const WebRoutes = memo(AppRoutes);
