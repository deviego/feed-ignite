import { Header } from "./components/Header/Header"
import style from "./App.module.css"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/post/Post"
function App() {

  return(
    <>  
    <Header/>
    <div className={style.wrapper} >
    <Sidebar />
    <main>
      <Post/>
    </main>
    </div>
    
    </>
  )
}

export default App
