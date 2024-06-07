import SinglePost from "./SinglePost"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Signup",
    description: "Post APP",
};

const Allpost = ()=>{
    return(
        <div>
            <div className="wrapper">
                <div className="w-full flex flex-wrap gap-y-4 py-10">
                    {/* <p>all post</p> */}
                    <SinglePost />
                    {/* <SinglePost /> */}
                    {/* <SinglePost /> */}
                    {/* <SinglePost /> */}
                    {/* <SinglePost /> */}
                    {/* <SinglePost /> */}
                </div>
            </div>
        </div>
    )
}

export default Allpost