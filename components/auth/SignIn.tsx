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
import { Eye, EyeOffIcon } from "lucide-react";

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
  const [passType, setPassType] = useState<"password" | "text">("password");

  const handleShowPassword = () => {
    if (passType === "password") setPassType("text");
    else setPassType("password");
  };

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
          <div className="relative">
            <Inp
              name="password"
              placeholder="*Password"
              type={passType}
              register={register}
              errorMessage="Please set a strong password"
              errors={errors}
            />
            <button
              type="button"
              onClick={handleShowPassword}
              className="absolute top-0 right-0 transform z-10 cursor-default text-gray-500 hover:text-gray-600 py-2 px-3 text-lg"
            >
              {passType === "password" ? <EyeOffIcon /> : <Eye />}
            </button>
          </div>
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
