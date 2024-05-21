
import BoardList from "./BoardList";
import { useParams } from "react-router-dom";
import ScrumContextProvider from "../../apps/context/ScrumContextProvider";

const ScrumBoard = () => {
  const params = useParams();


  const onGetMainComponent = () => {

 
  return <BoardList />;
    
  };

  return <ScrumContextProvider>{onGetMainComponent()}</ScrumContextProvider>;
};

export default ScrumBoard;
