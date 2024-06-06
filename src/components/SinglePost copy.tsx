'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cookies from "js-cookie";

import axios from 'axios';

const SinglePost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = Cookies.get('auth_token')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post('http://localhost:8000/api/v1/posts/', null, {
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

    fetchData();
  }, [token]);



  useEffect(()=>{
    console.log(posts)
  })

  return (
    <div className="posts-container">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="w-[24%] mr-3 border rounded-tr-2xl rounded-tl-2xl overflow-hidden bg-white">
            <Link href={`/mainpage/singlepage/${post.id}`}>
              <div>
                <img src={post.featured_image}alt="blogpost-image" w/>
              </div>
              <div>
                <p className="text-2xl line-clamp-1">{post.title}</p>
                <p className="text-sm line-clamp-2">{post.description}</p>
              </div>
              <div className="my-5">
                <div>
                  <i></i>
                </div>
                <div>
                  <p>created by: {post.author}</p>
                </div>
                <div>{post.likes} people like this</div>
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
