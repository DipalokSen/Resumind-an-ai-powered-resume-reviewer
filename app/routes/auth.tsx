import React from 'react'
import { usePuterStore } from '~/lib/puter'

import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

const auth = () => {
  
  const {isLoading,auth}=usePuterStore()
  const location =useLocation()
  const next=location.search.split('next=')[1]
  const navigate=useNavigate()

  useEffect(() => {
    if(auth.isAuthenticated){
      navigate(next)
    }
  }, [auth.isAuthenticated,next]);
  
    return (
    <main className="bg-[url('images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className='gradient-border shadow-lg'>
        <section className='flex flex-col bg-white gap-8 rounded-2xl p-10'>
            <div className='flex flex-col items-center gap-2 text-center'>
                <h1>Welcome</h1>
                <h2>Log In To Start Your Journey</h2>
            </div>

            
        </section>

         {isLoading ? (
       <button className='auth-button animate-pulse'>
         Signing-in...
       </button>
         ):(<>
         
            {auth.isAuthenticated?(
                <button className='auth-button' onClick={auth.signOut}>
                    <p>Sign Out</p>
                </button>
            ):(
                <button className='auth-button' onClick={auth.signIn}>
                    <p>Sign-in</p>
                </button>
            )}
          
         </>)}
      </div>
    </main>
  )
}

export default auth


//