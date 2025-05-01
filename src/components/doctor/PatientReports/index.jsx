import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ReportItem from "./ReportItem";
import ReportDialog from "./ReportDialog";
import { useState } from "react";

const PatientReports = ({ patient, patientReports, setPatientReports }) => {
  const [reportDialogOpen, setReportDialogOpen] = useState(false);
  const [reportContent, setReportContent] = useState("");
  const [reportTitle, setReportTitle] = useState("");

  const handleSaveReport = () => {
    if (!reportTitle.trim() || !reportContent.trim()) {
      alert("Please provide both a title and content for the report");
      return;
    }

    const newReport = {
      id: Date.now(), 
      title: reportTitle,
      content: reportContent,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      doctorName: "Dr. ", 
    };

    setPatientReports((prevReports) => [newReport, ...prevReports]);

    setReportContent("");
    setReportTitle("");
    setReportDialogOpen(false);

    console.log("Report saved successfully:", newReport);
  };

  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Medical Reports</CardTitle>
        <Button
          className="bg-blue-600 hover:bg-blue-700"
          size="sm"
          onClick={() => setReportDialogOpen(true)}
        >
          <Plus size={14} className="mr-1" />
          New Report
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {patientReports.length > 0 ? (
            patientReports.map((report) => (
              <ReportItem key={report.id} report={report} />
            ))
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-400 border border-gray-100">
              No reports available
            </div>
          )}
        </div>
      </CardContent>

      <ReportDialog
        open={reportDialogOpen}
        onOpenChange={setReportDialogOpen}
        reportTitle={reportTitle}
        setReportTitle={setReportTitle}
        reportContent={reportContent}
        setReportContent={setReportContent}
        onSave={handleSaveReport}
        patient={patient}
      />
    </Card>
  );
};

export default PatientReports;
