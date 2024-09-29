import React from 'react'
const Corps = ({ mission, getsId, profile }) => {
  return (
    <div className='depart'>
        <table style={{paddingRight:"1rem"}}>
            <tr>
                <th>
                Departement : 
                </th>
            </tr>
        </table>
    <div className='corps'>
        <table>
            <tr>
                <th>
                    PROJECT DETAILS
                </th>
            </tr>
            <tr>
                <td>
                    <label htmlFor="">Project Name :</label>
                    <input type="text"placeholder= {mission?.projName}/> <br />
                    <label htmlFor=""> Location : </label>
                    <input type="text" placeholder={mission?.location} readOnly/>
                </td>
            </tr>
            <tr>
                <th>
                    ASSIGNED PERSON DETAILS
                </th>
            </tr>
            <tr>
                <td>
                    <label htmlFor=""> Name :</label>
                    <input type="text" placeholder={profile?.name} readOnly/><br />
                    <label htmlFor=""> ID N°:</label>
                    <input type="text" placeholder={getsId} readOnly /> <br />
                    <label htmlFor=""> Function:</label>
                    <input type="text"placeholder={profile?.position} readOnly /><br />
                    <label htmlFor=""> Destination:</label>
                    <input type="text" placeholder={mission?.location} readOnly/><br />
                    <label htmlFor=""> Mission Dtae:</label>
                    <input type="date" placeholder={mission?.starTDateMis}/>
                </td>
            </tr>
            <tr>
                <th>
                    COMMENTS 
                </th>
                </tr>
                <tr>
                <td>
                    <b>-</b> <br />
                    <b>-</b> <br />
                    <b>-</b>
                </td>
            </tr>
        </table>
      
    </div>
   
    </div>
  )
}

export default Corps;
