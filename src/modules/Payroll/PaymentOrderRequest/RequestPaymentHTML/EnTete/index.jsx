import React from 'react'
import {Table} from 'antd'

const EnTete = () => {

  return (
   
    <div >
      <table className='Entete'>
        <tr>
            <td rowSpan="3" className='imgcell'>
                <img src="/Gets.png" alt="" />
            </td>
            <td className='integ-manag-sys'>
                <h5>Integrated Management System</h5>
            </td>
            <td className='doc'>
            Doc.Ref: DAF-FR-04-04
            </td>
        </tr>
        <tr>
            <td rowSpan="2" className='integ-manag-sys'>
                <h2>Request For Payment</h2>
            </td>
            <td className='cre'>
            Creation Date: 09-11-21
            </td>
           
        </tr>
        <tr>
           
        </tr>
      </table >
    </div>
    
  )
}

export default EnTete;
