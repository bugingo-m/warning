import styled from "styled-components";


const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 2rem 0;
    .prev-btn,.next-btn,.page-btn{
        margin:2px;
        padding:6px;
        height:2rem;
        min-width:2rem;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:4px;
        border:1px solid var(--green-50);
        background:transparent;
        color:black;
        transition:all 0.4s;
        span{
            margin-bottom:-4px;

        }
        &:hover{
            background:var(--green-80);
            color:#fff;
            cursor:pointer;
        }


    }
    .active{
        background:var(--green-80);
        color:#fff;
        cursor:pointer;
    }
    .button-container{
        display:flex;
    }
`
export default Wrapper