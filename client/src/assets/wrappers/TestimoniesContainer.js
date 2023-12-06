import styled from "styled-components";

const Wrapper = styled.div`
    /* width:100%; */
    padding:0 2rem;
    .test-title{
        margin:2rem 0;
        font-weight:700;
        text-align:center;
        text-transform:capitalize;
    }
    .testimonies-container{
        width:100%;
        margin:0 auto;

        
        
    }

@media(min-width:992px){

    .testomonies-container{
        display:grid;
        grid-template-columns:1fr 1fr;
        column-gap:2rem;
    }
    

}

`
export default Wrapper