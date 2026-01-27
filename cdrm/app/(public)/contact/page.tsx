"use client";

import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error || "Failed to send message");

      alert(result.message);
      reset();
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Failed to send message. Try again later.");
    }
  };

  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-gray-600 mb-10 text-center">
        Have questions or want to collaborate? Send us a message.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-100 p-8 rounded-lg shadow-md space-y-6"
      >
        {/* Name */}
        <div>
          <label className="label"><span className="label-text">Name</span></label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full"
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="label"><span className="label-text">Email</span></label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
            })}
            className="input input-bordered w-full"
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        {/* Subject */}
        <div>
          <label className="label"><span className="label-text">Subject</span></label>
          <input
            type="text"
            {...register("subject", { required: "Subject is required" })}
            className="input input-bordered w-full"
          />
          {errors.subject && <p className="text-red-500 mt-1">{errors.subject.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="label"><span className="label-text">Message</span></label>
          <textarea
            {...register("message", { required: "Message is required" })}
            rows={5}
            className="textarea textarea-bordered w-full"
          />
          {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className={`btn btn-primary w-full ${isSubmitting ? "loading" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitSuccessful ? "Sent!" : "Send Message"}
          </button>
        </div>
      </form>
    </main>
  );
}
