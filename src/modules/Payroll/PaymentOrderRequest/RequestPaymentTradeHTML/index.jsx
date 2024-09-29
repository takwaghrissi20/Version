import {React , useRef }from 'react';
import Entete from "./EnTete"
import Entete2 from "./Entete2"
import Footer from './Footer';
import Signature from'./Signature';
import Corps from './Corps';


const Forms= ({ itemSave}) => {

  
  return (
   <div className='page-wrapper'>
  
    <Entete itemSave={itemSave}/>
    <Entete2 itemSave={itemSave}/>
      <Corps  itemSave={itemSave}/>
    <Signature itemSave={itemSave}/>
    <Footer/>
    
   </div>
  );
};

export default Forms;