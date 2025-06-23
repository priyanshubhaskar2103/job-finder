
import { Calendar, BarChart3, User, Plus, Search, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Add Job",
    url: "/dashboard/add-job",
    icon: Plus,
  },
  {
    title: "All Jobs",
    url: "/dashboard/all-jobs",
    icon: Search,
  },
  {
    title: "Stats",
    url: "/dashboard/stats",
    icon: BarChart3,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-jobify-teal rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">J</span>
          </div>
          <span className="text-xl font-semibold jobify-teal">Jobify</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild 
                className={`w-full justify-start py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === item.url 
                    ? 'bg-jobify-teal text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Link to={item.url} className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
