import {React , useRef }from 'react';
import Entete from "./EnTete"
import Entete2 from "./Entete2"
import Footer from './Footer';
import Signature from'./Signature';
import Corps from './Corps';


const FormsMissionOrder= ({ mission, getsId, profile,id ,date}) => {
  
  return (
   <div className='page-wrapper'>
    <Entete/>
    <Entete2 id={id} date={date}/>
      <Corps mission={mission} getsId={getsId} profile={profile} />
    <Signature/>
    <Footer/>
    
   </div>
  );
};

export default FormsMissionOrder;