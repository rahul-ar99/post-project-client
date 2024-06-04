import Image from "next/image"
import Link from "next/link"

const SinglePost = ()=>{
    return(
        <div className="w-[24%] mr-3 border rounded-tr-2xl rounded-tl-2xl overflow-hidden bg-whtie">
                <Link href={'mainpage/singlepage'}>
                <div>
                    <Image src={require('../../public/images/image1.jpg')} alt="blogpost-image"/>
                </div>
                <div>
                    <p className="text-2xl line-clamp-1">Post Head la;ksdfj laksdfj ;alskdf jl;askdf jl;aksdf jlaskdf j;ldskj</p>
                    <p className="text-sm line-clamp-2">laskdf ;lsd flasdjfowe lsakdfjwpioe falsdkfjlekru alsdffkasdlkf ja;sli asl;dfkj</p>
                </div>
                <div className="my-5">
                    <div>
                        <div>
                            <i></i>
                        </div>
                        <p>created by : rahul</p>
                    </div>
                    <div>8 people like this</div>
                </div>
        </Link>
            </div>
    )
}

export default SinglePost