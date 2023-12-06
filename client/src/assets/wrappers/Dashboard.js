import styled from "styled-components";

const Wrapper = styled.section`
	.dashboard {
		display:grid;
		 grid-template-columns:1fr; 
		/* grid-template-columns: auto 1fr; */
	}
    
	
    @media (min-width:992px){
		.dashboard {
			display:grid;
			grid-template-columns: auto 1fr;
			
			
		}
        
    }
	.dashboard-page{
		background:#fff;
		padding:0.75rem;
		margin:0 auto;
		min-height:calc(100vh - 6rem);
		/* max-width:fit-content; */
		
	}
	
`
export default Wrapper