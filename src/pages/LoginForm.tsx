import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="mb-10 flex justify-center">
        <Image src={`/next.svg`} alt="More Logo" width={400} height={200} />
      </div>
      <form className="space-y-12 w-full sm:w-[400px]" onSubmit={onSubmit}>
        <div className="grid w-full items-center gap-1.5">
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded bg-gray-50 px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded bg-gray-50 px-4 py-2 w-full"
          />
        </div>

        {error && <div className="p-2 rounded bg-red-200">{error}</div>}
        <div className="w-full">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
};
