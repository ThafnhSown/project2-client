import { USER_ROLE } from "../../constant/index";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
function Header() {
  const auth = useSelector((state) => state.auth);
  const userInfo = useSelector((state) => state.auth.user);
  return (
    <div>
      <div>
        {auth.isLoggedIn ? null : (
          <Fragment>
            <Link to="/signup">Đăng ký</Link>
            <Link to="/login">Đăng nhập</Link>
          </Fragment>
        )}
        {userInfo?.roles?.includes(USER_ROLE.ADMIN) ? (
          <Link to="/admin/add">Add Problem</Link>
        ) : (
          <Link to="/user/register">none</Link>
        )}
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
