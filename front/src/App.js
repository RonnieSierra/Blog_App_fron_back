import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Formulario from './components/Formulario';
import ListaPosts from './components/ListaPosts';


import Post from './components/Post';

function App() {
  
  return (
    <BrowserRouter>
      
      <div className="App container mt-5">
      <Menu />
      <Route path="/" exact render={() => <h1>Ejercicio final - Blog</h1>} />
        
      <Switch>
          <Route path="/" exact component={Home} />
          
          <Route path="/formulario">
            <Formulario />
          </Route>
          
          <Route path="/detalles/publicacion">
            <Post/>
          </Route>
          <Route path="/detalles">
            <Post />
          </Route>
          <Route path="/post" component={ListaPosts} />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
        
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
