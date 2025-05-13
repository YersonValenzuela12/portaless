
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slider2 from "react-slick";

const datos=[
  {
    image:'src/assets/sl1.jpg',
    title:'Mantenimiento de cctv',
  },
  {
    image:'src/assets/sl2.jpg',
    title:'Mantenimiento de camaras',
  }
]
const dato2=[
  {
    image:'src/assets/detector.jpg',
    title:'Mantenimiento de detector',
  },
  {
    image:'src/assets/midiendo.jpg',
    title:'Midiendo voltaje de cctv',
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
export  function Slaider2() {
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
    <Slider2 {...settings}>
      {
        dato2.map((item,index)=>{
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
    </Slider2>
    </div>
  </div>
  );
}