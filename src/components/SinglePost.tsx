'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cookies from "js-cookie";

import axios from 'axios';

const SinglePost = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const token = Cookies.get('auth_token')
        const fetchData = async () => {
            try {
                const res = await axios.post('http://localhost:8000/api/v1/posts/',{}, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(res.data);
                setPosts(res.data.data)
                console.log(res.data.data)
                
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        
        setTimeout(()=>{
            console.log(posts)
            },1000)
        fetchData();
    },[]);



    useEffect(()=>{
        console.log(posts)
    })

    return (
        <div className="posts-container w-full flex flex-wrap gap-y-8">
        {posts.length > 0 ? (
            posts.map((post) => (
            <div key={post.id} className="w-[24%] mr-3 border rounded-tr-2xl rounded-tl-2xl overflow-hidden bg-white">
                <Link href={`/mainpage/singlepage/${post.id}`}>
                <div className='w-full h-[250px] overflow-x-hidden'>
                    <img src={post.featured_image}alt="blogpost-image" className='w-full h-full'/>
                </div>
                <div className="px-4 py-2">
                    <div>
                        <p className="text-2xl line-clamp-1">{post.title}</p>
                    </div>
                    <div className="my-5">
                        <div>
                            <i></i>
                        </div>
                        <div>
                            <p>author: {post.created_by}</p>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
            ))
        ) : (
            <p>No posts available</p>
        )}
        </div>
    );
};

export default SinglePost;
