import React, { useState, useEffect } from 'react';
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from '../item/index';
import './itemlist.css';

const ItemList = ({products}) =>{
  //console.log(products);

  const todosPerPage = 12;
  const [ activePage, setCurrentPage ] = useState( 1 );
  // Logic for displaying current todos
  const indexOfLastTodo  = activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos     = products.slice( indexOfFirstTodo, indexOfLastTodo );
  const handlePageChange = ( pageNumber ) => {
      console.log( `active page is ${ pageNumber }` );
      setCurrentPage( pageNumber )
   };
   const renderTodos = currentTodos.map( ( product, index ) => {
      //console.log(product);
      return <li><Item key={product.id} id={product.id} title={product.title} price={product.pricing.administrativeFee+product.pricing.rentalPrice} images={product.images} area={product.area} bedrooms={product.bedrooms}/></li>;
   } );


  return (
    <>
    <div className="pagination">
         <Pagination
            activePage={ activePage }
            itemsCountPerPage={ 12 }
            totalItemsCount={ products.length }
            pageRangeDisplayed={ 12 }
            onChange={ handlePageChange }
         />
    </div>
      <div className="result">
        <ul>
          { renderTodos }
        </ul>
      </div>
    </>

  );
}

export default ItemList;
