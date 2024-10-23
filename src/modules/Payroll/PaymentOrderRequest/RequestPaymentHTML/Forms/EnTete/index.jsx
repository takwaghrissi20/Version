import React from 'react'
import {Table} from 'antd'

const EnTete = () => {

  return (
   
    <div className='Entete'>
      <table>
        <tr>
            <td rowSpan="3" className='imgcell'>
                <img src="/Gets.png" alt="" />
            </td>
            <td className='integ-manag-sys'>
                <h5>Integrated Management System</h5>
            </td>
            <td className='doc'>
                Doc.Ref: HR-FR-25-00
            </td>
        </tr>
        <tr>
            <td rowSpan="2" className='Miss-assi-ord'>
                <h2>MISSION ASSIGNMENT ORDER</h2>
            </td>
            <td className='cre'>
                Creation Date : 16-02-23
            </td>
        </tr>
        <tr>
            <td>
                Page : 1/1
            </td>
        </tr>
      </table >
    </div>
    
  )
}

export default EnTete;
