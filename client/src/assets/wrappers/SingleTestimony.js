import styled from "styled-components";

const Wrapper = styled.div`
    padding:0 2rem;
    /* width:95%; */
    .head{
        border-bottom:4px double var(--green-70);
        h2{
            padding:0.2rem 0;
        }
        p{
            text-transform:uppercase;
            color:var(--coffee-60);   
        }
        
    }
    .img-wrapper{
        @media(min-width:992px){
            width:30rem;
            height:30rem;
        }
           width:20rem;
           height:20rem;
            margin:0 auto;
            padding:0.5rem 0;
            /* border-radius:4px; */
            .img{
                width:100%;
                height:100%;
                display:block;
                object-fit:cover;
                border-radius:2px;

            }
        }
        .link{
            padding:0.3rem 0;
        }
        .line{
           
           padding-bottom:0.5rem;
           /* max-width:992px; */
           
        }

`
export default Wrapper;