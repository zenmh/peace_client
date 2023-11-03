import { useState } from "react";
import { useForm } from "react-hook-form";
import { Btn, Inp, Txtarea } from "../shared";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type SignInData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = handleSubmit((data) => {
    try {
      setLoading(true);
      console.log(data);
    } catch (err) {
      console.log("Error From Sign Up -->", err);
    } finally {
      reset();
      setLoading(false);
    }
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Sign up to get connected and new updates.
        </CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          <Inp
            name="email"
            placeholder="*Enter Email"
            type="email"
            register={register}
            errorMessage="Please enter your email"
            errors={errors}
          />
          <Inp
            name="password"
            placeholder="*Password"
            type="password"
            register={register}
            errorMessage="Please set a strong password"
            errors={errors}
          />
        </CardContent>
        <CardFooter>
          <Btn
            label="Sign In"
            type="submit"
            className="w-full"
            disabled={isLoading}
          />
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignIn;
