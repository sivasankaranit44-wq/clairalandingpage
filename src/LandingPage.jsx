import { useState } from "react";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    domain: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = "Name is required";
    if (!formData.email.includes("@")) err.email = "Enter a valid email";
    if (!formData.phone.trim()) err.phone = "Phone number is required";
    if (!formData.type) err.type = "Please select one";
    return err;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const err = validate();
  if (Object.keys(err).length > 0) {
    setErrors(err);
    return;
  }
  setErrors({});

  try {
    await fetch(import.meta.env.VITE_GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(formData),
    });
    setSubmitted(true);
  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">
          Cla<span className="text-blue-500">ira</span>
        </h1>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          Join Waitlist
        </a>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center max-w-3xl mx-auto">
        <span className="inline-block bg-blue-50 text-blue-500 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
          Launching November 2026
        </span>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Your portfolio.{" "}
          <span className="text-blue-500">Perfected by AI.</span>
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
          Claira is an AI portfolio Catalyst built for freshers and career
          switchers. Get personalized guidance on your resume, projects, and
          portfolio, so you land the role you deserve.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-xl text-sm transition"
        >
          Join the Waitlist →
        </a>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            The struggle is real.
          </h2>
          <p className="text-center text-gray-500 mb-14 text-sm">
            Whether you're just starting out or switching careers — the
            portfolio problem hits differently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Freshers */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <span className="text-blue-500 text-lg">🎓</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">For Freshers</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  Don't know what projects to build
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  Resume looks empty with no experience
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  No idea how to stand out from 1000s of applicants
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  Generic portfolio that looks like everyone else's
                </li>
              </ul>
            </div>

            {/* Career Switchers */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <span className="text-blue-500 text-lg">🔄</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">For Career Switchers</h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  Years of experience that feels irrelevant
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  Don't know how to reframe past work for tech roles
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  Competing against CS graduates with no degree
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  Rejected without even getting a callback
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Meet Claira - your personal portfolio catalyst.
          </h2>
          <p className="text-gray-500 text-sm mb-14 max-w-xl mx-auto">
            Claira understands your background, your target role, and where you
            are right now - then gives you a clear, personalized plan to get
            hired.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: "📄",
                title: "Resume Review",
                desc: "Paste your resume and get instant, actionable feedback tailored to your target role.",
              },
              {
                icon: "🛠️",
                title: "Project Suggestions",
                desc: "Claira tells you exactly what projects to build based on the jobs you're applying for.",
              },
              {
                icon: "🎯",
                title: "Portfolio Coaching",
                desc: "Step by step guidance to build a portfolio that makes recruiters stop scrolling.",
              },
              {
                icon: "🔄",
                title: "Career Switch Guidance",
                desc: "Learn how to position your previous experience as a strength, not a gap.",
              },
              {
                icon: "🎤",
                title: "Interview Prep",
                desc: "Practice answers and get feedback on how to talk about your projects confidently.",
              },
              {
                icon: "📈",
                title: "Progress Tracking",
                desc: "Track your portfolio improvements and stay on target for your launch date.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-blue-500 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Built by someone who lived it.
          </h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            "Claira was built by Sivasankaran, someone who knows exactly what it feels like to start over. 
            The confusion,the rejections, the 'where do I even begin'-
            every feature exists because it was needed, not imagined."
          </p>
        </div>
      </section>

      {/* Contact / Waitlist Form */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">
              Get early access.
            </h2>
            <p className="text-gray-500 text-sm">
              Join the waitlist and be the first to know when Claira launches.
              We'd also love to hear what you need most.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center shadow-sm">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-semibold text-lg mb-2">You're on the list!</h3>
              <p className="text-gray-500 text-sm">
                We'll reach out before launch. Thank you for believing in
                Claira!
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <form onSubmit={handleSubmit} noValidate className="space-y-4">

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone number
            </label>
            <input
            type="tel"
            name="phone"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
            </div>

                {/* Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    I am a...
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select one</option>
                    <option value="fresher">Fresher</option>
                    <option value="switcher">Career Switcher</option>
                  </select>
                  {errors.type && (
                    <p className="text-red-500 text-xs mt-1">{errors.type}</p>
                  )}
                </div>

                {/* Domain — shows only if career switcher */}
                {formData.type === "switcher" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      What domain are you switching from?
                    </label>
                    <input
                      type="text"
                      name="domain"
                      placeholder="e.g. Sales, Marketing, Teaching..."
                      value={formData.domain}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What do you need most right now? (optional)
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us your biggest challenge..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg text-sm transition"
                >
                  Join the Waitlist →
                </button>

              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-400">
          © 2026 Claira. Built with ❤️ for freshers and career switchers.
        </p>
      </footer>

    </div>
  );
}
