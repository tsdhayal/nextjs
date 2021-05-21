import Head from 'next/head'
import Image from 'next/image'
import Link from "next/Link"


import Header from "./Header"; //jsfile
import Footer from "./Footer.js";


export default function ForgotPassword(){
	return(
		<>
			<Head>
		        <title>Forgot Password DIT Global Next App</title>
	      	</Head>
			
			<Header />
			
			<main className="forgotPassword">

				<form action='' method='POST' id='' name='' >
					<fieldset>
						<legend>  </legend>
						<div className='formheading'><h4>Forgot Password</h4></div>
						<div><label>Email :</label></div>
						<div><input type='email' name='fpotpgemail' id='fpotpgemail' placeholder='Email' reqired /></div>
						<div><label>Phone : </label></div>
						<div><input type='tel' name='fpotpgphone' id='fpotpgphone' placeholder='Phone' reqired /></div>
						<div className='btndiv'>
							<button className='btn btn-primary' type='submit' id='fpotpgsubmit' name='fpotpgsubmit'> OTP Generate </button>
						</div>
						<div className='linkdiv'>
							<div>I have an Account <Link href='/static/Login'> Login </Link ></div>
							<div>Create a new Account <Link href="/static/Create-Account">Create New Account </Link></div>
						</div>
					</fieldset>
				</form>

			</main>

			<Footer />
		</>
	)
}