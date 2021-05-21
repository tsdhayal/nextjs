import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router'


export default function CommanUriNotFound(){
	const router = useRouter()
	return(
		<> 
		<style jsx>{
			`
			*{
				margin:0;
				padding:0;
				box-sizing:border-box;
			}
				.notfound{
					width:100%;
					height:100%;
					background-color:;
					padding:10px;
					color:gray;
					margin:auto;
					display:flex;
					text-align:center;
					
					align-items:center;

				}
				.notfound2{
					width:400px;
					height:200px;
					
					margin:auto;
					padding:20px;
					box-shadow:3px 3px 3px rgba(0,0,0,0.1), -3px -3px 3px rgba(0,0,0,0.1);
					background-color:#FBFCFC;
					color:darkblue;
					align-items:center;
					text-align:center;
					border-radius:7px;
					font-size:1.3em;
				}
				.notfound2 h3{
					color:lightgray;
				}
				@media screen and (max-width:300px){
					.notfound2{
						padding:5px;
						font-size:1em;
					}
					.notfound2 h3{
						font-size:1.1em;
					}
				}
				button{
					outline:none;
					border:none;
					padding:5px 10px;
					border-radius:4px;
					cursor:pointer;
					color:white;
					background-color:#3498DB;
					font-size:0.9em;
				}
			`
		}</style>
			<Head>
					<title>File Not found </title>
			</Head>
			
			<div className='notfound'>
				<div className='notfound2'>
					<p>File Does not Found  </p> 
					<h3>Error 404 </h3><br/>
					<button onClick={() => router.push('/')}>&#8592; Go Back </button>
				</div>
			</div>



		</>
	)
}