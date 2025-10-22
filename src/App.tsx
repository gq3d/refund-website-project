
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import AmlCleaningPage from "./pages/services/AmlCleaningPage";
import AmlAnalysisPage from "./pages/services/AmlAnalysisPage";
import RedFlagsPage from "./pages/services/RedFlagsPage";
import AssetRecoveryPage from "./pages/services/AssetRecoveryPage";
import FinancialAuditPage from "./pages/services/FinancialAuditPage";
import LegalDefensePage from "./pages/services/LegalDefensePage";
import HackerAnalyticsPage from "./pages/services/HackerAnalyticsPage";
import InternationalSearchPage from "./pages/services/InternationalSearchPage";
import UniqueTechPage from "./pages/services/UniqueTechPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/aml-cleaning" element={<AmlCleaningPage />} />
          <Route path="/services/aml-analysis" element={<AmlAnalysisPage />} />
          <Route path="/services/red-flags" element={<RedFlagsPage />} />
          <Route path="/services/asset-recovery" element={<AssetRecoveryPage />} />
          <Route path="/services/financial-audit" element={<FinancialAuditPage />} />
          <Route path="/services/legal-defense" element={<LegalDefensePage />} />
          <Route path="/services/hacker-analytics" element={<HackerAnalyticsPage />} />
          <Route path="/services/international-search" element={<InternationalSearchPage />} />
          <Route path="/services/unique-tech" element={<UniqueTechPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;