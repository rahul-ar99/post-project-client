'use client'

import Link from "next/link"
import Cookies from "js-cookie";


const Header =()=>{

    function logout() {
        Cookies.remove('auth_token');
        console.log('logout function')
        window.location.href = '/mainpage';
      }
      
    return(
        <div className="bg-white  mt-10">
            <div className="wrapper ">
                <div className="flex justify-between py-4">
                    <div>
                        <h1 ><a href="#" className="text-5xl font-bold">Posts</a></h1>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <button className="capitalize px-8 py-3 rounded-full font-semibold text-xl text-white bg-[#4587ef]"><Link href={'/create'}>create post</Link></button>
                        </div>
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