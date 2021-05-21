import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"


import Header from "./Header"; //jsfile
import Footer from "./Footer.js";


export default function Login(){
	return(
		<>
			<Head>
		        <title>Login DIT Global Next App</title>
	      	</Head>
			
			<Header />
			
			<main className="login">
        		
				<form action='' method='POST' id='' name='' >
					<fieldset>
						<legend>  </legend>
						<div className='formheading'><h4>Login User</h4></div>
						<div><label>Email :</label></div>
						<div><input type='email' name='lemail' id='lemail' placeholder='Email' reqired /></div>
						<div><label>Password : </label></div>
						<div><input type='password' name='lpassword' id='lpassword' placeholder='Password' reqired /></div>
						<div className='btndiv'>
							<button className='btn btn-primary' type='submit' id='lsubmit' name='lsubmit'> Login </button>
						</div>
						<div className='linkdiv'>
							<div>Create a new Account <Link href='/static/Create-Account'> Create Account </Link ></div>
							<div>Change My New Password <Link href="/static/Forgot-Password">Forgot Password </Link></div>
						</div>
					</fieldset>
				</form>

				
			</main>

			<Footer />
		</>
	)
}