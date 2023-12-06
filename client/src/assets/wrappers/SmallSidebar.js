import styled from "styled-components";

const Wrapper = styled.div`
    @media(min-width:992px){
        display:none;
    }
    
    .overlay{
        position:fixed;
        left:0;
        top:0;
        background:rgba(0,0,0,0.4);
        height:100vh;
        width:100vw;
        transition:var(--transition);
        margin-top:-1120px;
        z-index:999;
       
    }
    .show{
        
        margin-top:0;
    }
    .container{
        margin:0.5rem auto;
        width:95%;
        height:95%;
        background:#fff;
        border-radius:2px;
        padding:1rem;
        position:relative;
        .close-btn{
            background:transparent;
            border:none;
            position:absolute;
            right:0.5rem;
            top:0.5rem;
            color:red;
            cursor:pointer;
            font-size:1.58rem;
            transition: var(--transition);
            &:hover{
                transform:rotate(90deg);
                
            }
        }
    }
    .navigate-container{
        margin-top:3rem;
        display:flex;
        flex-direction:column;
        .login-1{
            text-transform:capitalize;
            color:var(--red-100);
            background:transparent;
            margin:4px 0;
            padding:4px 0;
            font-size:1rem;
            transition:var(--transition);
            &:hover{
                padding-left:0.3rem;
            }
            
        }
    }
    
`
export default Wrapper