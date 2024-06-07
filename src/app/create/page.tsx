import CreatePageForm from "./_component/CreatePage"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Post Page",
    description: "Post APP",
};
  

const CreatePage = ()=>{
    return (<CreatePageForm />)
}

export default CreatePage