import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';


function App() {
      const [bookmark , Setbookmark] = useState([])

      const handBookMark = blogItems =>{
        console.log('Bookmark Added')
      }
  return (
    <>
    
     <Header></Header>
    <main className='md:flex max-w-screen-xl mx-auto'>
    <Blogs handBookMark={handBookMark} ></Blogs>
    <Bookmarks></Bookmarks>
    </main>
    </>
  )
}

export default App
