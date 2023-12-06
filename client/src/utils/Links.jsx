import React from "react";
import {BsQuestionSquare,BsWalletFill} from 'react-icons/bs'
import {SiSinglestore} from 'react-icons/si'
import {CgProfile} from 'react-icons/cg'
// import { IoMdHome } from "react-icons/io";
import {BiCustomize,BiBorderAll} from 'react-icons/bi'
const links=[
   
   {
      id:1,
      icon:<BiBorderAll/>,
      name:'Testimonies',
      path:'.'
   },
   {
      id:2,
      icon:<SiSinglestore/>,
      name:'Add testimony',
      path:'add-testimony'
   },
 {
    id:3,
    icon:<BsQuestionSquare/>,
    name:'Ask',
    path:'ask'
 },
 {
   id:4,
   icon:<BsWalletFill/>,
   name:'Q&A',
   path:'all-questions'
},


{
   id:5,
   icon:<CgProfile/>,
   name:'profile',
   path:'profile'
},
{
   id:6,
   icon:<BiCustomize/>,
   name:'my questions',
   path:'my-questions'
},

]
export default links;