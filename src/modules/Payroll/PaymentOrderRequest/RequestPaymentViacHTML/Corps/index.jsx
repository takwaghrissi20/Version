import React from 'react'
const Corps = ({ itemSave}) => {
  console.log("ttyyyhnn",itemSave)
  return (
    <div className='depart'>
        <table style={{paddingRight:"1rem"}}>
            <tr>
                <th>
                PROJECT NAME : {itemSave?.projName}
                </th>
            </tr>
        </table>
    <div className='corps'>
        <table>
            <tr>
                <th>
                SUBJECT
                </th>
            </tr>
            <tr>
                <td>
                    <label htmlFor="">PAYMENT TYPE :{itemSave?.paymentType}</label>
                    <input type="text"/> <br />
                    <label htmlFor=""> REQUESTED BY: </label>
                    <input type="text"/>
                    <label htmlFor="">BANC ACCOUNT:{itemSave?.paymentType} </label>
                    <input type="text"/>
                </td>
            </tr>
           
          
          
        </table>
        <table className='TableRequest'>
    <thead>
      <tr>
        <th className='TableRequestth'>N°</th>
        <th className='TableRequestth'>ID</th>
        <th className='TableRequestth'>FULL NAME</th>
        <th className='TableRequestth'>POSITION</th>
        <th className='TableRequestth'>OTHER DECRIPTION</th>
        <th className='TableRequestth'>MONTH OF</th>
        <th  className='TableRequestth'>AMOUNT</th>
      </tr>
    </thead>
    <tbody>
      {/* Mapping over listRequestPayments */}
      {itemSave?.listRequestPayments?.map((payment, index) => (
              <tr className='TableRequestth' key={payment.id}>
                <td className='TableRequestth'>{index + 1}</td>
                <td className='TableRequestth'>{payment.id}</td>
                <td className='TableRequestth'>{payment.fullName || 'N/A'}</td>
                <td className='TableRequestth'> {payment.position || 'N/A'}</td>
                <td className='TableRequestth'>{payment.description || 'No Description'}</td>
                <td className='TableRequestth'>{payment.month || 'N/A'}</td>
                <td className='TableRequestth'>{payment.amount?.toFixed(2) || 0}</td>
              </tr>
            ))}
       <tr className='TableRequestth'>
              <td colSpan="6" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total:</td>
              <td className='TableRequestth'>{itemSave?.total?.toFixed(2) || 0}</td>
            </tr>
    </tbody>
  </table>
    {/* Section for Total */}
    {/* <div style={{

  bottom: "0", 
  right: "0", 
  textAlign: "right", 
  marginTop: "1rem", 
  width: "100px", 
  fontWeight: "bold", 
  border: "1px solid red"
}}>
  Total: 1000
</div> */}

      
    </div>
   
    </div>
  )
}

export default Corps;
