
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/DashboardLayout";

const AddJob = () => {
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    jobLocation: "greater noida",
    jobStatus: "pending",
    jobType: "full-time"
  });

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Add Job:", formData);
  };

  return (
    <DashboardLayout title="Dashboard">
      <div className="max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Add Job</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="position" className="text-gray-700">Position</Label>
                <Input
                  id="position"
                  name="position"
                  type="text"
                  value={formData.position}
                  onChange={(e) => handleChange("position", e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-700">Company</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobLocation" className="text-gray-700">Job Location</Label>
                <Input
                  id="jobLocation"
                  name="jobLocation"
                  type="text"
                  value={formData.jobLocation}
                  onChange={(e) => handleChange("jobLocation", e.target.value)}
                  className="w-full"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="jobStatus" className="text-gray-700">Job Status</Label>
                <Select value={formData.jobStatus} onValueChange={(value) => handleChange("jobStatus", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="pending">pending</SelectItem>
                    <SelectItem value="interview">interview</SelectItem>
                    <SelectItem value="declined">declined</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobType" className="text-gray-700">Job Type</Label>
                <Select value={formData.jobType} onValueChange={(value) => handleChange("jobType", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="full-time">full-time</SelectItem>
                    <SelectItem value="part-time">part-time</SelectItem>
                    <SelectItem value="remote">remote</SelectItem>
                    <SelectItem value="internship">internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="bg-jobify-teal hover:bg-jobify-teal/90 text-white px-8 py-2">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddJob;
