"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn, signInWithGoogle } from "../../../lib/auth";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    setLoginError(null);
    try {
      await signIn(data.email, data.password);
      router.push("/");
    } catch (error: any) {
      setLoginError(error.message || "Invalid email or password");
    }
  };

  const handleGoogleLogin = async () => {
    setLoginError(null);
    try {
      await signInWithGoogle();
      router.push("/");
    } catch (err) {
      console.error(err);
      setLoginError("Google login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 space-y-5">
        <h2 className="text-2xl font-bold text-center">Sign in</h2>

        {/* Google Login (PRIMARY) */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn bg-white text-black border border-gray-300 w-full flex gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 512 512">
            <path fill="#EA4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"/>
            <path fill="#FBBC05" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73z"/>
            <path fill="#34A853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341z"/>
            <path fill="#4285F4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57z"/>
          </svg>
          Continue with Google
        </button>

        <div className="divider">OR</div>

        {/* Email Login */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {loginError && (
            <p className="text-red-500 text-center">{loginError}</p>
          )}

          <button
            type="submit"
            className={`btn btn-primary w-full ${
              isSubmitting ? "loading" : ""
            }`}
            disabled={isSubmitting}
          >
            Sign in with email
          </button>
        </form>

        {/* Footer text – EMAIL ONLY */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account for email login?{" "}
          <a href="/register" className="link link-primary">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
