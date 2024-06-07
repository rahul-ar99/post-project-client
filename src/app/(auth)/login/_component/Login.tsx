'use client'

import { NextPage } from "next";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";



const Login:NextPage = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setError("")
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/token/', {
                username: username,
                password: password
            });
            console.log(response)
            if (response.status === 200) {
                const token = response.data.access;
                try{
                    const res = await axios.post('http://127.0.0.1:8000/api/v1/auth/profile/', {
                        username: username
                    });
                    Cookies.set("user_detials",JSON.stringify(res.data.data))
                    Cookies.set("username",`${res.data.data.username}`)
                    Cookies.set("jobRole",`${res.data.data.role}`)
                    // Cookies.set("user_detials",`${res.data['role']}`)
                    // Cookies.set("user_detials",`${res.data['username']}`)
                }catch(error){
                    console.log("user details error")
                }
                Cookies.set('auth_token', token, { secure: true, sameSite: 'Strict' });
                console.log(token)
                window.location.href = '/mainpage';
            } else {
                setError('Login failed. Please try again.');
            }
        } catch (error) {
            setError('Login error. Please check your credentials and try again.');
        }
    };


    return <>
    <div className="bg-gradient-to-r from-teal-400 to-blue-600 flex items-center justify-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Log in</h2>
                <p className="mb-6 text-center text-gray-600">Sign in with your username and password</p>
                <p className="text-red-700">{error}</p>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            username
                        </label>

                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Username" 
                             value={username}
                             onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"         placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <input className="mr-2 leading-tight" type="checkbox" id="remember-me" />
                            <label className="text-sm text-gray-700" htmlFor="remember-me">
                                Remember me
                            </label>
                        </div>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="mb-6">
                        <button className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">Not a member? <a className="text-blue-500 hover:text-blue-800" href="/signup">Register here!</a></p>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Login