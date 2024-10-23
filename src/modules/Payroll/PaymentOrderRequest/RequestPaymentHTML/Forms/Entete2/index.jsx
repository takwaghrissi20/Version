import React from 'react'
import { Table } from 'antd'

const EnTete2 = ({id},{date}) => {
    const today = new Date()
    date = today.getFullYear()
  return (
    <div className='Entete2'>
        <table>
            <tr>
                <td>
                    Reference :
                </td>
                <td>
                    MAO - {id} - {date} 
                </td>
            </tr>
            <tr>
                <td>
                    Date :
                </td>
                <td>
                <input type="date" placeholder={new Date().toISOString().slice(0, 10)} readOnly/>
                </td>
            </tr>
        </table>
      
    </div>
  )
}

export default EnTete2;
