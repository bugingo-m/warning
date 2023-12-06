import styled from "styled-components";


const Wrapper = styled.div`
    
    .overlay{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        min-height:100vh;
        height:100%;
        background:rgba(0,0,0,0.3);
        /* margin-top:0; */
        display: grid;
        align-items:center;
        justify-content:center;
        /* z-index:-1;
        opacity:0;
        visibility:hidden; */
        
        
    }
    .show-dialog{
        /* z-index:99;
        opacity:1;
        visibility:visible; */
       margin-top:0;
    }
    .container{
        background:#fff;
        border-radius:4px;
        padding:1rem;
        width:60vw;
        position:relative;
        .close-btn{
            border:none;
            background:transparent;
            cursor:pointer;
            position:absolute;
            right:0.5rem;
            top:0.5rem;
            font-size:1.38rem;
            

        }
        h4{
            text-transform:none;
            color:#222;
            font-weight:700;
        }
        p{
            margin:0.5rem 0;
        }
        .btn-container{
            display:flex;
            justify-content:flex-end;
            align-items:center;
            button,a{
                background:none;
                border:none;
                margin:3px;
                cursor:pointer;
                /* width:6vw; */
                min-width:4rem;
                height:30px;
                padding:3px;
                border-radius:2px;
            }
            
            .ok{
                background:var(--red-90);
                color:white;
                
            }
            .cancel{
                box-shadow:1px 1px 2px;
                color:black;
            }
        }
    }
    
    /* display: grid;
    align-items:center;
    justify-content:center; */
    

`
export default Wrapper