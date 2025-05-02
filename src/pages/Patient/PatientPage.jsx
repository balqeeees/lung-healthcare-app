import { useState, useEffect } from "react";
import PatientHeader from "@/components/doctor/PatientHeader";
import PatientSummary from "@/components/doctor/PatientSummary";
import { useParams } from "react-router-dom";
import { PATIENTS } from "@/data/patients";
import useMediaQuery from "@/hooks/useMediaQuery";
import AppointmentSidebar from "./PatientSidebar";
import PatientTabs from "@/components/doctor/PatientTabs";



export default function PatientPage() {
  const { id } = useParams();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    if (!id) return;
    if (Array.isArray(PATIENTS)) {
      const foundPatient = PATIENTS.find((p) => p.id.toString() === id);
      setPatient(foundPatient || null);
    } else {
      setPatient(PATIENTS[id] || null);
    }
  }, [id]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <AppointmentSidebar
        patient={patient}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isMobile={isMobile}
      />
      <main className="flex-2 overflow-y-auto">
        <div className="p-4 md:p-6 max-w-screen-xl mx-auto">
          <PatientHeader
            patient={patient}
            setSidebarOpen={setSidebarOpen}
            sidebarOpen={sidebarOpen}
            isMobile={isMobile}
          />
          <PatientSummary patient={patient} />
          {patient && (
            <PatientTabs
              patient={patient}
              reports={Array.isArray(patient.reports) ? patient.reports : []}
            />
          )}
        </div>
      </main>
    </div>
  );
}
