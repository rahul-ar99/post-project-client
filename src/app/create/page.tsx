'use client'

import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";



const EditCategoryForm:React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [description, setDescription] = useState<String>('');
    const [title, setTitle] = useState<String>('');
    const [message, setMessage] = useState<String>('');


    // import image as state
    const handleFileChange = (event:any) => {
        setFile(event.target.files[0]);
    };


    const handleDescriptionChange = (event:any) => {
        setDescription(event.target.value);
    };


    const handleTitleChange = (event:any) => {
        setTitle(event.target.value);
    };


    const handleSubmit = async (event:any) => {
        event.preventDefault();

        const username = Cookies.get('username');
        const authToken = Cookies.get('auth_token');

        const formData = new FormData();
        formData.append('image', file);
        formData.append('description', description);
        formData.append('title', title);
        formData.append('created_by', username);

        try {
            const response = await axios.post('http://localhost:8000/api/v1/posts/create/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${authToken}`
                },
            });
            redirect('/mainpage')
            if (response.status === 201) {
                setMessage('Image successfully uploaded');
            } else {
                setMessage('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            setMessage('Error occurred during the upload');
        }
    };


    return (
        <div className="flex w-screen h-screen justify-center items-center  bg-gray-100 text-black">
            <div className="w-[60%] h-[70%]">
                {/* path */}
                <div>
                    <div>
                        <p className="text-xl text-gray-600">Posts {'>'} Create Post</p>
                    </div>
                </div>
                {/* head */}
                <form action="" onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-4xl font-bold my-2">Create Post</h3>
                        </div>
                        <div className="flex gap-3">
                            <Link  href={'/mainpage'}>
                                <button className="w-[140px] py-3 rounded-full font-semibold text-xl bg-white text-[#4587ef]">Cancel</button>
                            </Link>
                            <div>
                                <button className="w-[140px] py-3 rounded-full text-white font-semibold text-xl bg-[#4587ef]" type="submit">save</button>
                            </div>
                        </div>
                    </div>
                    {/* content */}
                    <div className="bg-white p-10 mt-5">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
                                Post Title
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-md"
                                id="title"
                                type="text"
                                placeholder="Yoga and Wellness"
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                                Category Description
                            </label>
                            <textarea
                                className="w-full px-3 py-2 border rounded-md h-32"
                                id="description"
                                placeholder="Contains posts about yoga, breathing techniques, meditation, exercise, mental wellbeing and more."
                                value={description}
                                onChange={handleDescriptionChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
                                Category Image (Optional)
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded-md"
                                id="image"
                                type="file"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
  );
};

export default EditCategoryForm;
