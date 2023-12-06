import styled from "styled-components";

const Wrapper = styled.section`
    padding:2rem;
    min-height:inherit;
    width:100%;
    @media (min-width:992px){
        display:grid;
        grid-template-columns:1fr auto;
        grid-template-rows:1fr;
        column-gap:2rem;
    }
`
export default Wrapper