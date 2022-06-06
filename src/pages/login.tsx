import { useLogin, useNavigation } from "@pankod/refine-core";
import { useForm } from "@pankod/refine-react-hook-form";
export interface ILoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    refineCore: { formLoading },
  } = useForm<ILoginForm>();

  const { mutate: login } = useLogin<ILoginForm>();

  const onSubmit = (values: any) => {
    login(values);
  };

  return (
    <section className="h-screen grid place-items-center ">
      <form className="space-y-4 w-64" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <input
            className="p-2 w-full rounded"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            type="text"
            placeholder="请输入邮箱地址"
            {...register("email")}
          />
        </div>

        <div className="form-control">
          <button
            type="submit"
            className="bg-black text-white w-full p-2 cursor-pointer hover:bg-black/80 rounded"
            disabled={formLoading}
          >
            登录
          </button>
        </div>
      </form>
    </section>
  );
};
