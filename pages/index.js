import Head from 'next/head'
import Image from 'next/image'
import styless from '../styles/Home.module.css'

// import header from "../front/Header.css";
// all css file import self js file or _app.js file only

import Header from "./front/Header"; //jsfile
import Footer from "./front/Footer.js";
import Index from "./front/Home";


export default function Home() {
  return (
    <div className={styless.container}>
      
      {' '}
      <Header />
      <Index />
      <Footer />

    </div>
  )
}
