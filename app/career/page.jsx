"use client";

import { useState } from "react";
import { Paperclip, CheckCircle, XCircle } from "lucide-react";

export default function CareerPage() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [fileName, setFileName] = useState("");

  const showToast = (type, text) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 3500); // auto-hide after 3.5s
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        showToast("success", data.message || "Resume sent successfully!");
        e.target.reset();
        setFileName("");
      } else {
        showToast("error", data.message || "Something went wrong");
      }
    } catch {
      showToast("error", "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center relative px-4 py-16">
      {/* Toast */}
      {toast && (
        <div
          className={`
            fixed top-6 right-6 px-6 py-4 rounded-xl shadow-xl text-white text-sm font-semibold flex items-center gap-2 animate-slideIn
            ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
          `}
        >
          {toast.type === "success" ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <XCircle className="w-5 h-5" />
          )}
          <span>{toast.text}</span>
        </div>
      )}

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text + Form */}
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
              Careers at iWiz Solutions
            </h1>
            <p className="text-2xl text-blue-600 font-semibold mb-4">
              Join a Team That Builds the Future of Technology
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              At iWiz Solutions, we believe in innovation, creativity, and
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
              impact — iWiz Solutions is the right place for you.
            </p>
          </div>

          {/* Form Card */}
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
                rows="4"
                className="w-full border px-4 py-3 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />

              {/* File Upload */}
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
        <div className="hidden lg:block relative bottom-56">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
            alt="Team at work"
            className="rounded-3xl shadow-2xl object-cover w-full h-[500px] hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-8 left-8 bg-white/80 rounded-xl p-4 shadow-md">
            <p className="font-semibold text-gray-900">
              Innovation. Collaboration. Excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Toast Animation */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
