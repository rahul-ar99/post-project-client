import Header from "@/components/Header";
import Allpost from "@/components/Allposts";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Post App",
    description: "Post APP",
};

const Mainpage = ()=>{
    return(
        <div className="">
            <Allpost />
        </div>
    )
}

export default Mainpage;