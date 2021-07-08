// import styles from '../styles/Home.module.css'
import Link from 'next/link'

function CookieStandHeader(){
    return(
        <header className='bg-green-400 w-full pt-3 p-10 h-10'>
            <h1 className='text-2xl font-medium float-left'>
                Cookie Stand Admin
            </h1>
            <Link href='/overview'>
                <a className="bg-gray-100 text-gray-800 rounded-lg mr-4 pb-1 pl-1 pr-1 text-l float-right " >Overview</a>
            </Link>
        </header>
    )
}

export default CookieStandHeader; 