import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, ClipboardList, FileText, FileUp, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import PatientTimeline from "@/components/doctor/PatientTimeline";
import LatestScan from "@/components/doctor/LatestScan";

export default function PatientTabs({
  patient,
  reports,
  onNewReport,
  onImageUpload,
}) {
  const fileInputRef = useRef(null); 

  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && onImageUpload) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload({
          url: reader.result,
          label: file.name,
          date: new Date().toISOString().split("T")[0],
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="mb-6">
        <TabsTrigger
          value="overview"
          className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
        >
          <Activity size={16} className="mr-1" />
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="reports"
          className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
        >
          <ClipboardList size={16} className="mr-1" />
          Reports
        </TabsTrigger>
        <TabsTrigger
          value="images"
          className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
        >
          <FileText size={16} className="mr-1" />
          Images
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="m-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <PatientTimeline reports={reports} />
          </div>

          <div className="space-y-6">
            <LatestScan patient={patient} />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="reports" className="m-0">
        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Medical Reports</CardTitle>
            {onNewReport && typeof onNewReport === "function" && (
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                size="sm"
                onClick={onNewReport}
              >
                <Plus size={14} className="mr-1" />
                New Report
              </Button>
            )}
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {reports.length > 0 ? (
                reports.map((report) => (
                  <Dialog key={report.id}>
                    <DialogTrigger asChild>
                      <Card className="bg-white hover:bg-gray-50 cursor-pointer border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-gray-800 font-medium">
                                {report.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {report.date} • {report.doctorName}
                              </div>
                            </div>
                            <FileText size={16} className="text-blue-500" />
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{report.title}</DialogTitle>
                      </DialogHeader>
                      <div className="py-4">
                        <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-500">
                          <div>
                            Date:{" "}
                            <span className="font-medium text-gray-700">
                              {report.date}
                            </span>
                          </div>
                          <div>
                            Doctor:{" "}
                            <span className="font-medium text-gray-700">
                              {report.doctorName}
                            </span>
                          </div>
                        </div>
                        <div className="border rounded-md p-4 bg-gray-50 whitespace-pre-wrap">
                          {report.content}
                        </div>
                      </div>
                      <DialogFooter></DialogFooter>
                    </DialogContent>
                  </Dialog>
                ))
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-400 border border-gray-100">
                  No reports available
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="images" className="m-0">
        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Medical Images</CardTitle>
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              {onImageUpload && typeof onImageUpload === "function" && (
                <>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleImageUploadClick}
                  >
                    <FileUp size={14} className="mr-1" />
                    Upload Image
                  </Button>
                </>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {patient.images && patient.images.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {patient.images.map((image, index) => (
                  <Card
                    key={index}
                    className="relative group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-transform hover:scale-[1.01]"
                  >
                    <img
                      src={image.url}
                      alt={image.label}
                      className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                    />

                    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center px-5 py-4">
                      <div className="text-gray-800 text-sm font-semibold mb-2">
                        Diagnostic Probabilities
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600">
                              <FileText size={14} />
                            </span>
                            Benign
                          </div>
                          <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                            {image.details.benign}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-teal-600">
                              <ClipboardList size={14} />
                            </span>
                            Adenocarcinoma
                          </div>
                          <span className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full text-xs font-medium">
                            {image.details.adenocarcinoma}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-red-600">
                              <Activity size={14} />
                            </span>
                            SCC
                          </div>
                          <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">
                            {image.details.squamousCellCarcinoma}
                          </span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-3">
                      <div className="font-medium text-gray-800">
                        {image.label}
                      </div>
                      <div className="text-sm text-gray-500">{image.date}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-400 border border-gray-100">
                No images available
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
