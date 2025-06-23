
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/DashboardLayout";

const AllJobs = () => {
  const [searchData, setSearchData] = useState({
    search: "",
    jobStatus: "all",
    jobType: "all",
    sort: "newest"
  });

  const handleChange = (name: string, value: string) => {
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = () => {
    setSearchData({
      search: "",
      jobStatus: "all",
      jobType: "all",
      sort: "newest"
    });
  };

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-8">
        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Search Form</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label htmlFor="search" className="text-gray-700">Search</Label>
              <Input
                id="search"
                name="search"
                type="text"
                value={searchData.search}
                onChange={(e) => handleChange("search", e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobStatus" className="text-gray-700">Job Status</Label>
              <Select value={searchData.jobStatus} onValueChange={(value) => handleChange("jobStatus", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">all</SelectItem>
                  <SelectItem value="pending">pending</SelectItem>
                  <SelectItem value="interview">interview</SelectItem>
                  <SelectItem value="declined">declined</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobType" className="text-gray-700">Job Type</Label>
              <Select value={searchData.jobType} onValueChange={(value) => handleChange("jobType", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">all</SelectItem>
                  <SelectItem value="full-time">full-time</SelectItem>
                  <SelectItem value="part-time">part-time</SelectItem>
                  <SelectItem value="remote">remote</SelectItem>
                  <SelectItem value="internship">internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sort" className="text-gray-700">Sort</Label>
              <Select value={searchData.sort} onValueChange={(value) => handleChange("sort", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="newest">newest</SelectItem>
                  <SelectItem value="oldest">oldest</SelectItem>
                  <SelectItem value="a-z">a-z</SelectItem>
                  <SelectItem value="z-a">z-a</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6">
            <Button 
              onClick={handleReset}
              className="bg-jobify-teal hover:bg-jobify-teal/90 text-white px-8 py-2"
            >
              Reset Search Values
            </Button>
          </div>
        </div>

        {/* No Jobs Message */}
        <div className="text-center py-12">
          <h3 className="text-3xl font-medium text-gray-900">No jobs to display...</h3>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AllJobs;
