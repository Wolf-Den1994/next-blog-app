'use client';

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { Suspense } from 'react'

const RedditSuspense = () => {
  return (
    <Suspense>
      <RedditButton />
    </Suspense>
  )
}

const RedditButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <button className="button" onClick={() => signIn('reddit', { callbackUrl })}>
      Sign in with Reddit
    </button>
  )
}

export { RedditSuspense }
