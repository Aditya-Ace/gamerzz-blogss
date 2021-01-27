import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import BlogDetails from './BlogDetails';
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
          <Route path='/create' exact>
            <Create />
          </Route>
          <Route path='/blogs/:id' exact>
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
