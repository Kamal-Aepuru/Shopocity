// src/layout.tsx or routes/__root.tsx if using createFileRoute

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />
        <main className="flex-1">
          <SidebarTrigger className="m-2" />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
