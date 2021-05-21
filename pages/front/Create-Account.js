import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";


import Header from "./Header"; //jsfile
import Footer from "./Footer.js";


export default function CreateAccount(){
	return(
		<>
			<Head>
		        <title>Create Account DIT Global Next App</title>
	      	</Head>
			
			<Header />
			
			<main className="createAccount">
        		
				<form action='' method='POST' id='' name='' >
					<fieldset>
						<legend>  </legend>
						<div className='formheading'><h4>Create Account</h4></div>
						<div><label>Name : </label></div>
						<div><input type='text' name='caname' id='caname' placeholder='Name' reqired /></div>
						<div><label>Email :</label></div>
						<div><input type='email' name='caemail' id='caemail' placeholder='Email' reqired /></div>
						<div><label>Phone : </label></div>
						<div><input type='tel' name='caphone' id='caphone' placeholder='Phone' reqired /></div>
						<div>
							<label>Gender : </label>
							<label for='cagendermale'   className='checkradiolabel' >Male </label>
							<input className='checkradioinput' type='radio' name='cagender' id='cagendermale'  />
							<label for='cagenderfemail'  className='checkradiolabel' >Female</label>
							<input className='checkradioinput' type='radio' name='cagender' id='cagenderfemail' />
						</div>
						<div><label>Password : </label></div>
						<div><input type='password' name='capassword' id='capassword' placeholder='Password' reqired /></div>
						<div><label>Repeat Password :</label></div>
						<div><input type='password' name='carepassword' id='carepassword' placeholder='Re-Enter Password' reqired /></div>
						<div className='btndiv'>
							<button className='btn btn-primary' type='submit' id='casubmit' name='casubmit'> Create Account </button>
						</div>
						<div className='linkdiv'>
							<div>I have an Account <Link href='/static/Login'> Login </Link ></div>
							<div>Change My New Password <Link href="/static/Forgot-Password">Forgot Password </Link></div>
						</div>
					</fieldset>

				</form>

				
			</main>

			<Footer />
		</>
	)
}