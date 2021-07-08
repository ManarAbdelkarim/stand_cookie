import Head1 from './Head'
import CookieStandHeader from './CookieStandHeader'
import Footer from './Footer'
import Main from './Main'
import React, { useEffect, useState } from 'react'


function CookieStandAdmin(props){

  // const [cookieStands, setCookieStands] = React.useState([]);
  const [open_hours, setopen] = React.useState([6,7,8,9,10,11,12,1,2,3,4,5,6,7]);

  const [hoursTotals, sethoursTotals] = React.useState([]);

  const onCreate = (e) =>{
      e.preventDefault()
      props.setCookieStands([...props.cookieStands, {
        location :e.target.location.value,
        hourly_sales : open_hours.map(()=> Math.ceil((Math.random() *(e.target.max.value - e.target.min.value +1)) + e.target.min.value)*e.target.avg.value),
      }])   
    };
    
    
    React.useEffect(()=> sethoursTotals(open_hours.map((hr,i)=> props.cookieStands.reduce((a,stand )=> a+=stand.hourly_sales[i],0))),[open_hours,props.cookieStands])
    
    return(
      <div >
      <Head1 title='Cookie Stand Admin' />

      <CookieStandHeader path={props.path} page={props.page} />

      <Main cookieStands={props.cookieStands} setCookieStands={props.setCookieStands} onCreate={onCreate} sethoursTotals={sethoursTotals} hoursTotals={hoursTotals} open_hours={open_hours} />
      
      <Footer locationsNumber={props.cookieStands && props.cookieStands.length} />
    </div>
    )
}

export default CookieStandAdmin;