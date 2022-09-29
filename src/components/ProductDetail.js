import { Row, Col, Select } from "antd";

function ProductDetail({ product }) {
   return (
      <Row gutter={[32, 32]}>
         <Col xs={{ span: 20, offset: 2 }} lg={{ span: 6, offset: 2 }}>
            <img
               alt={product.name}
               className="product-image"
               src={product.image}
            />
         </Col>
         <Col xs={{ span: 20, offset: 2 }} lg={{ span: 14, offset: 0 }} >
            <div className="product-info--detail">
               <h2 className="product-category">
                  {product.category}
               </h2>
               <h1 className="product-name product-name--large">
                  {product.name}
               </h1>
               <p className="product-description">{product.description_long}</p>
            </div>
         </Col>
      </Row>
   );
}

export default ProductDetail;