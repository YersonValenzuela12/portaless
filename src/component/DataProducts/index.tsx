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
            <h1>Servicios </h1>
            
            <p> id:{data[0].id}</p>
            <img src={'src/assets/destornilla.jpg'} width='300' height='300' ></img>
            <p> nombre:{data[0].nameProduct}</p>
   

        
            <img src={'src/assets/Bocina.jpg'} width='300' height='300' ></img>
            <p> nombre:{data[1].nameProduct}</p>

           
            <p>id :{JSON.stringify(data)}</p>
       
       <img src={'src/assets/Manual.jpg'} width='300' height='300' ></img>
       <p>nombre :{newdata.nameProduct}</p> 
      
            </div>
        );
        
    
}

export default DataProducts;