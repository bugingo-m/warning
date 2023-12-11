import React,{useState,createContext,useContext} from 'react'
import { Outlet,redirect,useLoaderData,useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { Navbar,SmallSidebar,BigSidebar } from '../components'
import {toast} from 'react-toastify'
import customFetch from '../utils/customFetch'
export const loader =async()=>{
  try {
    const {data} = await customFetch.get('/user/current-user')
    return data;
  } catch (error) {
    return redirect('/')
  }
}
const DashboardContext = createContext()

const Dashboard = () => {
  const {user} = useLoaderData()
  const navigate = useNavigate()
  
  const[showSidebar,setShowSidebar] = useState(false)
  const[dialog,setDialog] = useState(false)
  const[deleteItem,setDeleteItem] = useState(false)
  const toggleSidebar =()=>{
    setShowSidebar(!showSidebar)
  }
  const showDialog =()=>{
    setDialog(true)
  }
  const closeDialog =()=>{
    setDialog(false)
  }
  
  const logout=async()=>{
    navigate('/')
    await customFetch.get('/auth/logout')
    toast.success('Logged out...')
  }
  const deleteQuestion =async(id)=>{
    setDeleteItem(true)
    await customFetch.delete(`/questions/${id}`)
    closeDialog()
    setDeleteItem(false)
    navigate('/dashboard/all-questions')
    toast.success('question deleted successfully')
  }
  
  return (
    
      <DashboardContext.Provider 
      value={{
      user,
      showSidebar,
      toggleSidebar,
      logout,
      dialog,
      showDialog,
      closeDialog,
      deleteQuestion
      }}>
        <Wrapper>
          <div className="dashboard">
            
            <BigSidebar/>
            <SmallSidebar/>
            
            {/* <h2>heading</h2> */}
            <div >
              <Navbar/>
              <div className="dashboard-page">
                <Outlet context={{user}}/>
              </div>
            </div>
          </div>
        </Wrapper>
        
        
        
        
        
      </DashboardContext.Provider>
    
  )
}
export const useDashboardContext =()=>useContext(DashboardContext)
export default Dashboard
