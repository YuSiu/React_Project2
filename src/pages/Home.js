import { Layout } from 'antd';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import AppHeader from "../components/Header"
import AppFooter from "../components/Footer.js"
import ProductList from "../components/ProductList";
import { selectProducts } from "../redux/productsSlice";
const { Header, Content, Footer } = Layout;

function Home() {
  let products = useSelector(selectProducts);
  let title = "BBC";
  const { categoryName } = useParams();

  if(!!categoryName) {
    products = products.filter(
      product => product.category.toUpperCase() == categoryName.toUpperCase());
    if(products.length)
      title = products[0].category.toUpperCase();
  }

  return (
    <>
      <Header className="layout-header">
        <AppHeader title={title}/>
      </Header>
      <Layout className="container main-layout">
        <Content className="layout-content">
          <ProductList products={products}/>
        </Content>   
      </Layout>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>   
    </>
  );
}

export default Home;
