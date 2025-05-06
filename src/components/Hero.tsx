
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 -right-40 w-[600px] h-[600px] rounded-full opacity-20 bg-gradient-to-r from-purple-600 to-blue-400 blur-3xl"></div>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl"></div>
      </div>
      
      <div className="container-custom pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start space-y-6">
            <div className="inline-block">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary font-medium">
                <span className="flex w-2 h-2 rounded-full bg-primary mr-2"></span>
                AI-Powered Talent Acquisition
              </div>
            </div>
            <h1 className="heading-xl text-balance">
              Accelerate Hiring with <span className="text-primary">AI-Driven</span> Intelligence
            </h1>
            <p className="text-lg text-muted-foreground">
              Transform your talent acquisition with our all-in-one AI platform that automates sourcing, 
              screening, and candidate evaluation - saving you time and connecting you with perfect-fit talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="font-medium">
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                See How It Works
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Join 500+ forward-thinking companies revolutionizing their hiring process
            </div>
          </div>
          
          {/* Hero image/illustration */}
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              {/* This would be a hero image */}
              <div className="bg-gradient-to-br from-primary/90 via-purple-600 to-blue-400 h-full w-full p-8 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full max-w-md">
                  <div className="h-8 w-24 bg-white/20 rounded-md mb-6"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-white/20 rounded-md w-3/4"></div>
                    <div className="h-4 bg-white/20 rounded-md"></div>
                    <div className="h-4 bg-white/20 rounded-md w-5/6"></div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="h-20 bg-white/10 rounded-lg"></div>
                    <div className="h-20 bg-white/10 rounded-lg"></div>
                    <div className="h-20 bg-white/10 rounded-lg"></div>
                    <div className="h-20 bg-white/10 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-48 bg-accent rounded-lg flex items-center justify-center p-4 shadow-xl">
              <div className="text-white font-semibold">
                <div className="text-3xl font-bold">85%</div>
                <div className="text-sm">Faster Time-to-Hire</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
