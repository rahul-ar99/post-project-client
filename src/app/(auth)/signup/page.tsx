'use client'
import { NextPage } from "next"
import { useState, FormEvent } from "react"
import axios from 'axios'
import { redirect } from 'next/navigation';



const LoginPage:NextPage = ()=>{
    const [userName, setUserName]:any = useState<string>('')
    const [jobRole, setJobRole] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = async (event:FormEvent) =>{
        event.preventDefault()

        const formData = new FormData ()
        formData.append("username",userName)
        formData.append("email",email)
        formData.append("password",password)
        formData.append("role",jobRole)

        try{
            const response = await axios.post('http://localhost:8000/api/v1/auth/create/', formData, {
                headers:{
                    'Content-Type':'multipart/form-data'
                },
            });
            setUserName('')
            setJobRole('default')
            setEmail('')
            setPassword('')
            // console.log(response.data)
            redirect('/login')
        }catch(error){
            console.log(error)
        }
    }

    return <>
    <div className="bg-gradient-to-r from-teal-400 to-blue-600 flex items-center justify-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign in</h2>
                <p className="mb-6 text-center text-gray-600">Sign in with your username and password</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 capitalize" htmlFor="username">
                            username
                        </label>

                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Username" 
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 capitalize" htmlFor="email">
                            email
                        </label>

                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email" 
                        value={email}
                         onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 capitalize" htmlFor="password">
                            password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Password" 
                        value={password}
                         onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 capitalize" htmlFor="username">
                            job-role
                        </label>
                        <select name="" id="job-role" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={jobRole}
                        onChange={(e)=>setJobRole(e.target.value)}

                        >
                            <option value="default" disabled selected>Choose job role</option>
                            <option value="ADMIN">Admin</option>
                            <option value="CUSTOMER">Customer</option>
                        </select>
                        {/* <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Username" /> */}
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
                            Signup
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">Already a member? <a className="text-blue-500 hover:text-blue-800" href="/login">Login here!</a></p>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default LoginPage