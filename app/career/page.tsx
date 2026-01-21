"use client";

import { useState, FormEvent } from "react";
import { Paperclip } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

export default function CareerPage() {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Resume sent successfully!");
        form.reset();
        setFileName("");
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center relative px-4 py-16">
      {/* Toast container */}
      <Toaster position="top-center" />

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT: Text + Form */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
              Careers at IWIZ Solutions
            </h1>
            <p className="text-2xl text-blue-600 font-semibold mb-4">
              Join a Team That Builds the Future of Technology
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              At IWIZ Solutions, we believe in innovation, creativity, and
              teamwork. We are a rapidly growing technology company focused on
              embedded systems, IoT solutions, cloud applications, and digital
              product development. Our mission is to empower businesses with
              smart, reliable, and secure technology — and we are always looking
              for talented individuals to help us build it.
              <br />
              <br />
              We foster a work environment that values growth, curiosity,
              collaboration, and excellence. If you are passionate about
              technology, love solving complex problems, and want to make an
              impact — IWIZ Solutions is the right place for you.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full border px-4 py-3 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border px-4 py-3 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <textarea
                name="message"
                placeholder="Cover Message"
                rows={4}
                className="w-full border px-4 py-3 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              <label
                htmlFor="resumeUpload"
                className="w-full flex items-center justify-center border-2 border-dashed rounded-xl px-4 py-3 cursor-pointer hover:border-blue-500 transition"
              >
                <Paperclip className="mr-2 text-blue-600" />
                <span className="text-gray-700">
                  {fileName || "Click to upload resume (PDF, DOC, DOCX)"}
                </span>
                <input
                  type="file"
                  id="resumeUpload"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition disabled:opacity-60 flex items-center justify-center"
              >
                {loading ? "Sending..." : "Submit Resume"}
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT: Hero Image */}
        <div className="hidden lg:block relative mt-2">
          <img
            src="/careerimg.avif"
            alt="Team at work"
            className="rounded-3xl shadow-2xl object-cover w-full h-[500px] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* FULL-WIDTH BLUE BOX BELOW GRID */}
      <div className="mt-8 w-full max-w-6xl bg-blue-600 text-white text-center rounded-xl py-4 px-6 font-semibold shadow-md">
        No positions open
      </div>
    </div>
  );
}
