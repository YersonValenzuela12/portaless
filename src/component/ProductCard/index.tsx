export default function ProductCard () {

return (
<div className="product-card">
    <div className="product-image">
     <img src="" alt="Nombre de producto" ></img>
    </div>

    <div className="product-information">
       <h3 className="text-lg front-bold mb-2">Nombre de producto</h3>
      <p className="text-2x1 font-bold">$120</p>

    </div>

</div>
);
}