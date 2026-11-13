import { Link, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { user, isAuthenitcated, login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) login(email, password);
  };

  useEffect(() => {
    if (isAuthenitcated) navigate("/app", { replace: true });
  }, [isAuthenitcated, navigate]);

  return (
    <main className="min-h-screen bg-[#242A2E] px-6 text-white">
      <div className="mx-auto max-w-7xl">
        <Navbar />

        <section className="flex min-h-[calc(100vh-100px)] items-center justify-center py-12">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#2D3439] p-8 shadow-xl">
            {/* Heading */}
            <div className="mb-8 text-center">
              <h1 className="mb-3 text-3xl font-bold">Welcome Back</h1>

              <p className="text-sm text-gray-400">
                Login to continue tracking your adventures.
              </p>
            </div>

            {/* Login Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-white/10 bg-[#242A2E] px-4 py-3 text-white outline-none transition focus:border-[#00C46A] placeholder:text-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-white/10 bg-[#242A2E] px-4 py-3 text-white outline-none transition focus:border-[#00C46A] placeholder:text-gray-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#00C46A] py-3 font-semibold text-[#242A2E] transition hover:bg-[#00A85A]"
              >
                Login
              </button>
            </form>

            {/* Register Link */}
            <p className="mt-7 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-[#00C46A] hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
