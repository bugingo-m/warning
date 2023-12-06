import styled from "styled-components";

const Wrapper = styled.article`
    display:none;
    
    @media (min-width:992px){
        display:block;
        align-self:start;
        padding:1rem 1rem;
        margin-top:1rem;
        margin-bottom:2rem;
        /* padding:1.38rem; */
	    box-shadow:2px 2px 4px rgba(0,0,0,0.4);
	    border-radius:4px;
	    background-color:var(--coffee-40);
	    color:#fff;
        h3{
            margin:0.5rem 0;
            color:var(--green-90);
        }
        .change-btns{
            display:flex;
            background:#fff;
            align-items:center;
            justify-content:center;
            padding:0.3rem 0;
            border-radius:4px;
        }
        .prev-btn,.next-btn{
        margin:2px;
        padding:6px;
        height:2rem;
        display:flex;
        align-items:center;
        border-radius:4px;
        border:1px solid var(--green-50);
        background:transparent;
        color:black;
        transition:all 0.4s;
        span{
            margin-bottom:-3px;

        }
        &:hover{
            background:var(--green-80);
            color:#fff;
            cursor:pointer;
        }

    }
`
export default Wrapper;