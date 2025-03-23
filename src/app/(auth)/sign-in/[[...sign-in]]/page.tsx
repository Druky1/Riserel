import React, { Suspense } from 'react'
import { SignIn } from '@clerk/nextjs'  
import Loading from '@/app/components/Loading'

const SignInPage = () => {
  return (
  <Suspense fallback={<Loading/>}>
    <section className='h-screen flex justify-center items-center'>
      <SignIn fallbackRedirectUrl={"/"}/>
    </section>
  </Suspense>
  )
}

export default SignInPage 