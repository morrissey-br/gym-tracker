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
      await core.authService.login(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-96 p-6 pb-8 flex flex-col gap-2 rounded"
      >
        <h1 className="text-center text-2xl">Login</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="border border-dark rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Senha</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="border border-dark rounded p-2"
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
