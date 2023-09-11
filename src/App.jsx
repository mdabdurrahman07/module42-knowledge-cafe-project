import { useState } from 'react';
import './App.css'
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';


function App() {
      const [bookmark , Setbookmark] = useState([])
      const [ReadTime , settime] = useState(0)

      const handBookMark = blogItems =>{
        const AllBookmarks = [...bookmark , blogItems]
        Setbookmark(AllBookmarks)
      }
      const handleMarkAsRead = time =>{
       const readingTime = ReadTime + time
       settime(readingTime)
      }
  return (
    <>
    
     <Header></Header>
    <main className='md:flex max-w-screen-xl mx-auto'>
    <Blogs handleMarkAsRead={handleMarkAsRead} handBookMark={handBookMark} ></Blogs>
    <Bookmarks bookmark={bookmark} ReadTime={ReadTime} ></Bookmarks>
    </main>
    </>
  )
}

export default App
