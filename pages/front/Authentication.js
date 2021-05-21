import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

import Header from "./Header"; //jsfile
import Footer from "./Footer.js";


export default function Authentication(){
	return(
		<>
			<Head>
		        <title>Authentication Account DIT Global Next App</title>
	      	</Head>
			
			<Header />
			
			<main className="authentication">
        		
					
				<form action='' method='POST' id='' name='' >
					<fieldset>
						<legend>  </legend>
						<div className='formheading'><h4>Authentication Account</h4></div>
						<div><label>Email :</label></div>
						<div><input type='email' name='authemail' id='authemail' placeholder='Email' reqired /></div>
						<div><label>Phone : </label></div>
						<div><input type='tel' name='authphone' id='authphone' placeholder='Phone' reqired /></div>
						<div><label>OTP : </label></div>
						<div><input type='tel' name='authotp' id='authotp' placeholder='OTP' reqired /></div>
						
						<div className='btndiv'>
							<button className='btn btn-primary' type='submit' id='authsubmit' name='authsubmit'> Authenticate </button>
						</div>
						<div className='linkdiv'>
							<div>I have an Account <Link href='/static/Login'> Login </Link ></div>
							<div>Create a new Account <Link href="/static/Create-Account">Create-Account </Link></div>
						</div>
					</fieldset>
				</form>
				
			</main>

			<Footer />
		</>
	)
}