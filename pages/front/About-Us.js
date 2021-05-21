import Head from 'next/head'
import Image from 'next/image'


import Header from "./Header"; //jsfile
import Footer from "./Footer.js";


export default function AboutUs(){
	return(
		<>
			<Head>
		        <title>About Us DIT Global Next App</title>
	      	</Head>
			
			<Header />
			
			<main className="aboutus">
        		
					About Us

				
			</main>

			<Footer />
		</>
	)
}