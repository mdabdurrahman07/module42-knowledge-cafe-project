import './App.css'
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';


function App() {

  return (
    <>
    
     <Header></Header>
    <main className='md:flex max-w-screen-xl mx-auto'>
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
    </main>
    </>
  )
}

export default App
