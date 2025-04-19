
export default function header() {

    return (
<header>       
<h1>Tienda virtual</h1>

<div className="container-icon">
<div ><span id="contador-productos">[countProduct]</span>
</div>

<div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>{
    allProduct.length ? (
        <>
        <div className="row-product">
            {allProduct.map(product => (
                <div className="cart-product" key={product.id}>
                    <div className="info-cart-product">
<span className="cantidad-producto-carrito">{product.quantity}</span>
<p className="titulo-producto-carrito">${product.nameProduct}</p>
<span className='precio-producto-carrito'>${product.price}</span>
                    </div>

                </div>
            ))}
        </div>
      <div className="cart-total"><h3>Total:</h3><span className="total-pagar">${total}</span>
        </div>  
        <button className="btn-clear-all">vaciar carrito</button>
        </>
    ):(
<p className="cart-empty">El carrito esta vacido</p>
    )}
    </div>

</div>


</header>
)
    };
    