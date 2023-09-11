import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handBookMark , handleMarkAsRead}) => {
  const [blogs, Setblogs] = useState([])

  useEffect( () => {
    fetch('blogs-items.json')
    .then(res => res.json())
    .then(data => Setblogs(data)) 
  }, [])
    return (
        <div className='md:w-2/3'>
            <h1 className="text-3xl font-medium">Blogs : {blogs.length} </h1>
            <div>
              {
                blogs.map(blogsAll => <Blog
                  key={blogsAll.id}
                  blog={blogsAll}
                  handBookMark={handBookMark}
                  handleMarkAsRead={handleMarkAsRead}> 
                   </Blog>)
              }
            </div>
        </div>
    );
};
Blogs.propTypes = {
  handBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired

}
export default Blogs;