// SideBar.tsx
import { Calendar, Home, Users, DollarSign, Settings } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/", // Update URL to match the route
    icon: Home,
  },
  {
    title: "Members",
    url: "/members", // Update URL to match the route
    icon: Users,
  },
  {
    title: "Classes",
    url: "/classes", // Update URL to match the route
    icon: Calendar,
  },
  {
    title: "Billing",
    url: "/billing", // Update URL to match the route
    icon: DollarSign,
  },
  {
    title: "Settings",
    url: "/settings", // Update URL to match the route
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Gym Mangement</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      {" "}
                      {/* Replace <a> with <Link> */}
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
