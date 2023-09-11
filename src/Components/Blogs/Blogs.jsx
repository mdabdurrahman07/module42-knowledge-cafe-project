import { useEffect, useState } from "react";


const Blogs = () => {
  const [blogs, Setblogs] = useState([])

  useEffect( () => {
    fetch('blogs-items.json')
    .then(res => res.json())
    .then(data => Setblogs(data)) 
  }, [])
    return (
        <div className='md:w-2/3'>
            <h1>Blogs : {blogs.length} </h1>
        </div>
    );
};

export default Blogs;