import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const onSubmit = async (data: any) => {
    setLoading(true);
    router.push("/");
  };

  return (
    <div className="h-screen grid place-items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-80">
        <div className="form-control ">
          <input
            type="email"
            placeholder="Email"
            className="input bg-base-200"
            {...register("email")}
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="Password"
            className="input bg-base-200"
            {...register("password")}
          />
        </div>
        <div className="form-control">
          <button
            type="submit"
            className={["btn btn-primary", loading ? "loading" : ""].join(" ")}
          >
            登录
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
