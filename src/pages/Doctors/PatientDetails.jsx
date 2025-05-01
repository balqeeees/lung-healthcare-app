import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { User } from "lucide-react";

import useMediaQuery from "@/hooks/useMediaQuery";
import usePatientReports from "@/hooks/usePatientReports";

import PatientSidebar from "@/components/doctor/PatientSidebar";
import PatientHeader from "@/components/doctor/PatientHeader";
import ReportDialog from "@/components/doctor/PatientReports/ReportDialog";
import PatientTabs from "@/components/doctor/PatientTabs";
import PatientSummary from "@/components/doctor/PatientSummary";


import { PATIENTS } from "@/data/patients";

export default function PatientDetails() {
  const { id } = useParams();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [reportDialogOpen, setReportDialogOpen] = useState(false);

const [patient, setPatient] = useState(PATIENTS?.[id] ?? null);

useEffect(() => {
  setPatient(PATIENTS?.[id] ?? null);
}, [id]);

  const { reports, addReport } = usePatientReports(id);

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [isMobile]);

  const handleSaveReport = (title, content) => {
    const newReport = addReport(title, content);
    setReportDialogOpen(false);
    console.log("Report saved successfully:", newReport);
  };

  const handleImageUpload = (newImage) => {
    setPatient((prev) => ({
      ...prev,
      images: [...(prev?.images ?? []), newImage],
    }));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <PatientSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        patients={PATIENTS}
        selectedPatientId={Number(id)}
        isMobile={isMobile}
      />

      <main className="flex-1 flex flex-col overflow-auto">
        <PatientHeader
          patient={patient}
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
          isMobile={isMobile}
          onNewReport={() => setReportDialogOpen(true)}
        />
        <PatientSummary patient={patient} />

        {patient ? (
          <div className="p-4 md:p-6 max-w-6xl mx-auto w-full">
            <PatientTabs
              patient={patient}
              reports={reports}
              onNewReport={() => setReportDialogOpen(true)}
              onImageUpload={handleImageUpload}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <User size={60} className="mb-4 opacity-30" />
            <p className="text-lg">Select a patient to view details</p>
            <p className="text-sm mt-2">
              Access patient records from the directory
            </p>
          </div>
        )}

        {patient && (
          <ReportDialog
            open={reportDialogOpen}
            onOpenChange={setReportDialogOpen}
            patient={patient}
            onSave={handleSaveReport}
          />
        )}
      </main>
    </div>
  );
}
