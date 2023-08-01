import customerApi from "../../userService";
import { useNavigate } from "react-router";

function AdminRegister() {
  const navigate = useNavigate();
  const [register, { isLoading }] =
    customerApi.endpoints.adminRegister.useMutation();

  return <div></div>;
}
