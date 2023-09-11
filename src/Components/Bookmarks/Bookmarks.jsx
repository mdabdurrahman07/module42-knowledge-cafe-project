import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmark, ReadTime}) => {
    return (
        <div className='md:w-1/3'>
            <div>
                <h1>Reading Time {ReadTime}</h1>
            </div>
            <h1 className="text-3xl font-medium">Bookmarked Blogs:{bookmark.length}</h1>
            {
                bookmark.map(book => <Bookmark key={book.id} bookmarkT={book}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmark: PropTypes.array.isRequired,
    ReadTime: PropTypes.number
    
}
export default Bookmarks;