import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { AuthSignup } from './pages/AuthSignup';
import DeveloperSignup from './pages/DeveloperSignup';
import RecruiterSignup from './pages/RecruiterSignup';
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth/developer" element={<AuthSignup userType="developer" />} />
              <Route path="/auth/recruiter" element={<AuthSignup userType="recruiter" />} />
              <Route path="/signup/developer" element={<DeveloperSignup />} />
              <Route path="/signup/recruiter" element={<RecruiterSignup />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Toaster />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;