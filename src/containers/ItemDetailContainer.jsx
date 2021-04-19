import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ItemCount from './../components/itemcount/index';
import ItemDetail from './../components/itemdetail/index';

const ItemDetailContainer = () =>{
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {

    const apiUrl = 'https://raw.githubusercontent.com/aptuno/code-challenge/master/challenges/data/properties.json';
     fetch(apiUrl)
       .then((res) => res.json())
       .then((data) => {
        //console.log(data.data);
        let product = {};
          if (typeof(id) !== 'undefined' && id != null) {
            product = data.data.find((el) => {
              return el.id=== parseInt(id)
            });
          }
          setItem(product);
       });

  }, [id]);

  return (

    <>

      <ItemDetail item={item}/>
    </>

  );
}

export default ItemDetailContainer;
