import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "~/utils/supabaseClient";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn(data);
      if (error) {
        console.log(error);
        throw error;
      }
      router.push("/");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen grid place-items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-80">
        <div className="form-control ">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
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
