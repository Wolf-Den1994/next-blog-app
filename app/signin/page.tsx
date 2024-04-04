import { RedditButton } from "@/components/RedditButton";
import { SignInForm } from "@/components/SignInForm";

export default async function Signin() {
  return (
    <div className="login">
      <h1>SignIn</h1>
      <RedditButton />
      <div>or</div>
      <SignInForm />
    </div>
  )
}