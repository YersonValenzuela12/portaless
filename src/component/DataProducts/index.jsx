 const data = [
 {
 id: 1,
img:'src/assets/destornilla.jpg',
nameProduct:'destornillador',
price: 80,
quantity:1,
} ,
{
    id: 2,
    img:'src/assets/Bocina.jpg',
    nameProduct:'bocina',
    price: 70,
    quantity:2,
    },
    {
    id: 3,
    img:'src/assets/Manual.jpg',
    nameProduct:'estacion',
    price: 80,
    quantity:3,
    },
]
const newdata ={
    id: 4,
    img:['src/assets/Manual.jpg'],
    nameProduct:'Estacion Manual',
    price: 80,
    quantity:3,
}
export const DataProducts  = () => {
   
        return (
            <div>
            <h1>Data Products</h1>
            
            <p> id:{data[0].id}</p>
            <img src={'src/assets/destornilla.jpg'} width='100' height='100' ></img>
            <p> nombre:{data[0].nameProduct}</p>
           <p>  precio:{data[0].price}</p>
           <p>cantidad:{data[0].quantity}</p>


           <h2>  Data Products</h2>

            <p>id :{JSON.stringify(data)}</p>
       
            <img src={'src/assets/Manual.jpg'} width='100' height='100' ></img>
            <p>nombre :{newdata.nameProduct}</p> 

            <p>precio :{newdata.price}</p>
            <p>cantidad :{newdata.quantity}</p> 
           
            </div>
        );
        
    
}

export default DataProducts;