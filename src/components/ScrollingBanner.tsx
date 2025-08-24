import { ExternalLink, Globe } from "lucide-react";

interface UrlPair {
  darkWebUrl: string;
  traceUrl: string;
}

const urlPairs: UrlPair[] = [
  {
    darkWebUrl: "http://ebhmkoohccl45qesdbvrjqtyro2hmhkmh6vkyfyjjzfllm3ix72aqaid.onion/leaks.php",
    traceUrl: "https://platform.openai.com/logs/trace?trace_id=trace_219d81f6c7b2474186204f6e09d1b623"
  },
  {
    darkWebUrl: "http://5butbkrljkaorg5maepuca25oma7eiwo6a2rlhvkblb4v6mf3ki2ovid.onion/",
    traceUrl: "https://platform.openai.com/logs/trace?trace_id=trace_848bb17a6fc3462280064fb18b8b98d8"
  },
  {
    darkWebUrl: "http://ciphbitqyg26jor7eeo6xieyq7reouctefrompp6ogvhqjba7uo4xdid.onion/",
    traceUrl: "https://platform.openai.com/logs/trace?trace_id=trace_b024bd9bd7ff40d89a0bfa6b1795e8f0"
  },
  {
    darkWebUrl: "http://rnsm777cdsjrsdlbs4v5qoeppu3px6sb2igmh53jzrx7ipcrbjz5b2ad.onion/",
    traceUrl: "https://platform.openai.com/logs/trace?trace_id=trace_e42389bea5734fc7bf051275ef72d429"
  },
  {
    darkWebUrl: "http://7ukmkdtyxdkdivtjad57klqnd3kdsmq6tp45rrsxqnu76zzv3jvitlqd.onion/",
    traceUrl: "https://platform.openai.com/logs/trace?trace_id=trace_7112e2f4c93f43fdbe6083601bf3ec17"
  }
];

const ScrollingBanner = () => {
  const handleClick = (traceUrl: string) => {
    window.open(traceUrl, '_blank');
  };

  const truncateUrl = (url: string) => {
    const domain = url.split('/')[2];
    return domain ? domain.substring(0, 20) + '...' : url.substring(0, 25) + '...';
  };

  return (
    <div className="bg-card/30 border-b border-danger/20 backdrop-blur-sm overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll whitespace-nowrap py-3">
          {/* Duplicate the items for seamless scrolling */}
          {[...urlPairs, ...urlPairs, ...urlPairs].map((pair, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-4 px-4 py-2 bg-card/50 border border-danger/30 rounded-lg hover:bg-card/70 hover:border-danger/50 transition-all duration-300 cursor-pointer group"
              onClick={() => handleClick(pair.traceUrl)}
            >
              <Globe className="h-4 w-4 text-danger mr-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-foreground font-mono">
                {truncateUrl(pair.darkWebUrl)}
              </span>
              <ExternalLink className="h-3 w-3 text-muted-foreground ml-2 group-hover:text-danger transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;