
export const getStaticPaths = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const paths = data.map((currelem) =>{
        return {
            params: {
                pageNo: currelem.id.toString(),
            },
        };
    });
    return{
        paths,
        fallback: false,
    };
    
};

export const getStaticProps = async (context)=>{
    const id = context.params.pageNo;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    return {
        props: {
            data,
        },
    };
};

const pageNo = ({data}) => {
  return (
    <div key={data.id}>
      <p>{data.body}</p>
    </div>
  )
}

export default pageNo;
