'use client';

import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

const RedditButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <button className="button" onClick={() => signIn('reddit', { callbackUrl })}>
      Sign in with Reddit
    </button>
  )
}

export { RedditButton }
