import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    margin-top:6rem;
    flex-direction:column;
    justify-content:center;
    a{
        color:var(--red-90);
    }
    .active{
        color:var(--blue-40);
    }
    .container1{
    
        
    }
    .link-wrapper{
        display:flex;
        width:100%;
        align-items:center;
        transition:var(--transition);
        margin:0.5rem 0;
        
        span{
            margin-right:0.5rem;
            font-size:1.38rem;
        }
        &:hover{
            padding-left:1rem;
        }
    }
`
export default Wrapper