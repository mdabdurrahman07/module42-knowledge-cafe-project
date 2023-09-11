import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handBookMark}) => {
  const [blogs, Setblogs] = useState([])

  useEffect( () => {
    fetch('blogs-items.json')
    .then(res => res.json())
    .then(data => Setblogs(data)) 
  }, [])
    return (
        <div className='md:w-2/3'>
            <h1>Blogs : {blogs.length} </h1>
            <div>
              {
                blogs.map(blogsAll => <Blog
                  key={blogsAll.id}
                  blog={blogsAll}
                  handBookMark={handBookMark}> 
                   </Blog>)
              }
            </div>
        </div>
    );
};

export default Blogs;