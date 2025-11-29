import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Tailwind CSS is assumed to be available in the project.
// This single-file React component is a professional, modern, 3D-looking landing page
// with Login and Signup modals. Replace placeholder text and integrate backend as needed.

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const px = (y / rect.height) * 20; // rotationX
      const py = -(x / rect.width) * 20; // rotationY
      setTilt({ x: px, y: py });
    };

    const handleLeave = () => setTilt({ x: 0, y: 0 });

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Intro Card */}
        <motion.div
          ref={cardRef}
          style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 lg:p-12 bg-gradient-to-tr from-white/5 via-white/3 to-white/2 backdrop-blur-md border border-white/10 shadow-2xl"
        >
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-400 opacity-30 blur-2xl" style={{ zIndex: -1 }} />

          <header className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300">Milkias</span>'s Projects</h1>
              <p className="mt-3 text-slate-300 max-w-xl">A collection of curated projects, code experiments, and engineering notes. Professional, modern, and interactive — built with care.</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setShowLogin(true)} className="px-4 py-2 rounded-full bg-white/8 hover:bg-white/12 border border-white/10 backdrop-blur-sm">Login</button>
              <button onClick={() => setShowSignup(true)} className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-slate-900 font-semibold shadow-lg transform hover:scale-105">Sign Up</button>
            </div>
          </header>

          <main className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <section className="space-y-3 p-4 rounded-xl bg-gradient-to-b from-white/3 to-white/2 border border-white/5">
              <h3 className="text-lg font-semibold">Featured Project</h3>
              <p className="text-slate-300 text-sm">Telegram automation tools and developer utilities. Click below to explore source, demos and live bots.</p>
              <div className="mt-3 flex items-center gap-3">
                <a href="#projects" className="text-sm font-medium underline underline-offset-4">View projects</a>
                <a href="#contact" className="text-sm text-slate-300">Contact</a>
              </div>
            </section>

            <section className="p-4 rounded-xl bg-gradient-to-b from-white/3 to-white/2 border border-white/5">
              <h3 className="text-lg font-semibold">Quick Stats</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-300">
                <li><strong className="text-white">12</strong><div>Projects</div></li>
                <li><strong className="text-white">4</strong><div>Open-source repositories</div></li>
                <li><strong className="text-white">50k</strong><div>Lines of code</div></li>
                <li><strong className="text-white">3</strong><div>Active bots</div></li>
              </ul>
            </section>
          </main>

        </motion.div>

        {/* Right: 3D Project Showcase */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">
          <div className="rounded-2xl p-6 bg-gradient-to-b from-white/4 to-white/2 border border-white/6 shadow-xl transform-gpu" style={{ perspective: 1200 }}>
            <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-2 items-center">
              <div className="rounded-xl p-4 bg-gradient-to-r from-slate-900/60 to-slate-900/30 border border-white/5 shadow-inner">
                <h4 className="text-xl font-semibold">Telegram Automation</h4>
                <p className="mt-2 text-slate-300 text-sm">A robust Pyrogram-based bot for auctions, group creation, and moderation. Supports bidding, verification flows, and admin tools.</p>
                <div className="mt-4 flex gap-3">
                  <a className="px-3 py-2 text-sm border rounded-md" href="#">Read doc</a>
                  <a className="px-3 py-2 text-sm bg-white/6 rounded-md" href="#">GitHub</a>
                </div>
              </div>

              <div className="mx-auto">
                {/* 3D-esque device mockup */}
                <div className="w-56 h-36 rounded-2xl bg-gradient-to-tr from-indigo-600 to-pink-500 shadow-2xl transform rotate-6 translate-x-6" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-b from-white/4 to-white/2 border border-white/6 shadow-xl overflow-hidden">
            <h4 className="text-lg font-semibold">About Me</h4>
            <p className="mt-2 text-slate-300 text-sm">Hi — I'm Milkias, a Computer Science student and developer focusing on automation, bots, and tools that scale. I love clean code, open-source, and building practical systems.</p>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white/3">
                <div className="text-sm">Role</div>
                <div className="font-medium">Developer</div>
              </div>
              <div className="p-3 rounded-lg bg-white/3">
                <div className="text-sm">Focus</div>
                <div className="font-medium">Automation & Bots</div>
              </div>
            </div>
          </div>

          <div id="projects" className="rounded-2xl p-6 bg-gradient-to-b from-white/3 to-white/2 border border-white/6 shadow-2xl">
            <h4 className="text-lg font-semibold">Selected Projects</h4>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "HMA Hexa auction", desc: "Telegram auction bot with bidding & approval flows" },
                { title: "Auto Group Creator", desc: "Utility for generating templated Telegram groups" },
                { title: "Portfolio site", desc: "This website and design system" },
                { title: "CLI tools", desc: "Small productivity scripts & helpers" },
              ].map((p) => (
                <article key={p.title} className="p-3 rounded-lg bg-white/5 border border-white/6">
                  <h5 className="font-semibold">{p.title}</h5>
                  <p className="text-sm text-slate-300 mt-1">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <Modal title="Login" onClose={() => setShowLogin(false)}>
          <AuthForm type="login" onClose={() => setShowLogin(false)} switchToSignup={() => { setShowLogin(false); setShowSignup(true); }} />
        </Modal>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <Modal title="Create an account" onClose={() => setShowSignup(false)}>
          <AuthForm type="signup" onClose={() => setShowSignup(false)} switchToLogin={() => { setShowSignup(false); setShowLogin(true); }} />
        </Modal>
      )}
    </div>
  );
}

function Modal({ children, title, onClose }) {
  useEffect(() => {
    const handle = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.18 }} className="relative z-10 w-full max-w-md rounded-2xl bg-gradient-to-b from-white/5 to-white/3 p-6 border border-white/8 shadow-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} aria-label="Close modal" className="text-slate-300">✕</button>
        </div>
        <div className="mt-4">{children}</div>
      </motion.div>
    </div>
  );
}

function AuthForm({ type = "login", onClose, switchToSignup, switchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const submitting = false; // placeholder for integration

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email || !password || (type === "signup" && !name)) {
      setError("Please fill all fields.");
      return;
    }
    // TODO: wire up to your auth backend (e.g. OAuth / JWT / Firebase / custom API)
    console.log({ type, name, email, password });
    alert(`${type === "login" ? "Logged in" : "Account created"} (demo)`);
    onClose?.();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === "signup" && (
        <div>
          <label className="text-sm">Full name</label>
          <input className="mt-1 w-full rounded-md p-2 bg-white/5 border border-white/6" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      )}

      <div>
        <label className="text-sm">Email</label>
        <input type="email" className="mt-1 w-full rounded-md p-2 bg-white/5 border border-white/6" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <label className="text-sm">Password</label>
        <input type="password" className="mt-1 w-full rounded-md p-2 bg-white/5 border border-white/6" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      {error && <div className="text-sm text-rose-400">{error}</div>}

      <div className="flex items-center justify-between gap-3">
        <button type="submit" className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-slate-900 font-semibold shadow">{submitting ? "Working..." : type === "login" ? "Log in" : "Create account"}</button>
        <div className="text-sm text-slate-300">{type === "login" ? (
          <span>New? <button type="button" onClick={switchToSignup} className="underline">Create account</button></span>
        ) : (
          <span>Have an account? <button type="button" onClick={switchToLogin} className="underline">Log in</button></span>
        )}</div>
      </div>
    </form>
  );
}

/*
  How to use:
  - Add this file to a React + Tailwind project.
  - Ensure framer-motion is installed: `npm install framer-motion`.
  - Tailwind must be set up in your build pipeline (postcss / vite / CRA).
  - Replace placeholder links and strings with your real content.

  This component is intentionally self-contained and focuses on
  structure, accessibility, responsiveness and a modern 3D look.
*/
