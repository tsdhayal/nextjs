import Link  from "next/link"; // /link


function Paths(){

	var blockUl = {}

	var a = 0;
	var b = "";
	function toggleBtn(){
		if(a == 0 ){
			a = 1;
			b = "block";
		}else{
			a = 0;3
			b = "none"
		}
		console.log(a + b);
		return b;
	}

	return(
		<>
				<div className='navtoggle' onClick={toggleBtn}><i class="fas fa-list-ul"></i></div>
				<ul className='navulfirst' style={{display:"block"}}>

					<li><Link href='/' className='links' ><a><i className="fas fa-home"></i> Home </a></Link></li>
					<li><Link href='/front/Services' className='links'><a><i className="fab fa-servicestack"></i> Services </a></Link>
						<ul>
							<li><Link href='/user/FetchData' className='links'><a><i className="fab fa-servicestack"></i> Deployment </a></Link></li>
							<li><Link href='/front/Services' className='links'><a><i className="fab fa-servicestack"></i> Web Deployment </a></Link></li>
							<li><Link href='/front/Services' className='links'><a><i className="fab fa-servicestack"></i> Mobile App Deployment </a></Link></li>
							<li><Link href='/front/Services' className='links'><a><i className="fab fa-servicestack"></i> Software Deployment </a></Link></li>
							<li><Link href='/front/Services' className='links'><a><i className="fab fa-servicestack"></i> Graphics Deployment </a></Link></li>
						</ul>
					</li>
					<li><Link href='/front/Login' className='links'><a><i className="fad fa-sign-in"></i> Login </a></Link></li>
					<li><Link href='/front/Create-Account' className='links'><a><i className="fad fa-user-plus"></i> Create Account </a></Link></li>
					<li><Link href='/front/About-Us' className='links'><a> About Us </a></Link></li>
					<li><Link href='/front/Contact' className='links'><a><i className="fas fa-phone-volume"></i> Contact </a></Link></li>
				</ul>
			
		</>
	)
}

export default Paths;
//if u want spreate nav than <div className='paths'> </div>  this is put starting tag before ul tag and end teg put end of ul tag
// and change in Header.js file also
//className={this.props.shouldHide ? 'hidden' : ''} className={props.shouldHide}