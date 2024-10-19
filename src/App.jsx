// import Imagedex from "./component/imagedex/imagedex.jsx"
import { Link } from 'react-router-dom'
import './App.css'
import CoustomRoutes from "./Routes/CoustomRoutes.jsx"
import Search from './component/search/search.jsx'

function App() {
  
  return(
  <div className="image-dex-wrapre">
   {/* <Imagedex/> */}
 
   <h1>

    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>ImageGalary</Link>
    </h1>

<Search/>
   <CoustomRoutes/>
  </div>
  )
}

export default App
