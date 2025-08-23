import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Building2, Eye, TrendingUp, Users, Shield } from "lucide-react";
import { useState, useEffect } from "react";

interface Victim {
  company_name: string;
  is_public: boolean;
  date_impacted: string;
  data_leaked: string;
  industry?: string;
  sec_10k_data?: {
    filing_type: string;
    filing_date: string;
    filing_url: string;
    summary: string;
  };
  ransomware_group: string;
}

interface AttackData {
  source_url: string;
  victims: Victim[];
  analysis_summary: string;
  total_victims: number;
  public_companies: number;
  private_companies: number;
  confirmed_leaks: number;
}

const JSON_FILES = [
  'ransomware_analysis_httptermiteuslbumdge2zmfmfcsrvmvsfe4gvyudc5j6cdnisnhtftvokid.json',
  'ransomware_analysis_httpsarcomawmawlhov7o5mdhz4eszxxlkyaoiyiy2b5iwxnds2dmb4jakad.json',
  'ransomware_analysis_httpciphbitqyg26jor7eeo6xieyq7reouctefrompp6ogvhqjba7uo4xdid.json',
  'ransomware_analysis_httpyrz6bayqwhleymbeviter7ejccxm64sv2ppgqgderzgdhutozcbbhpqdblog.json',
  'ransomware_analysis_http5butbkrljkaorg5maepuca25oma7eiwo6a2rlhvkblb4v6mf3ki2ovid.json',
  'ransomware_analysis_httpebhmkoohccl45qesdbvrjqtyro2hmhkmh6vkyfyjjzfllm3ix72aqaidleaksphp.json',
  'ransomware_analysis_httprnsm777cdsjrsdlbs4v5qoeppu3px6sb2igmh53jzrx7ipcrbjz5b2ad.json',
  'ransomware_analysis_https47glxkuxyayqrvugfumgsblrdagvrah7gttfscgzn56eyss5wg3uvmqd.json',
  'ransomware_analysis_http7ukmkdtyxdkdivtjad57klqnd3kdsmq6tp45rrsxqnu76zzv3jvitlqd.json',
  'ransomware_analysis_httpnitrogenczslprh3xyw6lh5xyjvmsz7ciljoqxxknd7uymkfetfhgvqd.json'
];

const useAttackData = () => {
  const [attackData, setAttackData] = useState<AttackData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const promises = JSON_FILES.map(filename => 
          fetch(`/data/${filename}`).then(res => res.json())
        );
        const results = await Promise.all(promises);
        setAttackData(results.filter(data => data.total_victims > 0)); // Only show data with victims
        setLoading(false);
      } catch (error) {
        console.error('Failed to load attack data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { attackData, loading };
};

const MetricCard = ({ icon: Icon, title, value, trend, description }: {
  icon: any;
  title: string;
  value: string | number;
  trend?: 'up' | 'down' | 'neutral';
  description?: string;
}) => (
  <Card className="card-professional border-danger/20 hover:border-danger/40 transition-all duration-300">
    <CardContent className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-danger/10">
            <Icon className="h-5 w-5 text-danger" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
          </div>
        </div>
        {trend && (
          <div className={`flex items-center space-x-1 ${
            trend === 'up' ? 'text-danger' : trend === 'down' ? 'text-success' : 'text-muted-foreground'
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
  <Card className="card-professional border-l-4 border-l-danger">
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
        <div className="mt-3 p-3 rounded-lg bg-success/5 border border-success/20">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-success">SEC Filing Available</span>
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
  const { attackData, loading } = useAttackData();

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground flex items-center space-x-2">
            <Shield className="h-6 w-6 text-danger" />
            <span>Threat Intelligence</span>
          </h2>
          <p className="text-muted-foreground">Loading ransomware analysis data...</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="card-professional animate-pulse">
              <CardContent className="p-4">
                <div className="h-20 bg-muted/20 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

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
          <Shield className="h-6 w-6 text-danger" />
          <span>Threat Intelligence</span>
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
        {attackData.map((attack, attackIndex) => {
          const groupName = attack.victims[0]?.ransomware_group || 'Unknown';
          const cleanUrl = attack.source_url.replace(/^https?:\/\//, '').split('/')[0];
          
          return (
            <Card key={attackIndex} className="card-professional">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-foreground">
                    {groupName}
                  </CardTitle>
                  <Badge variant="outline" className="text-success border-success/50 text-xs">
                    {cleanUrl.slice(0, 16)}...
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
          );
        })}
      </div>
    </div>
  );
};