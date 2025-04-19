import data from './component/data';
export default function ProductList () {

  console.log(data)
    return (
    <div className="container-item">
  { data.map(product => (
    <div className="item" key={product.id}>
         <figure>
            <img src={product.img} alt={product.nameProduct}></img>
            </figure>  
          <div className="info-product">
              <h2>{product.nameProduct}</h2>
              <p className="price">${product.price}</p>
              <button onClick={() => onAddProduct(product)}>
                Añadir al carrito</button>   
          </div>
    </div>
  ))}   
    </div>
    );
}
    