import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Globe, ExternalLink } from "lucide-react";

const sources = [
  {
    name: "QILIN",
    url: "http://ijzn3sicrcy7guixkzjkib4ukbiilwc3xhnmby4mcbccnsd7j2rekvqd.onion/",
    image: "/screenshots/qilin.png"
  },
  {
    name: "Play Ransomware", 
    url: "http://k7kg3jqxang3wh7hnmaiokchk7qoebupfgoik6rha6mjpzwupwtj25yd.onion/",
    image: "/screenshots/play.png"
  },
  {
    name: "Ransom EXX",
    url: "http://rnsm777cdsjrsdlbs4v5qoeppu3px6sb2igmh53jzrx7ipcrbjz5b2ad.onion/",
    image: "/screenshots/ransomexx.png"
  },
  {
    name: "KS",
    url: "http://ks5424y3wpr5zlug5c7i6svvxweinhbdcqcfnptkfcutrncfazzgz5id.onion/",
    image: "/screenshots/ks.png"
  },
  {
    name: "DAIXIN",
    url: "http://7ukmkdtyxdkdivtjad57klqnd3kdsmq6tp45rrsxqnu76zzv3jvitlqd.onion/",
    image: "/screenshots/daixin.png"
  },
  {
    name: "Ciphbit",
    url: "http://ciphbitqyg26jor7eeo6xieyq7reouctefrompp6ogvhqjba7uo4xdid.onion/",
    image: "/screenshots/ciphbit.png"
  },
  {
    name: "Money Message",
    url: "http://blogvl7tjyjvsfthobttze52w36wwiz34hrfcmorgvdzb6hikucb7aqd.onion/",
    image: "/screenshots/money_message.png"
  },
  {
    name: "SpaceBears",
    url: "http://5butbkrljkaorg5maepuca25oma7eiwo6a2rlhvkblb4v6mf3ki2ovid.onion/",
    image: "/screenshots/space_bears.png"
  },
  {
    name: "Underground",
    url: "https://47glxkuxyayqrvugfumgsblrdagvrah7gttfscgzn56eyss5wg3uvmqd.onion/",
    image: "/screenshots/underground.png"
  },
  {
    name: "EverestGroup",
    url: "http://ransomocmou6mnbquqz44ewosbkjk3o5qjsl3orawojexfook2j7esad.onion/news",
    image: "/screenshots/everest_group.png"
  },
  {
    name: "RansomHouse",
    url: "http://zohlm7ahjwegcedoz7lrdrti7bvpofymcayotp744qhx6gjmxbuo2yid.onion/",
    image: "/screenshots/ransom_house.png"
  }
];

export const DarkWebSources = () => {
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
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group p-3 rounded-lg border border-border hover:border-danger/40 cursor-pointer transition-all duration-300 hover:bg-accent/10">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground group-hover:text-danger transition-colors mb-1">
                        {source.name}
                      </div>
                      <div className="text-xs font-mono text-muted-foreground break-all">
                        {source.url}
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-danger transition-colors ml-2 flex-shrink-0" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                <DialogHeader>
                  <DialogTitle className="text-foreground">{source.name}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <img 
                    src={source.image} 
                    alt={`Screenshot of ${source.name}`}
                    className="w-full h-auto rounded-lg border border-border"
                  />
                  <p className="text-xs font-mono text-muted-foreground mt-2 break-all">
                    {source.url}
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};