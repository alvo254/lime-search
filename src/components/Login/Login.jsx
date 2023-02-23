
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "../../api/axios"
import "./Login.css"
import { useRef, useState, useEffect } from 'react';




export default function Login({setUser, user}) {


    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();



    const [form, setForm] = useState({
        email: "",
        password: ""
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form,[name]: value})
      };

  

    const handleSubmit = (e) => {
        e.preventDefault();
        // post user credentialas to login route

        fetch("/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              setUser(user);
            //   console.log(user);
              sessionStorage.setItem("user", JSON.stringify(user));
            navigate("/profileform");

            //   console.log(user);
              // alert(errors);
            });

          } else {
            res.json().then((error) => setErrors(error.errors));
          }
        });
      };



    return (
        <>
            {/* <Navbar /> */}
            <div className="login-container relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center">
                    <span className='quick'>Log</span><span className='fleet'>in</span>
                    </h1>
                {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}

                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                // ref={userRef}
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                // ref={userRef}
                                name='password'
                                onChange={handleChange}
                                value={form.password}
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                        </div>
                        <a
                            href=" "
                            className="text-xs text-blue-600"
                        >
                            Forget Password?
                        </a>
                        <div className="mt-6 buttons">
                            <button  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 login">
                                Login
                            </button>
                            {/* <p>Or</p>
                            <Link to={"/admin"} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md focus:outline-none text-center login">
                                Login as admin
                            </Link> */}
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Don't have an account?{" "}
                        <Link to='/Signup'>
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}