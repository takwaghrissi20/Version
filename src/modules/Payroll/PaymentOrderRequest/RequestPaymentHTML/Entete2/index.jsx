import React from 'react'
import { Table } from 'antd'

const EnTete2 = ({
    itemSave
    }) => {

  return (
    <div className='Entete2'>
        <table>
            <tr style={{width:'3rem'}}>
                <td className='integ-manag-sys'>
                Request ref:{itemSave?.id}
                </td>
               
                  
            </tr>
            <tr>
                <td className='integ-manag-sys'>
                    Date :{itemSave?.dateInput}
                </td>
              
            </tr>
            <tr>
            <td className='integ-manag-sys'>
                COST CENTER:{itemSave?.cosCenter}
                </td>


            </tr>
        </table>
      
    </div>
  )
}

export default EnTete2;
