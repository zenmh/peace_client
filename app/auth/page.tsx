"use client";

import { Btn, Inp } from "@/components/shared";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Sign up to get connected and new updates.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Inp
                name="name"
                placeholder="Your Name"
                type="text"
                errorMessage=""
              />
            </CardContent>
            <CardFooter>
              <Btn label="Sign Up" className="w-full" />
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Change your password here. After saving, be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Inp
                name="name"
                placeholder="Your Name"
                type="text"
                errorMessage=""
              />
            </CardContent>
            <CardFooter>
              <Btn label="Sign In" className="w-full" />
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Auth;
