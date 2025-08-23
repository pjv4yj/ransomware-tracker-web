import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ExternalLink } from "lucide-react";

const sources = [
  {
    name: "QILIN",
    url: "http://ijzn3sicrcy7guixkzjkib4ukbiilwc3xhnmby4mcbccnsd7j2rekvqd.onion/"
  },
  {
    name: "Play Ransomware", 
    url: "http://k7kg3jqxang3wh7hnmaiokchk7qoebupfgoik6rha6mjpzwupwtj25yd.onion/"
  },
  {
    name: "Ransom EXX",
    url: "http://rnsm777cdsjrsdlbs4v5qoeppu3px6sb2igmh53jzrx7ipcrbjz5b2ad.onion/"
  },
  {
    name: "KS",
    url: "http://ks5424y3wpr5zlug5c7i6svvxweinhbdcqcfnptkfcutrncfazzgz5id.onion/"
  },
  {
    name: "REALLY GOOD ONE",
    url: "http://7ukmkdtyxdkdivtjad57klqnd3kdsmq6tp45rrsxqnu76zzv3jvitlqd.onion/"
  },
  {
    name: "ANOTHER",
    url: "http://ciphbitqyg26jor7eeo6xieyq7reouctefrompp6ogvhqjba7uo4xdid.onion/"
  },
  {
    name: "Source 7",
    url: "http://blogvl7tjyjvsfthobttze52w36wwiz34hrfcmorgvdzb6hikucb7aqd.onion/"
  },
  {
    name: "Source 8", 
    url: "http://blogvl7tjyjvsfthobttze52w36wwiz34hrfcmorgvdzb6hikucb7aqd.onion/"
  },
  {
    name: "TRY",
    url: "http://5butbkrljkaorg5maepuca25oma7eiwo6a2rlhvkblb4v6mf3ki2ovid.onion/"
  },
  {
    name: "Source 10",
    url: "https://47glxkuxyayqrvugfumgsblrdagvrah7gttfscgzn56eyss5wg3uvmqd.onion/"
  },
  {
    name: "Source 11",
    url: "http://ransomocmou6mnbquqz44ewosbkjk3o5qjsl3orawojexfook2j7esad.onion/news"
  },
  {
    name: "Source 12",
    url: "http://zohlm7ahjwegcedoz7lrdrti7bvpofymcayotp744qhx6gjmxbuo2yid.onion/"
  }
];

export const DarkWebSources = () => {
  const handleSourceClick = (url: string) => {
    // For now, just log the URL - we'll add image functionality next
    console.log("Clicked source:", url);
    // TODO: Open image when clicked
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground flex items-center space-x-2">
          <Globe className="h-6 w-6 text-danger" />
          <span>Dark Web Sources</span>
        </h2>
        <p className="text-muted-foreground">
          Active ransomware group leak sites
        </p>
      </div>

      {/* Sources List */}
      <Card className="card-professional">
        <CardHeader>
          <CardTitle className="text-lg text-foreground flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-danger animate-pulse-danger"></div>
            <span>Live Sources</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {sources.map((source, index) => (
            <div
              key={index}
              onClick={() => handleSourceClick(source.url)}
              className="group p-3 rounded-lg border border-border hover:border-danger/40 cursor-pointer transition-all duration-300 hover:bg-accent/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-foreground break-all group-hover:text-danger transition-colors">
                    {source.url}
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-danger transition-colors ml-2 flex-shrink-0" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};