import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";



export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  
  return (
    <>
    <div className="bg-green-400 w-[600px]  absolute left-[50%] translate-x-[-50%]">
      
      <Slider {...settings}
      >
          
           <div className="flex">
             <h3>5</h3>
           </div>
           <div className="flex">
             <h3>6</h3>
           </div>
      </Slider>
    </div>
  </>  
  )
}
