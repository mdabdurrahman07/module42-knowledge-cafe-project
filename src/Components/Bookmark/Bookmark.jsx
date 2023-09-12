import PropTypes from 'prop-types';

const Bookmark = ({bookmarkT}) => {
    const {title} = bookmarkT
    return (
        <div>
          <h1 className='text-xl text-center bg-slate-600 text-white p-5 border border-b-2 rounded-xl'>{title}</h1>  
        </div>
    );
};
Bookmark.propTypes = {
    bookmarkT: PropTypes.object.isRequired
}
export default Bookmark;