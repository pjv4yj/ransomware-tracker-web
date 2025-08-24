import { DataPanel } from "@/components/DataPanel";
import { AnalysisFlow } from "@/components/AnalysisFlow";
import { DarkWebSources } from "@/components/DarkWebSources";
import ScrollingBanner from "@/components/ScrollingBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Scrolling Banner */}
      <ScrollingBanner />
      
      {/* Header */}
      <header className="border-b border-danger/20 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">EB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">EarlyBird</h1>
                <p className="text-xs text-muted-foreground">Financial intelligence for ransomware attacks</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-danger animate-pulse-danger"></div>
              <span className="text-sm text-danger font-medium">Market Intelligence</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-full mx-auto px-6 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Left Panel - Dark Web Sources */}
          <div className="h-full overflow-y-auto pr-4 custom-scrollbar">
            <DarkWebSources />
          </div>

          {/* Middle Panel - Investment Intelligence */}
          <div className="h-full overflow-y-auto pr-4 custom-scrollbar">
            <DataPanel />
          </div>

          {/* Right Panel - Analysis Flow */}
          <div className="h-full">
            <AnalysisFlow />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;