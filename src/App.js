import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import store from './redux/store';
import Drawer from './components/Layout';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  container: {
  }
})

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div className={classes.container}>
        <Drawer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<Home />} />
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
