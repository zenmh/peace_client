import { useForm } from "react-hook-form";
import { Btn, Inp } from "../shared";
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
    formState: { errors },
  } = useForm<SignUpData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
        <CardContent className="space-y-2">
          <Inp
            name="name"
            placeholder="Your Name"
            type="text"
            register={register}
            errorMessage="Name is requried"
            errors={errors}
          />
        </CardContent>
        <CardFooter>
          <Btn label="Sign Up" type="submit" className="w-full" />
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignUp;
