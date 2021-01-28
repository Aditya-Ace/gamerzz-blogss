import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='content'>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
