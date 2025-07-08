// components/AppSidebar.tsx
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarRail } from "@/components/ui/sidebar";
import { TeamSwitcher } from "@/components/team-switcher";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

// types/sidebar-data.ts
import { LucideIcon } from "lucide-react";

export interface User {
  name: string;
  email: string;
  avatar?: string;
}

export interface Team {
  name: string;
  logo: LucideIcon;
  plan: string;
}

export interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface SidebarData {
  user: User;
  teams: Team[];
  navMain: NavItem[];
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  data: SidebarData;
}

export function AppSidebar({ data, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher team={data.teams[0]} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain projects={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
