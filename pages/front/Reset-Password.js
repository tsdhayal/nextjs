import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";


import Header from "./Header"; //jsfile
import Footer from "./Footer.js";


export default function ResetPassword(){
	return(
		<>
			<Head>
		        <title>Reset Password DIT Global Next App</title>
	      	</Head>
			
			<Header />
			
			<main className="resetPassword">
        		
					
				<form action='' method='POST' id='' name='' >
					<fieldset>
						<legend>  </legend>
						<div className='formheading'><h4>Set New Password</h4></div>
						<div><label>Email :</label></div>
						<div><input type='email' name='npsemail' id='npsemail' placeholder='Email' reqired /></div>
						<div><label>Phone : </label></div>
						<div><input type='tel' name='npsphone' id='npsphone' placeholder='Phone' reqired /></div>
						<div><label>OTP : </label></div>
						<div><input type='tel' name='npsotp' id='npsotp' placeholder='OTP' reqired /></div>
						<div><label>Password : </label></div>
						<div><input type='password' name='npspassword' id='npspassword' placeholder='Password' reqired /></div>
						<div><label>Repeat Password :</label></div>
						<div><input type='password' name='npsrepassword' id='npsrepassword' placeholder='Re-Enter Password' reqired /></div>
						<div className='btndiv'>
							<button className='btn btn-primary' type='submit' id='npssubmit' name='npssubmit'> Create Account </button>
						</div>
						<div className='linkdiv'>
							<div>I have an Account <Link href='/static/Login'> Login </Link ></div>
							<div>Create a New Account<Link href="/static/Create-Account">Create Account </Link></div>
						</div>
					</fieldset>

				</form>
				
			</main>

			<Footer />
		</>
	)
}