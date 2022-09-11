import Link from "next/link";

export const getStaticProps = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
        props: {
            data,
        },
    };
};
const index = ({data}) => {
  return (
    
    <>
      <div className="main">
        {
            data.slice(0,5).map((curelem)=>{
                return (
                    <div className="title font-semibold" key={curelem.id}>
                        <p>{curelem.id} &nbsp;</p>
                        <Link href={`/blog/${curelem.id}`}><p>{curelem.title}</p></Link>
                    </div>
                )
            })
        }
      </div>
      <style>
        {`
           .main{
            background-color: yellow;
            
           }
           .title{
            display: flex; 
            font-weight: 700;
            margin: 2rem;
           }
        `}
      </style>
    </>
  )
}

export default index