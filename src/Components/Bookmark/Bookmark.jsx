import PropTypes from 'prop-types';

const Bookmark = ({bookmarkT}) => {
    const {title} = bookmarkT
    return (
        <div>
          <h1>{title}</h1>  
        </div>
    );
};
Bookmark.propTypes = {
    bookmarkT: PropTypes.object.isRequired
}
export default Bookmark;