import React,{useState,createContext,useContext} from 'react'
import Wrapper from '../assets/wrappers/Landing'
import {Outlet } from 'react-router-dom'
import{FaAlignJustify} from 'react-icons/fa'
import {Link,NavLink} from 'react-router-dom'
import { HomeSidebar } from '../components'
const LandingContext = createContext()

const Landing = () => {
    const [showHomeSidebar,setShowHomeSidebar] = useState(false)
	const displayHomeSidebar=()=>{
		setShowHomeSidebar(true)
	}
	const hideHomeSidebar=()=>{
		setShowHomeSidebar(false)
	}
  return (
	<LandingContext.Provider value={{
		showHomeSidebar,
	displayHomeSidebar,
	hideHomeSidebar}}>
		<Wrapper>
		<HomeSidebar/>	
    <main className='full-page'>
		<nav>
			<div className=' nav-1'>
				<div className='img-container-1'>
					<span  className='img-1'>&#9888;</span>
				</div>
				<article className='nav-logo'>
					<div className='warning'>
						<h2 className='nav-title'>The Great Warning </h2>
						<h2 className='nav-title-1'>Warning </h2>

						<p className='nav-subtitle'>&ldquo;illumination of coinscience&rdquo;</p>
						
					</div>
        </article>
        <div className="sign-up">
			<NavLink to='/' className='login' end>Home</NavLink>
			<NavLink to='/preparations' className='login' end>Preparations</NavLink>
			<NavLink to='/author' className='login' end>Author</NavLink>
            <Link to='/login' className="login">login</Link>
            <Link to='/register'  className="login">signup</Link>
        </div>
		<div className='show-homesidebar'>
			<button className="homesidebar" onClick={displayHomeSidebar}><FaAlignJustify/></button>
		</div>
			</div>
		</nav>
		<section className='container landing-content'>
			<Outlet/>
			
		</section>
		<footer>
			<h4>the immaculate heart of Mary shall triumph</h4>
			<p>Queen of peace, pray for us.</p>
			<p><span>&#10013;</span>&nbsp;In the name of the Father,
			 and of the Son and of the Holy Spirit. &nbsp;Amen.</p>
			<p style={{color:'var(--yellow-70)',
		paddingBottom:'0.5rem'}}>Already have an account?
			<Link to='/login'> login, </Link>no account yet?
			<Link to='/register'> create one </Link>.</p>
		</footer>
	</main>
    </Wrapper>
	</LandingContext.Provider>
    
  )
}
export const useLandingContext=()=>useContext(LandingContext)
export default Landing
