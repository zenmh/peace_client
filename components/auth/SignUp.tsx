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
