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
      const handleMarkAsRead = (id, time) =>{
       const readingTime = ReadTime + time
       settime(readingTime)
       const remainingBookMark = bookmark.filter(book => book.id !== id)
       Setbookmark(remainingBookMark)
      }
  return (
    <>
    
     <Header></Header>
    <main className='md:flex max-w-screen-2xl gap-5 space-y-2 mx-auto'>
    <Blogs handleMarkAsRead={handleMarkAsRead} handBookMark={handBookMark} ></Blogs>
    <Bookmarks bookmark={bookmark} ReadTime={ReadTime} ></Bookmarks>
    </main>
    </>
  )
}

export default App
