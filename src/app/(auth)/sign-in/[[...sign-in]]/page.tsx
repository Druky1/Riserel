import React from 'react'
import { SignIn } from '@clerk/nextjs'  

const SignInPage = () => {
  return (
    <section className='h-screen flex justify-center items-center'>
      <SignIn fallbackRedirectUrl={"/"}/>
    </section>
  )
}

export default SignInPage 