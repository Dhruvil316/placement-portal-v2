// data/adminData.ts
import {
  LayoutDashboard,
  SquareChartGantt,
  UserPen,
  Users,
  PersonStanding,
  PackageOpen,
  UserRoundCog,
  FileCog,
  DatabaseBackup,
  GalleryVerticalEnd,
} from "lucide-react";

export const adminData = {
  user: {
    name: 'Admin User',
    email: 'admin@example.com',
    // avatar: '/avatars/admin.jpg', // optional
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
      url: '/app/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Manage Invoices',
      url: '/app/invoices/manage',
      icon: SquareChartGantt,
    },
    {
      name: 'Authorize Invoices',
      url: '/app/invoices/authorize',
      icon: UserPen,
    },
    {
      name: 'Clients',
      url: '/app/clients',
      icon: Users,
    },
    {
      name: 'Contractors',
      url: '/app/contractors',
      icon: PersonStanding,
    },
    {
      name: 'Inventory',
      url: '/app/inventory',
      icon: PackageOpen,
    },
    {
      name: 'User Management',
      url: '/app/users/manage',
      icon: UserRoundCog,
    },
    {
      name: 'File Manager',
      url: '/app/files/manage',
      icon: FileCog,
    },
    {
      name: 'Backup Database',
      url: '/app/backup',
      icon: DatabaseBackup,
    },
  ],
};
