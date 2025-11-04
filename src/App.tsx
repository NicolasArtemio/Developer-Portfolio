import { useState } from "react";
import {
  Contact,
  Footer,
  LanguageSwitcher,
  ProjectsSection,
  SkillsSection,
} from "./components";
import HeroSection from "./components/HeroSection";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Mensaje enviado 🚀");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      <div className="flex justify-end p-4">
        <LanguageSwitcher />
      </div>
      {/* Hero */}
      <HeroSection />
      {/* Habilidades */}
      <SkillsSection />
      {/* Proyectos */}
      <ProjectsSection />
      {/* Contacto */}
      <Contact
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {/* Footer */}
      <Footer />
    </div>
  );
}
