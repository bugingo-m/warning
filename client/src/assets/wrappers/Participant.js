import styled from "styled-components";


const Wrapper = styled.div`

.participants-container{
	display:flex;
	align-items:center;
	justify-content:space-between;
	background-color:var(--coffee-20);
	color:black;
	padding:0.38rem;
	border-radius:4px;
	margin:0.5rem 1px;
}
.img-container{
	height:3rem;
	width:3rem;
	/*border-right:1px solid rgba(0,0,0,0.4);*/
	padding:1px 3px;
	
}
.img{
	display:block;
	height:100%;
	width:100%;
	border-radius:50%;
	object-fit:fill;
}
.partcipant{
	background:#fff;
	padding:4px;
    border-radius:4px;
	flex-grow:90;
}
.email{
	color:var(--blue-70);
    &:hover{
        text-decoration:underline;
        cursor:pointer;
    }
}
.name{
	color:var(--coffee-100);
	font-weight:900;
}

`
export default Wrapper