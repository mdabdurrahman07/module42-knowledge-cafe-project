import ProfilePic from '../../../images/profile.png'
const Header = () => {
    return (
        <div className="p-5 shadow-xl flex justify-between items-center max-w-screen-xl m-auto">
           <h1 className="text-4xl text-left bg-white text-black font-bold">Knowledge Cafe</h1> 
           <img src={ProfilePic} alt="" />
        </div>
    );
};

export default Header;