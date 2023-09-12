import './product.css';


const Product = ({ product }) => {

    console.log(product);

  return (
    <div className="p">
        <div className="p-browser">
            <div className="p-circle red"></div>
            <div className="p-circle green"></div>
            <div className="p-circle yellow"></div>
        </div>
        <a 
          href={product.link}
          target="_blank" 
          rel='noreferrer'
        >
            <img 
              src={product.img}
              alt="" 
              className="p-img"
            />
        </a>
    </div>
  )
}

export default Product
