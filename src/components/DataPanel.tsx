import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Building2, Eye, TrendingUp, Users, Shield } from "lucide-react";

// Mock data - in real app this would come from props or API
const attackData = [
  {
    source_url: "http://5butbkrljkaorg5maepuca25oma7eiwo6a2rlhvkblb4v6mf3ki2ovid.onion/",
    victims: [
      {
        company_name: "Ambitek",
        is_public: false,
        date_impacted: "2025-08-21",
        data_leaked: "yes",
        industry: "Staffing & Recruiting",
        ransomware_group: "Space Bears"
      },
      {
        company_name: "All Truck Transportation Co",
        is_public: false,
        date_impacted: "2025-08-21",
        data_leaked: "yes",
        industry: "Transportation",
        ransomware_group: "Space Bears"
      }
    ],
    analysis_summary: "The analysis identified two companies impacted by the Space Bears ransomware group...",
    total_victims: 2,
    public_companies: 0,
    private_companies: 2,
    confirmed_leaks: 2
  },
  {
    source_url: "http://7ukmkdtyxdkdivtjad57klqnd3kdsmq6tp45rrsxqnu76zzv3jvitlqd.onion/",
    victims: [
      {
        company_name: "Insurance Office of America (US)",
        is_public: false,
        date_impacted: "Unknown",
        data_leaked: "yes",
        ransomware_group: "DAIXIN Team"
      },
      {
        company_name: "SGS Co. (US)",
        is_public: true,
        date_impacted: "Unknown",
        data_leaked: "yes",
        sec_10k_data: {
          filing_type: "Integrated Report",
          filing_date: "February 11, 2025",
          filing_url: "https://sustainabilityreports.com/reports/sgs-sa-2024-integrated-report-pdf/",
          summary: "The 2024 Integrated Report highlights SGS's financial and sustainable performance..."
        },
        ransomware_group: "DAIXIN Team"
      },
      {
        company_name: "B&G Foods, Inc. (US, CA)",
        is_public: true,
        date_impacted: "Unknown",
        data_leaked: "yes",
        sec_10k_data: {
          filing_type: "10-K",
          filing_date: "February 28, 2024",
          filing_url: "https://bgfoods.gcs-web.com/sec-filings/sec-filing/10-k/0001558370-24-001996",
          summary: "The comprehensive annual report provides an overview of B&G Foods' financial performance..."
        },
        ransomware_group: "DAIXIN Team"
      }
    ],
    total_victims: 19,
    public_companies: 3,
    private_companies: 16,
    confirmed_leaks: 19
  }
];

const MetricCard = ({ icon: Icon, title, value, trend, description }: {
  icon: any;
  title: string;
  value: string | number;
  trend?: 'up' | 'down' | 'neutral';
  description?: string;
}) => (
  <Card className="card-cyber border-cyber-blue/20 hover:border-cyber-blue/40 transition-all duration-300">
    <CardContent className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-cyber-blue/10">
            <Icon className="h-5 w-5 text-cyber-blue" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
          </div>
        </div>
        {trend && (
          <div className={`flex items-center space-x-1 ${
            trend === 'up' ? 'text-danger' : trend === 'down' ? 'text-cyber-green' : 'text-muted-foreground'
          }`}>
            <TrendingUp className="h-4 w-4" />
          </div>
        )}
      </div>
      {description && (
        <p className="text-xs text-muted-foreground mt-2">{description}</p>
      )}
    </CardContent>
  </Card>
);

const VictimCard = ({ victim, groupName }: { victim: any; groupName: string }) => (
  <Card className="card-cyber border-l-4 border-l-danger">
    <CardContent className="p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-foreground">{victim.company_name}</h4>
          <p className="text-sm text-muted-foreground">{victim.industry || 'Industry Unknown'}</p>
        </div>
        <div className="flex flex-col items-end space-y-1">
          <Badge variant={victim.is_public ? "default" : "secondary"} className="text-xs">
            {victim.is_public ? "Public" : "Private"}
          </Badge>
          {victim.data_leaked === "yes" && (
            <Badge variant="destructive" className="text-xs">
              <Eye className="h-3 w-3 mr-1" />
              Data Leaked
            </Badge>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Attacked: {victim.date_impacted !== "Unknown" ? victim.date_impacted : "Date Unknown"}
        </span>
        <Badge variant="outline" className="text-danger border-danger/50">
          {groupName}
        </Badge>
      </div>
      
      {victim.sec_10k_data && (
        <div className="mt-3 p-3 rounded-lg bg-cyber-blue/5 border border-cyber-blue/20">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-4 w-4 text-cyber-blue" />
            <span className="text-sm font-medium text-cyber-blue">SEC Filing Available</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {victim.sec_10k_data.filing_type} • {victim.sec_10k_data.filing_date}
          </p>
        </div>
      )}
    </CardContent>
  </Card>
);

export const DataPanel = () => {
  const totalVictims = attackData.reduce((sum, attack) => sum + attack.total_victims, 0);
  const totalPublic = attackData.reduce((sum, attack) => sum + attack.public_companies, 0);
  const totalLeaks = attackData.reduce((sum, attack) => sum + attack.confirmed_leaks, 0);
  const uniqueGroups = [...new Set(attackData.flatMap(attack => 
    attack.victims.map(victim => victim.ransomware_group)
  ))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground flex items-center space-x-2">
          <Shield className="h-6 w-6 text-cyber-blue" />
          <span>Live Threat Intelligence</span>
        </h2>
        <p className="text-muted-foreground">
          Real-time analysis of ransomware attacks and financial impact assessment
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4">
        <MetricCard
          icon={AlertTriangle}
          title="Total Victims"
          value={totalVictims}
          trend="up"
          description="Companies affected"
        />
        <MetricCard
          icon={Building2}
          title="Public Companies"
          value={totalPublic}
          trend="up"
          description="SEC filing impact"
        />
        <MetricCard
          icon={Eye}
          title="Confirmed Leaks"
          value={totalLeaks}
          trend="up"
          description="Data breaches verified"
        />
        <MetricCard
          icon={Users}
          title="Active Groups"
          value={uniqueGroups.length}
          trend="neutral"
          description="Ransomware operators"
        />
      </div>

      {/* Attack Data */}
      <div className="space-y-4">
        {attackData.map((attack, attackIndex) => (
          <Card key={attackIndex} className="card-cyber">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-foreground">
                  Attack Source #{attackIndex + 1}
                </CardTitle>
                <Badge variant="outline" className="text-cyber-green border-cyber-green/50">
                  {attack.victims[0]?.ransomware_group}
                </Badge>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>{attack.total_victims} victims</span>
                <span>•</span>
                <span>{attack.public_companies} public companies</span>
                <span>•</span>
                <span>{attack.confirmed_leaks} confirmed leaks</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {attack.victims.slice(0, 3).map((victim, victimIndex) => (
                <VictimCard
                  key={victimIndex}
                  victim={victim}
                  groupName={victim.ransomware_group}
                />
              ))}
              {attack.victims.length > 3 && (
                <div className="text-center py-2">
                  <Badge variant="secondary" className="text-xs">
                    +{attack.victims.length - 3} more victims
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};