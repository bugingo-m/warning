import styled from "styled-components";

const Wrapper = styled.aside`
    display:none;
    @media(min-width:992px){
        display:block;
        
        /* box-shadow:1px 1px 2px rgba(0,0,0,0.3); */
        min-height:100vh;
        
        .container{
         padding:1rem; 
         width:15rem;
         margin-left:-15rem;
         transition:all 0.4s;
         position: sticky;
         top:0;  
        }
        .show-sidebar{
            margin-left:0;
        }
    }
`
export default Wrapper