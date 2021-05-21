import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import React from "react";
//import Component from "react";
import ReactDOM from "react-dom";

import Header from "../front/Header";
import Footer from "../front/Footer";
import CreateAccout from "../front/Create-Account";
/*
function FetchData({ stars }){
	console.log(stars)
	return(
		<>	<Head>
				<title>Fetch Data | DIT Global Next App  </title>
			</Head>
			<Header />
			<div className='fetchdata'>
				fetch Data { stars }
			</div>
			<Footer />
		</>
	)
}

FetchData.getInitialProps = async (ctx) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const json = await res.json()
  console.log(json.stargazers_count);
  //
  return { stars: json.stargazers_count }
  //return json
}
export default FetchData;

*/
/*
class Page extends React.Component {
	/*
  static async getInitialProps(ctx) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render() {
    return <div>Next stars: {}</div>
  }
}

export default Page

*/
/*
import { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

//const useUser = () => ({ user: null, loading: false })
const useUser = () => ({ user: true, loading: true })

export default function Page({ post }) {
  const router = useRouter()
  

  const { user, loading } = useUser()
  useEffect( function(){
    if (!(user || loading)) {
      router.push('/static/Login')
    }
  }, [user, loading])

  
  return (
  	<>
    <button type="button" onClick={() => router.push('/static/About-Us')}>
      Click me
    </button>

    <button type="button" onClick={() => { router.push({
          pathname: '/static/[pid]',
          query: { pid: post.id },
        })
      }} >
      Click here to read more
    </button>


    </>
  )
}
*/
//import { Dialog } from '@reach/dialog'
//import VisuallyHidden from '@reach/visually-hidden'
//import '@reach/dialog/styles.css'
//
/*
//# recode fetch
function Blog({ posts }) {
	console.log(posts)
	const del = {
		padding:"5px 10px",
		backgroundColor:'blue',
		color:'white',
		cursor:'pointer',
		outline:'none',
		border:'none',
		borderRadius:3+'px',
	}
	const edt = {
		padding:'5px 10px',
		backgroundColor:'red',
		color:'white',
		cursor:'pointer',
		outline:'none',
		border:'none',
		borderRadius:3+'px',
	}
	function deleteUser(id){
		alert("Delete user Id is : " + id);
	}
  return(
  	<>
  		<div>

  			<table>
  			
			  {posts.map(({id, name , email}) => (
			  	<tr>
			  		<td>{id}</td>
			  		<td>{name}</td>
			  		<td>{email}</td>
			  		<td>Mobile</td>
			  		<td>Password</td>
			  		<td><button data-UserID_Edit={id}  style={edt}>Edit</button></td>
			  		<td><button data-UserID_Delete={id} style={del} onClick={ () =>{ alert("ready to delete " + id)}  }>Delete</button></td>

			  	</tr>
			   

			  ))}
			 
		  </table>

		</div>
  	</>
  )
}

///

export async function getStaticProps() {sts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return {
    props: { posts,},
  }
}

export async function getServerSideProps(context) {
   const res = await fetch('https://ditwebsolution.info/dit_config/api-fetch_all.php')
//http://localhost/tapendra/TAPENDRA_DHAYAL/php/api.php
//https://ditwebsolution.info/dit_config/api-fetch_all.php
  const posts = await res.json()
  console.log(posts)
  if (!posts) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {posts,}, 
  }
}

export default Blog

*/



function Blog() {
	
	const del = {
		padding:"5px 10px",
		backgroundColor:'blue',
		color:'white',
		cursor:'pointer',
		outline:'none',
		border:'none',
		borderRadius:3+'px',
	}
	const edt = {
		padding:'5px 10px',
		backgroundColor:'red',
		color:'white',
		cursor:'pointer',
		outline:'none',
		border:'none',
		borderRadius:3+'px',
	}
	function deleteUser(id){
		alert("Delete user Id is : " );
	}
	 var error = "";
	const registerUser = async event => {
        event.preventDefault()
       
        var datas = JSON.stringify({ name: event.target.name.value,
        							 email : event.target.email.value,
        							 phone : event.target.phone.value,
        							 password : event.target.password.value, });
        
	    const res = await fetch( 'https://ditwebsolution.info/dit_config/api_insert.php',
	      {
	        body: datas,
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        method: 'POST'
	      }
	    )

	    const result = await res.json()
	    console.log(result);
	    // result.user => 'Ada Lovelace'
  	}
  	
  return(
  	<>
  
	    <form onSubmit={registerUser} action='' method='POST'>
	    	<div className='formheading'><h4>Create Account</h4></div>
	    	
	        <div><label htmlFor="name">Name</label></div>
	       	<div><input id="name" name="name" type="text" autoComplete="name" required /></div>
	      	<div><label htmlFor="email">Email</label></div>
	      	<div><input id="email" name="email" type="email" autoComplete="email" required /></div>
	      	<div><label htmlFor="phone">Phone</label></div>
	      	<div><input id="phone" phone="phone" type="tel" autoComplete="phone" required  /></div>
	      	<div><label htmlFor="password">Password: </label></div>
	      	<div><input id="password" name="password" type="text" autoComplete="password" required /></div>
	      	<div className='btndiv'><button type="submit">Register</button></div>
	    </form>
  
  	</>
  )
}


export default Blog;