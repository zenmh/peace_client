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

type SignUpData = {
  name: string;
  email: string;
  password: string;
  contactNo?: string;
  address?: string;
  image?: string;
};

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpData>();
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
            name="name"
            placeholder="*Your Name"
            type="text"
            register={register}
            errorMessage="Please write your name"
            errors={errors}
          />
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
          <Inp
            name="contactNo"
            placeholder="Contact No"
            type="text"
            register={register}
            errors={errors}
          />
          <Inp
            name="image"
            placeholder=""
            type="file"
            register={register}
            errors={errors}
          />
          <Txtarea control={control} name="address" rows={2} cols={1} />
        </CardContent>
        <CardFooter>
          <Btn
            label="Sign Up"
            type="submit"
            className="w-full"
            disabled={isLoading}
          />
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignUp;
