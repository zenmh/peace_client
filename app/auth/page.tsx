"use client";

import { SignIn, SignUp } from "@/components/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  return (
    <section className="flex flex-row items-center justify-center min-h-screen">
      <Tabs defaultValue="signin" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="signin">Sign In</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <SignUp />
        </TabsContent>
        <TabsContent value="signin">
          <SignIn />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Auth;
