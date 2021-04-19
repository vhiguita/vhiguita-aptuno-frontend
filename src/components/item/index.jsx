import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './item.css';

const Item = (props) =>{
  const [isImagesDef, setIsImagesDef] = useState(false);
  const responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  }
  //console.log(props);
 const formatter = new Intl.NumberFormat('en-US', {
     style: 'currency',
     currency: 'USD',
     minimumFractionDigits: 0
  });
 useEffect(() => {
   //console.log(props.images);
   if (props.images) {
     setIsImagesDef(true);
     // props.images.map((value, index) => {
     //    console.log(value);
     //  });
   }else{
     setIsImagesDef(false);
   }
  }, []);
  return (

    <>
    <div className='card_'>
    {isImagesDef?<AliceCarousel autoPlay responsive={responsive} autoPlayInterval="3000">
     {props.images.map((value, index) => {
        return <img src={value} className="sliderimg" width="300" height="300"/>
      })}
      </AliceCarousel>:<></>}
     <h5 style={{textAlign: "center"}}>{props.title}</h5>
     <p><strong>Área:</strong> {props.area} metros cuadrados</p>
     <p><strong>Cuartos:</strong> {props.bedrooms}</p>
     <p><strong>Precio:</strong> {formatter.format(props.price)}</p>
     <Link to={`/item/${props.id}`}>
            <h4 style={{textAlign: "center"}}>Ver</h4>
      </Link>
     {/* <p>Precio: {formatter.format(props.price)}</p>*/}
    </div>


    </>

  );
}

export default Item;
