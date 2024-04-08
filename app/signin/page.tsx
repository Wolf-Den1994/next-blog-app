import { RedditSuspense } from "@/components/RedditButton";
import { SignInForm } from "@/components/SignInForm";

export default async function Signin() {
  return (
    <div className="content">
      <h1>SignIn</h1>
      <RedditSuspense />
      <div>or</div>
      <SignInForm />
    </div>
  )
}