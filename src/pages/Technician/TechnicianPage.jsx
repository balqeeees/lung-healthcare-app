import React from "react";
import { useNavigate } from "react-router-dom";
import SectionCard from "@/components/Technician/SectionCard";
import DoctorForm from "@/components/Technician/DoctorForm";
import PatientForm from "@/components/Technician/PatientForm";
import ImageUploadForm from "@/components/Technician/ImageUploadForm";
import { UserPlus, Users, ImagePlus } from "lucide-react";

export default function TechnicianPage() {
  const navigate = useNavigate();
  const handleLogout = () => navigate("/");

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <header className="flex justify-between items-center mb-12 max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <img src="/logo-preview.png" alt="Logo" className="w-8 h-8" />
          <span className="font-semibold text-sm text-sky-700">
            Lung Health Care
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 text-sm transition focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          Sign out
        </button>
      </header>

      <main className="space-y-16 max-w-5xl mx-auto">
        <SectionCard title="Register New Doctor" icon={<UserPlus size={20} />}>
          <DoctorForm />
        </SectionCard>

        <SectionCard title="Register New Patient" icon={<Users size={20} />}>
          <PatientForm />
        </SectionCard>

        <SectionCard title="Upload Tissue Image" icon={<ImagePlus size={20} />}>
          <ImageUploadForm />
        </SectionCard>
      </main>
    </div>
  );
}
