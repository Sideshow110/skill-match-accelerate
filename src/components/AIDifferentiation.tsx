
import { Check } from "lucide-react";

export const AIDifferentiation = () => {
  const aiFeatures = [
    "Generative AI for creating personalized candidate communications",
    "Agentic AI that collaborates with hiring teams to make decisions",
    "Deep learning algorithms for accurate candidate-role matching",
    "Natural language processing to extract insights from candidate data",
    "Continuous learning from hiring outcomes to improve recommendations",
    "Ethical AI design with bias detection and mitigation"
  ];

  return (
    <section className="section-padding gradient-bg text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white/10 p-4 flex flex-col">
                  <div className="text-xs uppercase tracking-wider mb-1 opacity-70">Data Points</div>
                  <div className="text-3xl font-bold mb-2">5B+</div>
                  <div className="text-sm opacity-80">Comprehensive profiles analyzed</div>
                </div>
                <div className="rounded-lg bg-white/10 p-4 flex flex-col">
                  <div className="text-xs uppercase tracking-wider mb-1 opacity-70">Skills Mapped</div>
                  <div className="text-3xl font-bold mb-2">15K+</div>
                  <div className="text-sm opacity-80">Detailed competency attributes</div>
                </div>
                <div className="rounded-lg bg-white/10 p-4 flex flex-col">
                  <div className="text-xs uppercase tracking-wider mb-1 opacity-70">Accuracy</div>
                  <div className="text-3xl font-bold mb-2">98.7%</div>
                  <div className="text-sm opacity-80">Match prediction confidence</div>
                </div>
                <div className="rounded-lg bg-white/10 p-4 flex flex-col">
                  <div className="text-xs uppercase tracking-wider mb-1 opacity-70">Time Saved</div>
                  <div className="text-3xl font-bold mb-2">75%</div>
                  <div className="text-sm opacity-80">Recruiter productivity gain</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="heading-lg mb-6">
              Our AI Advantage
            </h2>
            <p className="text-lg opacity-90 mb-8">
              SparklyFlow leverages cutting-edge AI and the richest talent data
              ecosystem to deliver unmatched results for your hiring needs.
            </p>
            <div className="space-y-4">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-white/20 p-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
