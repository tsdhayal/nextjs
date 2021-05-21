import Head from "next/head";
import styles from "./../../styles/Xyz.module.css";
//import styless from "./../../user/Users.module.css";

export default function Defaults(){
	const style5 = {
		backgroundColor : 'red',
		padding:10+'px',
		color:'white'
	}
	return(

		<>
			<Head>
		        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
			</Head>
			<div className='defaulttests' style={{backgroundColor:'lightgray', border:5+'px solid green',backgroundColor:'green',color:'white'}}>
				Inline teg style
			</div>

			<style jsx>
				{
					`
						.style4{
							border : 5px solid red;
							padding:10px;
						}

			  		`
				}
			</style>
			<div className='style4'>
				Same page Style with style tag
			</div>

			<div className='p-4 bg-warning'>
				<button className='btn btn-sm btn-primary '> bootstrap style </button>
			</div>

			<div style={style5}>
				javscript variabale style
			</div>
			<div className='externalglobal'>
					global Style external file
			</div>
			<div className={styles.externalmodule}>
					modeule Style external file
			</div>
		</>
	)
}