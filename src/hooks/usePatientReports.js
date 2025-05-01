// src/hooks/usePatientReports.js
import { useState, useEffect } from "react";

export default function usePatientReports(patientId) {
  const [patientReports, setPatientReports] = useState([]);

  useEffect(() => {
    if (patientId) {
      // fetch from an API
      setPatientReports([
        {
          id: 1,
          title: "Annual Checkup",
          content:
            "Patient appears healthy. Blood pressure: 120/80. Heart rate: 72 bpm.",
          date: "April 15, 2025",
          doctorName: "Dr. Smith",
        },
        {
          id: 2,
          title: "Follow-up Report",
          content:
            "Patient recovering well from previous condition. Medications reduced.",
          date: "March 2, 2025",
          doctorName: "Dr. Smith",
        },
        {
          id: 3,
          title: "Initial Consultation",
          content: "New patient intake. General health assessment completed.",
          date: "January 10, 2025",
          doctorName: "Dr. Jones",
        },
      ]);
    }
  }, [patientId]);

  const addReport = (reportTitle, reportContent) => {
    const newReport = {
      id: Date.now(),
      title: reportTitle,
      content: reportContent,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      doctorName: "Dr. You",
    };

    setPatientReports((prevReports) => [newReport, ...prevReports]);
    return newReport;
  };

  return {
    reports: patientReports,
    addReport,
  };
}
