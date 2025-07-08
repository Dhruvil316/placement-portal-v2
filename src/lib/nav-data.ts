import {
  LayoutDashboard,
  PersonStanding,
  PackageOpen,
  GalleryVerticalEnd,
  User2,
  FileText,
  Briefcase,
} from "lucide-react";

export const adminData = {
  user: {
    name: 'Admin User',
    email: 'admin@example.com',
  },
  teams: [
    {
      name: 'Admin Org',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
  ],
  navMain: [
    {
      name: 'Dashboard',
      url: '/admin/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Contractors',
      url: '/admin/contractors',
      icon: PersonStanding,
    },
    {
      name: 'Inventory',
      url: '/admin/inventory',
      icon: PackageOpen,
    },
  ],
};



export const userData = {
  user: {
    name: 'John Doe',
    email: 'john@student.college.edu',
  },
  teams: [
    {
      name: 'College Students',
      logo: GalleryVerticalEnd,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      name: 'Dashboard',
      url: '/user/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Profile',
      url: '/user/profile',
      icon: User2,
    },
    {
      name: 'Applied Jobs',
      url: '/user/jobs/applied',
      icon: Briefcase,
    },
    {
      name: 'Documents',
      url: '/user/documents',
      icon: FileText,
    },
  ],
};
