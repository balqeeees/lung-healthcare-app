// src/components/doctor/PatientReports/ReportDialog.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function ReportDialog({ open, onOpenChange, patient, onSave }) {
  const [reportTitle, setReportTitle] = useState("");
  const [reportContent, setReportContent] = useState("");

  const handleSave = () => {
    if (!reportTitle.trim() || !reportContent.trim()) {
      alert("Please provide both a title and content for the report");
      return;
    }

    onSave(reportTitle, reportContent);
    resetForm();
  };

  const resetForm = () => {
    setReportTitle("");
    setReportContent("");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen) => {
        if (!newOpen) resetForm();
        onOpenChange(newOpen);
      }}
    >
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Medical Report - {patient?.name}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="flex flex-wrap gap-3 mb-4 text-sm">
            <div className="bg-gray-50 px-3 py-1 rounded">
              <span className="text-gray-500">Date:</span>{" "}
              <span className="font-medium">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <div className="bg-gray-50 px-3 py-1 rounded">
              <span className="text-gray-500">Patient ID:</span>{" "}
              <span className="font-medium">{patient?.id}</span>
            </div>
            <div className="bg-gray-50 px-3 py-1 rounded">
              <span className="text-gray-500">DOB:</span>{" "}
              <span className="font-medium">{patient?.birthdate}</span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Report Title
            </label>
            <input
              type="text"
              value={reportTitle}
              onChange={(e) => setReportTitle(e.target.value)}
              placeholder="Enter report title (e.g., Annual Checkup, Follow-up)"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Report Content
          </label>
          <Textarea
            value={reportContent}
            onChange={(e) => setReportContent(e.target.value)}
            placeholder="Enter your detailed medical report here. Include diagnosis, symptoms, treatment plan, and any recommendations for the patient."
            className="min-h-52 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Save Report
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
