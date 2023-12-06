import styled from "styled-components";


const Wrapper = styled.div`
.logout{
background:var(--blue-80);
padding:5px;
border-radius:4px;
position:relative;
}
.user{
    display:flex;
    align-items:center;
    button{
    border:none;
    background:transparent;
    color:white;
    cursor:pointer;
    font-size:1rem;
}
.img{
	display:block;
	height:2rem;
	width:2rem;
	border-radius:50%;
	object-fit:fill;
}
span,h4{
    color:white;
}
span{
    font-size:1.38rem;
}
h4{
    margin:0 4px;
}
}
.logout-btn{
    border:none;
    color:#fff;
    background:inherit;
    position:absolute;
    border-radius:inherit;
    padding:inherit;
    width:100%;
    left:0;
    bottom:-2rem;
    cursor:pointer;

}
`
export default Wrapper