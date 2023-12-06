import styled,{css} from "styled-components";
//import {css} from "styled-components/macro";

const Wrapper = styled.div`
   
    margin:0.5rem auto;
    padding:0.5rem 0.5rem;
    /* color:white; */
    border-radius:6px;
    width:90%;
    @media (min-width:992px){
        width:100%;
    }
    
    ${({odd})=>{

        if(odd===1){
            return(css`
                 border:1px solid var(--blue-80);
                 border-top:3px solid var(--blue-80);
                  `)
        }
        
        return(css` 
        border:1px solid var(--green-100);
        border-top:3px solid var(--green-100);

         `)
        
        
    }
        
    }
     a{
        display:block;
        
    }
    .edit,.delete{
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
    .first-char{
        ${({odd})=>{

            if(odd===1){
                return(css`
                color:var(--blue-90);`)
            }

            return(css` 
                color:var(--green-90);`)
            }

        }
    }
    .person{
        text-transform:capitalize;
        font-weight:700;
        padding:2px 0;
        border-bottom:1px solid var(--coffee-30);
        .country{
            font-weight:300;
            color:var(--coffee-50);
        }
    }
    .biography{
        width:95%;
        padding:6px 0;
    }
    .learn-more{
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .learn{

        margin:1rem 0;
        padding:0.25rem;
        /* height:2rem; */
        /* background:var(--blue-70); */
        /* border: 1px solid var(--blue-70); */
        color:#fff;
        width:10rem;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:8px;
        ${({odd})=>{

            if(odd===1){
                return(css`
                background:var(--blue-80);`)
            }

            return(css` 
            background:var(--green-80);`)
            }

        }
        span{
            background:transparent;
            color:#fff;
            display:flex;
            align-items:center;
            font-size:inherit;
            margin-bottom:-3px;
        }
    }
    
`
export default Wrapper