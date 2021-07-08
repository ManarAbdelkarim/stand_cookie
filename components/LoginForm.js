import { useState } from "react";

function LoginForm(props){

    return(
        <div>
        <form onSubmit = {props.saveInfo} className='bg-green-200 p-8 rounded-3xl m-20 border-green-500 p-2 w-7/12 ml-auto mr-auto'>
            <label className='p-2 text-center '>USERNAME</label><br/>
            <input className="w-full p-1" type="text" placeholder="Username" id ='username' required /><br/>

            <label className='p-2 text-center'>PASSWORD</label><br/>
            <input className="w-full p-1" type="password" placeholder="Password" id ='password' required /><br/>

            <button type="submit" className='w-full text-white mt-10 bg-green-500 px-10 py-3 rounded-xl hover:text-green-600 hover:bg-green-100 '>SIGN IN</button>

        </form>
    </div>
    )
}

export default LoginForm; 