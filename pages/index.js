import React from 'react';
import Head from '../components/Head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import CookieStandAdmin from '../components/CookieStandAdmin'
const base_url = 'https://noor-cookie-stand.herokuapp.com/'
import LoginForm from '../components/LoginForm'
import axios from 'axios'

import { useState } from 'react'
import ReactDOM from 'react-dom';


// export default function Home() {

//   const [title,setTitle] = useState('Cookie Stand Admin');
//   const [branches,setBranches] = useState('0')
//   const [path,setPath] = useState("/overview")
//   const [page,setPage] = useState("overview")

//   return (
//     <div className="bg-green-100">
//       <Head title={title}/>
//       <Header header={title} path={path} page={page}/>
//       <Main title={title} setBranches={setBranches}/>
//       <Footer branches={branches}/>
//     </div>
//   )
// }



// import Image from 'next/image'


export default function Home() {
  const [cookieStands, setCookieStands] = React.useState([]);
  const [isLogin, setIsLogin] = React.useState(false)
  
  async function saveInfo(e){
    e.preventDefault();
    const loginInfo = {
        username : e.target.username.value ,
        password : e.target.password.value,
      };
      // console.log(loginInfo);
      getData(loginInfo)
    }

  async function login(loginInfo) {
    return axios.post(`${base_url}api/token/`, loginInfo);
  }

  async function fetchStands(loginInfo) {
    try{
    const tokenResponse = await login(loginInfo)
    const { refresh, access: token } = tokenResponse.data;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await axios.get(`${base_url}api/v1/cookie_stands/`, config);
    setIsLogin(true)
    return response.data;
  }catch(error){
    alert('Wrong username or password')
  }
    
  }

  async function getData(loginInfo) {
    setCookieStands(await fetchStands(loginInfo));
  }

  // console.log(cookieStands.length);
  if (isLogin){
  
  return (
    <CookieStandAdmin cookieStands={cookieStands} setCookieStands={setCookieStands} />
  )}else{
    return(
      <LoginForm saveInfo ={saveInfo} />
    )
  }
}