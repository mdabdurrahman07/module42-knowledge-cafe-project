import PropTypes from 'prop-types';
import {  FaBookmark } from 'react-icons/fa';
const Blog = ({ blog ,  handBookMark }) => {
   const {cover, title, author_img, author, posted_date, reading_time, hashtags} = blog
    return (
        <div>
          <img className='w-full rounded-xl' src={cover} alt="" />
          {/* author section main div */}
          <div className='flex gap-5 items-center justify-between'>
            {/* author img and text main*/}
            <div className='flex justify-left items-center gap-5 my-4'>
              {/* pp */}
            <div>
              <img className='w-16' src={author_img} alt="" />
            </div>
             {/* pp */}
             {/* author names */}
             <div>
              <p>{author}</p>
              <p>{posted_date}</p>
             </div>
              {/* author names */}
            </div>
             {/* author img and text main*/}
             {/* reading time and bookmark icon */}
             <div className='flex items-center gap-2'>
              <p>{reading_time} min read</p>
              <button onClick={handBookMark}>
              <FaBookmark></FaBookmark>
              </button>
             </div>
                {/* reading time and bookmark icon */}
          </div>
            <h2 className='text-3xl font-semibold'>
              {title}
            </h2>
            <p className='my-4'>
              {
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
              }
            </p>
        </div>
    );
};
Blog.propTypes = {
  blog : PropTypes.object.isRequired
}
export default Blog;