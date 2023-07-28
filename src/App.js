import IndexAirbnb from './IndexAirbnb';
import {
   BrowserRouter,
   Routes,
   Route
 } from 'react-router-dom';
 import NotFoundPage from './Cant_FindthePageYouNeed/Cant_FindPage.js'
 import Sitemaps from './sitemaps/Sitemaps.js'
function App(){
  return (
  <>
  <BrowserRouter>
  <Routes>
    {/* Main the page */}
    <Route   path='/' element={<IndexAirbnb/>}/>
    <Route   path='/sitemaps/v2/*' element={<Sitemaps/>}/>


    {/*  can't find the page */}
    <Route   path='*' element={<NotFoundPage/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}
export default App