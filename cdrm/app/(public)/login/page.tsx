"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "../../../lib/auth";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
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
      window.location.href = "/dashboard"; // Redirect after login
    } catch (error: any) {
      console.error("Login failed:", error);
      setLoginError(error.message || "Login failed. Check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-96 bg-base-100 shadow-xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Login error */}
        {loginError && <p className="text-red-500 text-center">{loginError}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className={`btn btn-primary w-full ${isSubmitting ? "loading" : ""}`}
          disabled={isSubmitting}
        >
          Login
        </button>
      </form>
    </div>
  );
}
