import Link from "next/link";
import { useEffect } from "react";
import Router from "next/router";

const Error = () => {
    const router = Router;
    useEffect(() => {
      setTimeout(()=>{
        router.push("/")
      },2000)
    }, [])
    
  return (
    <div>
        <p>404 error</p>
        <Link href="/"><button>go to home</button></Link>
    </div>
  )
}

export default Error;