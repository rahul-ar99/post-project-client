'use client'

import Link from "next/link"
import Cookies from "js-cookie";
import { useEffect, useState } from "react";


const Header =()=>{
    
    const [userRole, setUserRole] = useState<string>('')

    function logout() {
        Cookies.remove('auth_token');
        Cookies.remove('jobRole')
        Cookies.remove('username')
        Cookies.remove('user_detials')
        console.log('logout function')
        window.location.href = '/mainpage';
    }

    useEffect(()=>{
        const user_data = Cookies.get('jobRole')
        // const user_data1 = JSON.parse(user_data)
        setUserRole(Cookies.get('jobRole'))
        console.log(userRole)
    })

      
    return(
        <div className="bg-white  mt-10">
            <div className="wrapper ">
                <div className="flex justify-between py-4">
                    <div>
                        <h1 ><a href="#" className="text-5xl font-bold">Posts</a></h1>
                    </div>
                    <div className="flex gap-4">
                    {
                        (userRole=="ADMIN")?<div>
                            <button className="capitalize px-8 py-3 rounded-full font-semibold text-xl text-white bg-[#4587ef]"><Link href={'/create'}>create post</Link></button>
                        </div>:<></>
                        }
                        <div>
                            <button className="capitalize px-8 py-3 rounded-full font-semibold text-xl text-white bg-[#4587ef]" onClick={logout}>Log out</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header