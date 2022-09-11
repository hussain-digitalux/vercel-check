import Link from "next/link";
const index = () => {
  return (
    <div>
      <nav className="flex bg-slate-400">
      <ul className="flex  flex-row bg-slate-400">
        <li className="text-blue-700">
          <Link href="/">Homee</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
      </nav>
      <style jsx>
        {`
          nav{
            display: flex;
            flex-direction: row;
            color: red;
          }
        `}
      </style>
    </div>
    
  )
}

export default index;