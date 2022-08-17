import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FiLock,
  FiLogIn,
  FiLogOut,
  FiPhone,
  FiX,
  FiXCircle,
  FiUser,
  FiUpload,
  FiUserCheck,
  FiUserPlus,
  FiUserX,
  FiThumbsUp,
  FiThumbsDown,
  FiToggleLeft,
  FiToggleRight,
  FiSun,
  FiShoppingCart,
  FiShoppingBag,
  FiSettings,
  FiSearch,
  FiMail,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import withSwal from "sweetalert2-react-content";

const api = `http://localhost:3000/`;
const Headers = {
  "Content-Type": "application/json",
};

const Swal = withSwal(swal);
export default function login() {
  const [provider, setProvider] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [isvalid, setIsvalid] = useState(false);

  useEffect(() => {
    axios
      .get(api + `providers`)
      .then((res) => setProvider(res.data.Response))
      .catch((er) => console.log(er));
  }, []);
  provider.length === 0 ? <div>loading...</div> : provider;
  const toasSuccess = () => {
    Swal.fire({
      title: "Success",
      text: "You have been logged in",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      position: "top-end",
      toast: true,
      timerProgressBar: true,
    });
  };

  const toasRegisterSuccess = () => {
    Swal.fire({
      title: "Success",
      text: "You have been registered",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
      position: "top-end",
      toast: true,
      timerProgressBar: true,
    });
  };

  const toasError = () => {
    Swal.fire({
      title: "Error",
      text: "username or password is incorrect",
      icon: "error",
      timer: 2000,
      position: "top-end",
      onOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
      toast: true,
      timerProgressBar: true,
    });
  };

  const signIn = async (username, password) => {
    const data = {
      username,
      password,
    };
    if (data.username === "" || data.password === "") {
      setIsvalid(false);
    } else if (data.password === "") {
      setIsvalid(false);
    } else {
      setIsvalid(true);
      return await axios
        .post(api + `providers/login`, data, {
          headers: Headers,
        })
        .then((res) => {
          username = res.data.Response.username = username;
          password = res.data.Response.password = password;
          // setMessage("logged successfully ");
          toasSuccess();
          setUsername("");
          setPassword("");
        })
        .catch((er) => {
          console.log(er);
          // setMessage("username or password is incorrect");
          toasError();
        });
    }
  };

  const handleChange_username = (e) => {
    setUsername(e.target.value);
  };
  const handleChange_password = (e) => {
    setPassword(e.target.value);
  };
  const signOut = () => {
    setProvider([]);
  };
  return (
    <div className="flex justify-center">
      <div className="container">
        {provider ? (
          <div
            className="overflow-hidden rounded-md 
            bg-white shadow-md my-5"
          >
            <div className="py-10 bg-slate-100">
              <h3 className="text-5xl font-extrabold text-gray-900">Sign in</h3>
            </div>
            <form className="pt-40 pb-10 ">
              <div className="grid justify-center">
                {isvalid ? (
                  <div
                    className="flex flex-row items-center border
                border-gray-200 outline-none
                 rounded-lg shadow-sm pl-2 py-1"
                  >
                    <FiUser className="text-gray-500" size={20} />
                    <input
                      className="py-1 px-3 border-none
                      outline-none bg-transparent
                  "
                      type="text"
                      name="username"
                      id="username"
                      onChange={handleChange_username}
                      value={username}
                      placeholder="username"
                    />
                  </div>
                ) : (
                  <div
                    className="flex flex-row items-center border
                  border-red-200 outline-none
                   rounded-lg shadow-sm pl-2 py-1"
                  >
                    <FiUser className="text-red-300" size={20} />
                    <input
                      className="py-1 px-3 border-none
                   outline-none bg-transparent
                    "
                      type="text"
                      name="username"
                      id="username"
                      onChange={handleChange_username}
                      value={username}
                      placeholder="username"
                    />
                  </div>
                )}
              </div>
              <div className="grid my-4 justify-center">
                {isvalid ? (
                  <div
                    className="flex flex-row items-center border
                   border-gray-200 outline-none
                    rounded-lg shadow-sm pl-2 py-1"
                  >
                    <FiLock className="text-gray-500" size={20} />
                    <input
                      className="py-1 px-3 border-none
                      outline-none bg-transparent
                  "
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChange_password}
                      value={password}
                      placeholder="password"
                    />
                  </div>
                ) : (
                  <div
                    className="flex flex-row items-center border
                  border-red-200 outline-none
                   rounded-lg shadow-sm pl-2 py-1"
                  >
                    <FiLock className="text-red-300" size={20} />
                    <input
                      className="py-1 px-3 border-none
                      outline-none bg-transparent
                    "
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                      onChange={handleChange_password}
                      value={password}
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-center align-bottom mt-10">
                <button
                  type="submit"
                  className="flex flex-row items-center justify-center gap-5 py-1 px-3 border border-gray-200 outline-none
                   rounded-md shadow-sm"
                  onClick={(e) => e.preventDefault(signIn(username, password))}
                >
                  submit
                  <FiLogIn />
                </button>
              </div>
              <div className="grid justify-center py-1 mt-5">
                {message ? (
                  <div className="text-red-500 text-left">{message}</div>
                ) : null}
              </div>
            </form>
          </div>
        ) : (
          <div className="Register">
            <h3>Register</h3>
          </div>
        )}
      </div>
    </div>
  );
}
