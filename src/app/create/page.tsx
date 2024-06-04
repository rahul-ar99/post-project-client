'use client'
import Link from "next/link";



const EditCategoryForm = () => {


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
                <form action="">
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-4xl font-bold my-2">Create Post</h3>
                    </div>
                    <div className="flex gap-3">
                        <Link  href={'/mainpage'}>
                            <button className="w-[140px] py-3 rounded-full font-semibold text-xl bg-white text-[#4587ef]">Cancel</button>
                        </Link>
                        <div>
                            <button className="w-[140px] py-3 rounded-full text-white font-semibold text-xl bg-[#4587ef]">save</button>
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
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
  );
};

export default EditCategoryForm;
