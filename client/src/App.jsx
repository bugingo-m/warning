import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import {
  HomeLayout,
  Landing,
  Login,
  Register,
  AddQuestion,
  AddTestimony,
  AllQuestions,
  AllTestimonies,
  AnswerQuestion,
  Dashboard,
  EditQuestion,
  EditTestimony,
  SingleTestimony,
  Profile,
  MyQuestions,
  Author,
  Preparations,
  Home,
  DeleteQuestion,
  DeleteTestimony,
  Error
} from './pages'

import {action as registerAction} from './pages/Register'
import {action as loginAction} from './pages/Login'
import {loader as dashboardLoader} from './pages/Dashboard'
import {action as addQuestionAction} from './pages/AddQuestion'
import {loader as allQuestionsLoader} from './pages/AllQuestions'
import {loader as editQuestionLoader} from './pages/EditQuestion'
import {action as editQuestionAction} from './pages/EditQuestion'
import {action as deleteQuestionAction} from './pages/DeleteQuestion'
import {action as answerQuestionAction} from './pages/AnswerQuestion'
import {loader as answerQuestionLoader} from './pages/AnswerQuestion'
import {action as profileAction} from './pages/Profile'
import {action as addTestimonyAction} from './pages/AddTestimony'
import {loader as allTestimoniesLoader} from './pages/AllTestimonies'
import {loader as myQuestionsLoader} from './pages/MyQuestions'
import {loader as singleTestimonyLoader} from './pages/SingleTestimony'
import {action as deleteTestimonyAction} from './pages/DeleteTestimony'
import {loader as editTestimonyLoader} from './pages/EditTestimony'
import {action as editTestimonyAction} from './pages/EditTestimony'
import {action as deleteMyQuestionAction} from './pages/DeleteMyQuestion'
const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Landing/>,
        children:[
          {
            index:true,
            element:<Home/>
          },
          {
            path:'/preparations',
            element:<Preparations/>,
          },
          {
            path:'/author',
            element:<Author/>,
          }
        ]
      },
      {
        path:'/register',
        element:<Register/>,
        action:registerAction
      },
      {
        path:'/login',
        element:<Login/>,
        action:loginAction
      },
      {
        path:'/dashboard',
        element:<Dashboard/>,
        loader: dashboardLoader,
        children:[
          {
            path:'all-questions',
            element:<AllQuestions/>,
            loader:allQuestionsLoader
          },
          {
            path:'ask',
            element:<AddQuestion/>,
            action:addQuestionAction,
          },
          {
            path:'edit-question/:id',
            element:<EditQuestion/>,
            action:editQuestionAction,
            loader:editQuestionLoader
          },
          {
            path:'answer/:id',
            element:<AnswerQuestion/>,
            action:answerQuestionAction,
            loader:answerQuestionLoader
          },
          {
            path:'delete-question/:id',
            // element:<DeleteQuestion/>,
            action:deleteQuestionAction
            
          },
          
          {
            path:'delete-testimony/:id',
            // element:<DeleteTestimony/>,
            action:deleteTestimonyAction 
          },
          {
            path:'my-questions',
            element:<MyQuestions/>,
            loader:myQuestionsLoader,
          },
          {
            path:'delete-myquestion/:id',
            // element:<DeleteQuestion/>,
            action:deleteMyQuestionAction
          },
          {
            index:true,
            element:<AllTestimonies/>,
            loader:allTestimoniesLoader
          },
          {
            path:'add-testimony',
            element:<AddTestimony/>,
            action:addTestimonyAction
          },
          {
            path:'edit-testimony/:id',
            element:<EditTestimony/>,
            action:editTestimonyAction,
            loader:editTestimonyLoader
          },
          {
            path:'single-testimony/:id',
            element:<SingleTestimony/>,
            loader:singleTestimonyLoader,
          },
          {
            path:'profile',
            element:<Profile/>,
            action:profileAction,
          },
        ]
      }
    ]

  }
])


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000 * 60 *5,
    },
  },
})
function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>

    </QueryClientProvider>
  )
}

export default App
