import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    // console.log(data);
    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const jsonData = await res.json();
      console.log(jsonData);
    } catch (error) {
      console.log("Error in the signup page", error);
    }
  };
  return (
    <>
      <div className="bg-[#eceff1] w-full h-[80vh] flex flex-row items-center justify-center">
        <div className="w-[30%] h-[500px] bg-white flex flex-col items-center">
          <div className="mt-[2rem]">
            <img
              src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
              alt="leetcode logo"
            />
          </div>

          <div className="w-[80%] flex flex-col items-center gap-4 mt-8">
            <TextField
              placeholder="Email"
              variant="outlined"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              placeholder="Password"
              variant="outlined"
              fullWidth
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#3B4B52",
              }}
              fullWidth
              onClick={() => handleSubmit()}
            >
              Sign Up
            </Button>
          </div>
          <Link to="/login">
            <p className="text-sm mt-2">Already signed up?, log in here</p>
          </Link>
        </div>
      </div>
    </>
  );
}
