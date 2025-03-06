// app.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/layout/AppSidebar";

import Settings from "./pages/Settings.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Members from "./pages/Members.tsx";
import Classes from "./pages/Classes.tsx";
import Billing from "./pages/Billing.tsx";

// Define the type for the `children` prop
type AppProps = {
  children: React.ReactNode;
};

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/members" element={<Members />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          {children}
        </main>
      </SidebarProvider>
    </BrowserRouter>
  );
};

export default App;