import { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  Connection,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { 
      label: (
        <div className="flex flex-col items-center space-y-2 p-3">
          <div className="p-2 rounded-full bg-danger/20">
            <span className="text-lg">🕷️</span>
          </div>
          <div className="text-center">
            <div className="font-semibold text-sm">Dark Web Scraping</div>
            <div className="text-xs text-muted-foreground">Monitor ransomware sites</div>
          </div>
        </div>
      )
    },
    position: { x: 0, y: 0 },
    style: {
      background: 'hsl(var(--card))',
      border: '2px solid hsl(var(--danger))',
      borderRadius: '12px',
      width: 180,
      height: 120,
    },
  },
  {
    id: '2',
    data: { 
      label: (
        <div className="flex flex-col items-center space-y-2 p-3">
          <div className="p-2 rounded-full bg-cyber-blue/20">
            <span className="text-lg">🤖</span>
          </div>
          <div className="text-center">
            <div className="font-semibold text-sm">AI Analysis</div>
            <div className="text-xs text-muted-foreground">Extract victim data</div>
          </div>
        </div>
      )
    },
    position: { x: 250, y: 0 },
    style: {
      background: 'hsl(var(--card))',
      border: '2px solid hsl(var(--cyber-blue))',
      borderRadius: '12px',
      width: 180,
      height: 120,
    },
  },
  {
    id: '3',
    data: { 
      label: (
        <div className="flex flex-col items-center space-y-2 p-3">
          <div className="p-2 rounded-full bg-cyber-purple/20">
            <span className="text-lg">🏢</span>
          </div>
          <div className="text-center">
            <div className="font-semibold text-sm">Company Classification</div>
            <div className="text-xs text-muted-foreground">Public vs Private</div>
          </div>
        </div>
      )
    },
    position: { x: 500, y: 0 },
    style: {
      background: 'hsl(var(--card))',
      border: '2px solid hsl(var(--cyber-purple))',
      borderRadius: '12px',
      width: 180,
      height: 120,
    },
  },
  {
    id: '4',
    data: { 
      label: (
        <div className="flex flex-col items-center space-y-2 p-3">
          <div className="p-2 rounded-full bg-cyber-green/20">
            <span className="text-lg">📊</span>
          </div>
          <div className="text-center">
            <div className="font-semibold text-sm">SEC Data Enrichment</div>
            <div className="text-xs text-muted-foreground">10-K filings & analysis</div>
          </div>
        </div>
      )
    },
    position: { x: 125, y: 200 },
    style: {
      background: 'hsl(var(--card))',
      border: '2px solid hsl(var(--cyber-green))',
      borderRadius: '12px',
      width: 180,
      height: 120,
    },
  },
  {
    id: '5',
    type: 'output',
    data: { 
      label: (
        <div className="flex flex-col items-center space-y-2 p-3">
          <div className="p-2 rounded-full bg-cyber-orange/20">
            <span className="text-lg">⚡</span>
          </div>
          <div className="text-center">
            <div className="font-semibold text-sm">Financial Impact Report</div>
            <div className="text-xs text-muted-foreground">Risk assessment</div>
          </div>
        </div>
      )
    },
    position: { x: 375, y: 200 },
    style: {
      background: 'hsl(var(--card))',
      border: '2px solid hsl(var(--cyber-orange))',
      borderRadius: '12px',
      width: 180,
      height: 120,
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--cyber-blue))', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--cyber-blue))',
    },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--cyber-purple))', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--cyber-purple))',
    },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--cyber-green))', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--cyber-green))',
    },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--cyber-orange))', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--cyber-orange))',
    },
  },
];

export const AnalysisFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="h-full w-full">
      <div className="mb-4 space-y-2">
        <h2 className="text-2xl font-bold text-foreground flex items-center space-x-2">
          <span className="text-cyber-green">⚙️</span>
          <span>Analysis Workflow</span>
        </h2>
        <p className="text-muted-foreground">
          Automated pipeline from dark web monitoring to financial impact assessment
        </p>
      </div>
      
      <div 
        className="rounded-xl border border-cyber-blue/20 overflow-hidden" 
        style={{ height: 'calc(100% - 80px)' }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="bottom-left"
          style={{ 
            background: 'hsl(var(--background))',
          }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
        >
          <Background 
            color="hsl(var(--cyber-blue))" 
            size={1} 
            style={{ opacity: 0.1 }}
          />
          <Controls />
          <MiniMap 
            style={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
            }}
            nodeColor={(node) => {
              switch (node.id) {
                case '1': return 'hsl(var(--danger))';
                case '2': return 'hsl(var(--cyber-blue))';
                case '3': return 'hsl(var(--cyber-purple))';
                case '4': return 'hsl(var(--cyber-green))';
                case '5': return 'hsl(var(--cyber-orange))';
                default: return 'hsl(var(--muted))';
              }
            }}
          />
        </ReactFlow>
      </div>
    </div>
  );
};