
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PlatformOverview = () => {
  const platformFeatures = [
    {
      number: "01",
      title: "AI-Powered Sourcing",
      description: "Discover ideal candidates from both internal databases and external sources using advanced matching algorithms."
    },
    {
      number: "02",
      title: "Intelligent Screening",
      description: "Automatically evaluate and rank candidates based on skills, experiences, and potential cultural fit."
    },
    {
      number: "03",
      title: "Automated Communication",
      description: "Maintain constant candidate engagement with personalized messaging and updates."
    },
    {
      number: "04",
      title: "Comprehensive Analytics",
      description: "Track key metrics and gain valuable insights to continuously improve your hiring process."
    }
  ];

  return (
    <section id="platform" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">
              A Complete Platform for Modern Hiring
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our integrated solution combines AI-driven sourcing, screening, 
              assessments, and analytics into a seamless workflow that transforms 
              how you hire.
            </p>
            <div className="space-y-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-xl font-bold text-primary">{feature.number}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="font-medium">
                Explore All Features <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* This would be a platform overview image or UI mockup */}
            <div className="aspect-[4/3] bg-gradient-to-br from-primary via-accent to-blue-500 p-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 h-full">
                <div className="bg-white/20 h-8 w-32 rounded-md mb-4"></div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="h-20 bg-white/10 rounded-lg"></div>
                  <div className="h-20 bg-white/10 rounded-lg"></div>
                  <div className="h-20 bg-white/10 rounded-lg"></div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-white/20 rounded-md"></div>
                  <div className="h-4 bg-white/20 rounded-md w-5/6"></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 bg-white/10 rounded-lg"></div>
                  <div className="h-24 bg-white/10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
