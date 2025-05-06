import { Link } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const datos=[
  {
    image:'src/assets/sl1.jpg',
    title:'trabajando',
  },
  {
    image:'src/assets/sl2.jpg',
    title:'en la escalera',
  }
]
export default function Slaider() {
  let settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:5000,
    cssEase:"linear",
    
  }
  return (
    <div className='h-screen bg-slate-600 pt-100'>

    <div className='w-1/1 m-auto border none '>
    <Slider {...settings}>
      {
        datos.map((item,index)=>{
          return(
            <div key={index} className='bg-white'>
              <div>
                <img src={item.image} className='w-280 h-235 object-contain block m-auto '/>
              </div>

              <div className='p-60 bg-blue-600'>
                <p className='font-semibold text-white text-center'>{item.title}</p>
              </div>
            </div>
          )
        })
      }
    </Slider>
    </div>
  </div>
  );
}