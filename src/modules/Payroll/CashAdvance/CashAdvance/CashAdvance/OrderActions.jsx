import React from 'react';
import { GrFormView } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";

const OrderActions = ({id}) => {
  const token = localStorage.getItem("token")
//View By Id 
const fetchViewTEmployee = async () => {
  try {
    const endPoint =
      process.env.NODE_ENV === "development"
        ? "https://dev-gateway.gets-company.com"
        : "";

        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/getById?id=${id}&token=${token}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });


    if (!response.ok) {
      throw new Error('La requête a échoué avec le code ' + response.status);
    }
    
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json(); 
      console.log("Find by Id:", data);
   
    } 
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  }
};





  
  return (
    <>

    <GrFormView on onClick={fetchViewTEmployee}className='iconeView'></GrFormView>
    <AiFillEdit className='iconeEdit'></AiFillEdit>
    <CiSaveDown2 className='iconeDownload'></CiSaveDown2>
    

      {/* <Dropdown menu={{ items }} trigger={['click']}>
        <Button type='circle'>
          <MoreOutlined />
        </Button>
      </Dropdown> */}
    </>
  );
};
export default OrderActions;
