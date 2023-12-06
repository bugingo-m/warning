import styled from "styled-components";

const Wrapper = styled.div`
    h3{
        text-align:center;
        margin:1rem 0;
        padding:0.5rem 0;
        border-bottom: 1px solid var(--blue-60);
        color:var(--blue-100);
    }
    em{
        color:var(--coffee-100);
        font-weight:700;
    }
    ul{
        margin-top:1rem;
        padding-left:3rem;
        li{
            
            list-style-type:square;
        }
    }
`
export default Wrapper