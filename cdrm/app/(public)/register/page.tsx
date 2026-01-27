"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signUp, signInWithGoogle } from "../../../lib/auth";

type RegisterFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const router = useRouter();
  const [registerError, setRegisterError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>();

  const onSubmit = async (data: RegisterFormInputs) => {
    setRegisterError(null);
    try {
      await signUp(data.email, data.password);
      router.push("/dashboard");
    } catch (error: any) {
      setRegisterError(error.message || "Registration failed");
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await signInWithGoogle();
      router.push("/dashboard");
    } catch {
      setRegisterError("Google sign-up failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card w-96 bg-base-100 shadow-xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            {...register("email", {
              required: "Email is required",
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
            {...register("confirmPassword", {
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {registerError && (
          <p className="text-red-500 text-center">{registerError}</p>
        )}

        <button
          type="submit"
          className={`btn btn-primary w-full ${isSubmitting ? "loading" : ""}`}
          disabled={isSubmitting}
        >
          Register
        </button>

        <div className="divider">OR</div>

        <button
          type="button"
          onClick={handleGoogleRegister}
          className="btn btn-outline w-full"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="link link-primary">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
