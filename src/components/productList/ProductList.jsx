import Product from '../product/Product';
import './productlist.css';
import { products } from '../../data';


const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Create & Inspire. It's Hopago</h1>
            <div className="pl-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, tempora.
                Lorem ipsum dolor sit amet.
            </div>
        </div>
        <div className="pl-list">
          {products.map(data => (
            <Product product={data} key={data.id} />
          ))}
        </div>
    </div>
  )
}

export default ProductList
