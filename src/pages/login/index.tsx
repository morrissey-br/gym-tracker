import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCore } from "../../hooks/useCore";

export default () => {
  const core = useCore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await core.auth.login(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black w-80 p-6 pb-8 flex flex-col gap-2 rounded-lg"
      >
        <h1 className="text-center text-2xl">Login</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Senha</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="border rounded-lg p-2"
          />
        </div>
        <button
          type="submit"
          className="mt-2 p-3 border rounded-lg hover:bg-black hover:text-white hover:transition-colors"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
