
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Search from "./pages/Search";
import Community from "./pages/Community";
import RouteDetail from "./pages/RouteDetail";
import Market from "./pages/Market";
import Login from "./pages/Login";
import RoutesPage from "./pages/RoutesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<Search />} />
          <Route path="/community" element={<Community />} />
          <Route path="/market" element={<Market />} />
          <Route path="/login" element={<Login />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/route/:id" element={<RouteDetail />} />
          <Route path="/reviews" element={<div className="p-8 text-center">리뷰 페이지 (개발 예정)</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
