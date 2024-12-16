import NextAuth ,  { DefaultSession }  from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import { db } from "@/lib/db";
import { getUserById } from "@/data/user";
import { UserRole } from "@prisma/client";

 
export const { handlers:{GET,POST}, auth, handlers, signIn, signOut } = NextAuth({
  pages:{
    signIn:"/auth/login",
    error:"/auth/error"
  },
  events: {
    async linkAccount({user}){
      await db.user.update({
        where: { id: user.id },
        data :{emailVerified : new Date()}
      })
    }
  },
  callbacks: {
   
    async session({ session, user, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      // session.user.customField = "Any Thing!"
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt ({token}){
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if(!existingUser)return token;
      token.role = existingUser.role;
      return token;
    }
    
  },
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
});