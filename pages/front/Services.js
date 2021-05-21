import Head from 'next/head'
import Image from 'next/image'


import Header from "./Header"; //jsfile
import Footer from "./Footer.js";


export default function Services(){
	return(
		<>
			<Head>
		        <title>Services DIT Global Next App</title>
	      	</Head>
			
			<Header />
			
			<main className="services">
        		
					Services

				
			</main>

			<Footer />
		</>
	)
}