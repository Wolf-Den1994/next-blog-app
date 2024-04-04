import type { AuthOptions } from "next-auth";
import RedditProvider from 'next-auth/providers/reddit';

export const authConfig: AuthOptions = {
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_SECRET,
    })
  ]
}
