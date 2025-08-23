import { DataPanel } from "@/components/DataPanel";
import { AnalysisFlow } from "@/components/AnalysisFlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-cyber-blue/20 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">CT</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CyberThreat Intel</h1>
                <p className="text-xs text-muted-foreground">Real-time ransomware impact analysis</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse-cyber"></div>
              <span className="text-sm text-cyber-green font-medium">Live Monitoring</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-200px)]">
          {/* Left Panel - Data Visualization */}
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