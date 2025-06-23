
import { Briefcase, Calendar, X } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const Stats = () => {
  const stats = [
    {
      title: "Pending Applications",
      value: "0",
      icon: Briefcase,
      color: "bg-jobify-orange",
      borderColor: "border-jobify-orange"
    },
    {
      title: "Interviews Scheduled", 
      value: "0",
      icon: Calendar,
      color: "bg-jobify-blue",
      borderColor: "border-jobify-blue"
    },
    {
      title: "Jobs Declined",
      value: "0", 
      icon: X,
      color: "bg-jobify-red",
      borderColor: "border-jobify-red"
    }
  ];

  return (
    <DashboardLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-16 h-16 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-lg text-gray-600">{stat.title}</div>
              <div className={`h-1 w-full ${stat.color} rounded-full`}></div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Stats;
