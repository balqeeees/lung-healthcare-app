import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ReportItem = ({ report }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="bg-white hover:bg-gray-50 cursor-pointer border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-800 font-medium">{report.title}</div>
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
              <span className="font-medium text-gray-700">{report.date}</span>
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
        <DialogFooter>
          <Button className="bg-blue-600 hover:bg-blue-700">Print</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReportItem;
