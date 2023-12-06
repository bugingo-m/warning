import styled from "styled-components";


const Wrapper = styled.div`
    height:6rem;
    /*  */
    border-bottom:none;
    position:sticky;
    top:0;
    
    
    .nav-1{
        background:var(--blue-10);
        padding:0 2rem;
        width:auto; 
        /* max-width:100vw; */
        margin:0 auto;
        
        border-bottom:none;
        
        
        
    }
    .container{
        display:flex;
        align-items:center;
        padding:1rem;
        justify-content:space-between;
        
        
    }
    .title{
        display:flex;
        
    }
    .nav-title{
        display:none;
        @media (min-width:992px){
            display:block;
            margin-left:4px;
        }
    }
    .toggle{
        border:none;
        color:var(--blue-80);
        background:transparent;
        font-size:2rem;
        cursor:pointer;
        
    }
    .img-1{
        color:var(--yellow-80);
        background:transparent;
        font-size:2.5rem;
        margin-top:-0.2rem;
    }
`
export default Wrapper