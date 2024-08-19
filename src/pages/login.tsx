import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-[#494547] text-2xl">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}