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
import { Globe, Brain, Building, FileText, Target } from 'lucide-react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { 
      label: (
        <div className="flex flex-col items-center space-y-2 p-3">
          <div className="p-2 rounded-full bg-danger/20">
            <Globe className="h-5 w-5 text-danger" />
          </div>
          <div className="text-center">
            <div className="font-semibold text-sm">Dark Web Monitoring</div>
            <div className="text-xs text-muted-foreground">Ransomware site tracking</div>
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
          <div className="p-2 rounded-full bg-success/20">
            <Brain className="h-5 w-5 text-success" />
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
      border: '2px solid hsl(var(--success))',
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
          <div className="p-2 rounded-full bg-neutral/20">
            <Building className="h-5 w-5 text-neutral" />
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
      border: '2px solid hsl(var(--neutral))',
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
          <div className="p-2 rounded-full bg-success/20">
            <FileText className="h-5 w-5 text-success" />
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
      border: '2px solid hsl(var(--success))',
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
          <div className="p-2 rounded-full bg-danger/20">
            <Target className="h-5 w-5 text-danger" />
          </div>
          <div className="text-center">
            <div className="font-semibold text-sm">Impact Assessment</div>
            <div className="text-xs text-muted-foreground">Risk & financial analysis</div>
          </div>
        </div>
      )
    },
    position: { x: 375, y: 200 },
    style: {
      background: 'hsl(var(--card))',
      border: '2px solid hsl(var(--danger))',
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
    style: { stroke: 'hsl(var(--success))', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--success))',
    },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--neutral))', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--neutral))',
    },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--success))', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--success))',
    },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--danger))', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'hsl(var(--danger))',
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
          <Target className="h-6 w-6 text-danger" />
          <span>Analysis Workflow</span>
        </h2>
        <p className="text-muted-foreground">
          Automated pipeline from dark web monitoring to financial impact assessment
        </p>
      </div>
      
      <div 
        className="rounded-xl border border-danger/20 overflow-hidden" 
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
            color="hsl(var(--danger))" 
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
                case '2': return 'hsl(var(--success))';
                case '3': return 'hsl(var(--neutral))';
                case '4': return 'hsl(var(--success))';
                case '5': return 'hsl(var(--danger))';
                default: return 'hsl(var(--muted))';
              }
            }}
          />
        </ReactFlow>
      </div>
    </div>
  );
};