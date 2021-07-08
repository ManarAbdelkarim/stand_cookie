// import React from 'react';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/Home.module.css'
import ReportTable from './ReportTable';
import CreateForm from './CreateForm';

function Main({cookieStands, setCookieStands, onCreate, open_hours, hoursTotals}){
    

    return(
        <main className={styles.main}>
           
            <CreateForm onCreate={onCreate} open_hours={open_hours}/>
            
            <ReportTable cookieStands={cookieStands} open_hours={open_hours} hoursTotals={hoursTotals} />
      </main>
    )
}

export default Main;