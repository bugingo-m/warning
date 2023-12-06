import styled from "styled-components";

const Wrapper = styled.article`
    margin:1rem auto;
	padding:1rem;
	border-radius:4px;
	border-bottom: 2px solid var(--blue-90);
	border-right: 2px solid gray;
	box-shadow:1px 1px 2px rgba(0,0,0,0.6);
    min-height:6rem;
    p{
        margin:0.38rem 0;
    }
    .date{
        border-bottom:1px solid var(--green-20);
        p{
            color:var(--blue-70);
            span{
                color:var(--coffee-60);
            }
        }
    }
    .qn{
        font-weight:700;
        
    }
    a{
        display:block;
        
    }
    .answer,.edit,.delete{
        height:30px;
        display:flex;
        align-items:center;
        padding:4px;
        margin:4px;
        border-radius:4px;
        min-width:4.5rem;
        text-transform:capitalize;
        &:hover{
            cursor:pointer;
        }

    }
    
    .answer{
        background:transparent;
        border: 1px solid var(--blue-70);
        color:var(--blue-70);
    }
    .edit{
        background:transparent;
        border: 1px solid var(--green-90);
        color:var(--green-90);
        

    }
    .delete{
        background:transparent;
        border: 1px solid var(--red-80);
        color:var(--red-80);
        

    }
    
    .action-btns{
        margin-top:1rem;
        display:flex;
        justify-content:end;
        align-items:center;
    }
    .details{
       border:none;
       background:transparent;
       color:var(--blue-90);
       font-size:inherit; 
       
       
    }
    .align-1{
        display:flex;
        align-items:center;
       }
    .align-2{
        display:flex;
        align-items:center;
       }
`
export default Wrapper