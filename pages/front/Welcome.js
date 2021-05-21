import Head from 'next/head'
import Image from 'next/image'


import Header from "./Header"; //jsfile
import Footer from "./Footer.js";


export default function Welcome(){
	return(
		<>
			<Head>
		        <title>Welcome DIT Global Next App</title>
	      	</Head>
			
			<Header />
			
			<main className="welcome">
        		
					Welcome Users

				
			</main>

			<Footer />
		</>
	)
}