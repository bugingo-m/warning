import styled from "styled-components";


const Wrapper = styled.main`

.nav-1{
	display:flex;
	align-items:center;
    padding:1rem 4rem;
	
	
}

.sign-up{
	display:none;
    margin-left:auto;
    a{
        display:inline-block;

    }
	@media(min-width: 992px){
	display:block;
}
}

.login{
    background:transparent;
    color:#fff;
    /* padding:0.25rem; */
    
    text-transform:capitalize;
    margin:4px;
	height:30px;
	min-width:5rem;
	padding:0 4px;
	display:flex;
	align-items:center;
	text-align:center;
	border-radius:4px;
	transition:var(--transition);
	&:hover{
		/* border:1px solid var(--yellow-60); */
		box-shadow:1px 1px 2px #fff;
	}
}
.active{
	background:var(--blue-50);
}
.img-container-1{
	height:2.5rem;
	width:2.5rem;
	font-size:2.5rem;
	display:flex;
	align-items:center;
	
	margin-right:1rem;
	
}
.img-1{
	margin-top:-2px;
	display:block;
	color:var(--yellow-60);
	margin-top:-1rem;
	
	
}


.nav-title{
	color:var(--yellow-60);
	
}
.nav-subtitle{
	color:#fff;
	padding-left:1rem;
	font-size:0.78rem;
}
.full-page{
	background:var(--green-10);
	min-height:100vh;
	
}
.container{
	margin:0 auto;
	padding:0.5rem 4rem;
	
}
.landing-content{
	min-height:calc(100vh - var(--nav-height));
	
}
.catch-word{
	text-align:center;
	margin:2rem 0;
	border-bottom: 4px double var(--coffee-100);
	padding:0.2rem;
}
.cross{
	font-weight:700;
	span{
		font-weight:700;
		color:black;
		font-size:1.5rem;
	}
}
.show-homesidebar{
	margin-left:auto;
	@media (min-width:992px){
		display:none;
	}
	.homesidebar{
		border:none;
		background:transparent;
		color:#fff;
		font-size:1.75rem;
		&:hover{
			cursor:pointer;
		}
	}
}
.prayer-container{
	text-align:center;
	box-shadow:1px 1px 2px var(--coffee-40);
	border-radius:4px;
}
.prayer{
	color:var(--blue-100);
	font-weight:700;
	
	margin:1rem 0;
	padding:0.5rem 0;
}
.definition{
	margin:6px 0;
	font-weight:700;
}
footer{
	min-height:6rem;
	background:black;
	color:#fff;
	padding:1rem 0;
	h4{
		/* margin:2rem 0; */
		padding:1rem 4rem;
		color:#fff;
	}
	p{
		padding:0.5rem 4rem;
	}
}
`
export default Wrapper