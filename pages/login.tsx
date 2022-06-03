import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "~/utils/supabaseClient";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<unknown>();
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
        throw error;
      }
      alert("邮件已发送到您的邮箱");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="h-screen grid place-items-center">
      {!session ? (
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
              className={["btn btn-primary", loading ? "loading" : ""].join(
                " "
              )}
            >
              登录
            </button>
          </div>
        </form>
      ) : (
        <div>已登录</div>
      )}
    </div>
  );
};

export default Login;
