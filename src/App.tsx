import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HeroDemo from "./pages/HeroDemo";
import ContactPage from "./pages/ContactPage";
import Planos from "./pages/Planos";
import PlanosPreview from "./pages/PlanosPreview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen w-full">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/demo" element={<HeroDemo />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/planos-preview" element={<PlanosPreview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
