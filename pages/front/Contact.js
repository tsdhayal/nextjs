import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";


import Header from "./Header"; //jsfile
import Footer from "./Footer.js";


export default function Contact(){
	return(
		<>
			<Head>
		        <title>Contact DIT Global Next App</title>
	      	</Head>
			
			<Header />
			
			<main className="contact">
        		
					
				<form action='' method='POST' id='' name='' >
					<fieldset>
						<legend>  </legend>
						<div className='formheading'><h4>Contact Us</h4></div>
						<div><label>Name :</label></div>
						<div><input type='text' name='cname' id='cname' placeholder='Name' reqired /></div>
						<div><label>Email :</label></div>
						<div><input type='email' name='cemail' id='cemail' placeholder='Email' reqired /></div>
						<div><label>Phone : </label></div>
						<div><input type='tel' name='cphone' id='cphone' placeholder='Phone' reqired /></div>
						<div><label>Your Message : </label></div>
						<div><textarea name='cmessage' id='cmessage' placeholder='Your Message' reqired ></textarea></div>
						<div className='btndiv'>
							<button className='btn btn-primary' type='submit' id='csubmit' name='csubmit'> Send Enquiry </button>
						</div>
					</fieldset>
				</form>
				
			</main>

			<Footer />
		</>
	)
}