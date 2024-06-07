'use client'

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import Cookies from "js-cookie";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Page = ({params})=>{
    const postid = params.postid

    const [selectedPost, setSelectedPost] = useState({})
    const [like, setLike] = useState(false)
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);


    useEffect(()=>{
        const token = Cookies.get('auth_token')
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/v1/posts/view/${postid}/`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(res.data.data['like'])
                setSelectedPost(res.data.data)
                setLike(selectedPost.like)
                setLikeCount(res.data.data['like'])
            }catch (error){
                console.error('Error fetching data',error)
            }
        }
        fetchData()
    },[])
    const likeFunction = () => {
        const token = Cookies.get('auth_token');
        const formData = new FormData ()
        if(liked==false){
            formData.append("action","like")
        }else if(liked==true){
            formData.append("action","unlike")
        }
        const fetchData = async () => {
            try {
                const res = await axios.post(`http://localhost:8000/api/v1/posts/view/like/${postid}/`, formData,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setLikeCount(res.data['newLikeCount'])
                // setLikeCount(res.data.likes); // assuming the response includes likes
                // setLiked(res.data.liked); // assuming the response includes whether the user has liked the post
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        fetchData();
    };

    return <div>
        <div className="wrapper">
                <div className="my-10 ">
                    <div className="mt-10">
                        <div>
                            <i></i>
                        </div>
                        <p className="text-2xl font-bold">created by : {selectedPost.created_by}</p>
                    </div>
                    <div className="my-4 flex justify-between">
                        
                        <div className="max-w-[70%]">
                            <h5 className="text-4xl">{selectedPost.title}</h5>
                        </div>
                        <div className="flex ">
                            <div className="w-10" onClick={()=>{
                                setLiked(!liked)
                                setLike(!like)
                                likeFunction()
                                }}>
                                <FontAwesomeIcon icon={faHeart}  className={`${like?'text-red-600':''} text-4xl`}/>
                                {/* <Image src={require('../../../../../public/images/heart.png')} alt="heart icon" className="cursor-pointer invert-0"  /> */}
                            </div>
                            <p className="text-4xl">{likeCount}</p>
                        </div>
                    </div>
                    <div className="max-w-[50%]">
                        <img src={selectedPost.featured_image} alt="asdf" className="w-full"/>
                    </div>
                    <div>
                        <p className="text-xl">{selectedPost.description}</p>
                    </div>
                    <div className="my-5">
                        <Link href={'/mainpage'} className="capitalize px-8 py-3 rounded-full font-semibold text-xl text-white bg-[#4587ef]">Back</Link>
                    </div>
                </div>
            </div>
    </div>
}

export default Page