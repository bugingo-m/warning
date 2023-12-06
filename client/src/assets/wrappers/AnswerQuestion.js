import styled from "styled-components";

const Wrapper = styled.div`
    background:var(--blue-10);
    min-height:inherit;
    padding:2rem;
    p{
      font-weight:700;
    }
    .text-form{
      width:100%;
      margin-top:2rem;
      border-left:none;
      background:#fff;
      padding:0.5rem;
      border-top:4px solid var(--coffee-90);
    }
    .ask-btn{
      background:var(--green-90);
      transition:var(--transition);
      &:hover{
        background:var(--green-70);
        /* color:var(--red-90); */

      }
    }
    
`
export default Wrapper