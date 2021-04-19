import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ItemCount from './../components/itemcount/index';
import ItemList from './../components/itemlist/index';
import './itemListContainer.css';

const ItemListContainer = ({greeting}) =>{
  const [products, setProducts] = useState([]);
  const [aProducts, setAProducts] = useState([]);
  const [regions, setRegions] = useState([]);
  const [numCuartos, setNumCuartos] = useState("");
  const [rg, setRg] = useState("");
  const [chk1, setChk1] = useState(false);
  const [chk2, setChk2] = useState(false);
  const [chk3, setChk3] = useState(false);
  const [chk4, setChk4] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  //const dbContextUse = useContext(dbContext);
  //const { prods } = useContext(dbContext);
  function selectRegion(e){
    setChk1(false);
    setChk2(false);
    setChk3(false);
    setChk4(false);

    console.log(e.target.value);
    setRg(e.target.value);
    setIsFilter(true);
    if(e.target.value===""){

      const apiUrl = 'https://raw.githubusercontent.com/aptuno/code-challenge/master/challenges/data/properties.json';
       fetch(apiUrl)
         .then((res) => res.json())
         .then((data) => {
          //console.log(data.data);
          setProducts(data.data);
          setAProducts(data.data);
         });
    }else{
      const apiUrl = 'https://raw.githubusercontent.com/aptuno/code-challenge/master/challenges/data/properties.json';
       fetch(apiUrl)
         .then((res) => res.json())
         .then((data) => {
          let prods = [];
          for(let i=0;i<data.data.length;i++){
            for(let j=0;j<data.data[i].regions.length;j++){
              if(data.data[i].regions[j]===e.target.value){
                prods.push(data.data[i]);
              }
            }
          }
          setProducts(prods);
          setAProducts(prods);
         });
    }
  }
  function handleChange1(e){
     console.log("1 "+e.target.checked);
     if(e.target.checked){
       setChk1(true);
     }else{
       setChk1(false);
     }
  }
  function handleChange2(e){
     console.log("2 "+e.target.checked);
     if(e.target.checked){
       setChk2(true);
     }else{
       setChk2(false);
     }
  }
  function handleChange3(e){
     console.log("3 "+e.target.checked);
     if(e.target.checked){
       setChk3(true);
     }else{
       setChk3(false);
     }
  }
  function handleChange4(e){
     console.log("4 "+e.target.checked);
     if(e.target.checked){
       setChk4(true);
     }else{
       setChk4(false);
     }
  }
  function search(){
    let pds = [];
    let b = false;
    setIsFilter(false);
    if(chk1){
      for(let i=0;i<aProducts.length;i++){
        if(aProducts[i].bedrooms===1){
          pds.push(aProducts[i]);
          b = true;
          setIsFilter(true);
        }
      }
    }
    if(chk2){
      for(let i=0;i<aProducts.length;i++){
        if(aProducts[i].bedrooms===2){
          pds.push(aProducts[i]);
          b = true;
          setIsFilter(true);
        }
      }
    }
    if(chk3){
      for(let i=0;i<aProducts.length;i++){
        if(aProducts[i].bedrooms===3){
          pds.push(aProducts[i]);
          b = true;
          setIsFilter(true);
        }
      }
    }
    if(chk4){
      for(let i=0;i<aProducts.length;i++){
        if(aProducts[i].bedrooms===4){
          pds.push(aProducts[i]);
          b = true;
          setIsFilter(true);
        }
      }

    }
    if(b){
      setProducts(pds);
    }else{
      //setProducts(aProducts);
      alert("No encontró resultados según el criterio de búsqueda");
    }

  }

  useEffect(() => {

  const apiUrl = 'https://raw.githubusercontent.com/aptuno/code-challenge/master/challenges/data/properties.json';
   fetch(apiUrl)
     .then((res) => res.json())
     .then((data) => {
      //console.log(data.data);
      setProducts(data.data);
      setAProducts(data.data);
      let regs = []; //Array of regions
      for(let i=0;i<data.data.length;i++){
        for(let j=0;j<data.data[i].regions.length;j++){
          regs.push(data.data[i].regions[j]);
        }
      }
      //console.log(regs);
      for(var i = regs.length -1; i >=0; i--){
         if(regs.indexOf(regs[i]) !== i) regs.splice(i,1);
      }
      //console.log(regs);
      setRegions(regs);
     });
  }, []);

  return (

    <>
    <div className="center">
     <div>
      <p><strong>Región:</strong> <select value={rg} onChange={selectRegion}>
       <option value=""></option>
       {regions.map((r,index)=>{
         return <option value={r}>{r}</option>
       })}
       </select></p>
      </div>
      <div>
      <p><strong># cuartos</strong></p>
      <input type="checkbox" name="1" value="1" defaultChecked={chk1} checked={chk1} onChange={handleChange1}/>
      <label for="1">1</label>
      <input type="checkbox" name="2" value="2" defaultChecked={chk2} checked={chk2} onChange={handleChange2}/>
      <label for="2">2</label>
      <input type="checkbox" name="3" value="3" defaultChecked={chk3} checked={chk3} onChange={handleChange3}/>
      <label for="3">3</label>
      <input type="checkbox" name="4" value="4" defaultChecked={chk4} checked={chk4} onChange={handleChange4}/>
      <label for="4">4</label>
      <button onClick={()=>{search()}}>Buscar</button>
      </div>
    </div>
     <ItemList products={products} isFilter={isFilter}/>
    </>

  );
}

export default ItemListContainer;
