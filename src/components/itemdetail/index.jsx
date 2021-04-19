import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemdetail.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const ItemDetail = ({item}) =>{
  const [isImagesDef, setIsImagesDef] = useState(false);
  const responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  }
  useEffect(() => {
    if (item.images) {
      setIsImagesDef(true);
    }else{
      setIsImagesDef(false);
    }
  }, [item]);

  const formatter = new Intl.NumberFormat('en-US', {
     style: 'currency',
     currency: 'USD',
     minimumFractionDigits: 0
  });
  try{

    return (

      <>

      <div className='_card'>
      {isImagesDef?<AliceCarousel autoPlay responsive={responsive} autoPlayInterval="3000">
       {item.images.map((value, index) => {
          return <img src={value} className="sliderimg" width="300" height="300"/>
        })}
      </AliceCarousel>:<></>}
      <h5 style={{textAlign: "center"}}>{item.title}</h5>
      <p><strong>Área:</strong> {item.area} metros cuadrados</p>
      <p><strong>Cuartos:</strong> {item.bedrooms}</p>
      <p><strong>Baños:</strong> {item.bathrooms}</p>
      <p><strong>Precio:</strong> {formatter.format(item.pricing.administrativeFee+item.pricing.rentalPrice)}</p>
      </div>

      </>
    );

 } catch(e){
    return (

      <>

      </>
    );
  }
}

export default ItemDetail;
