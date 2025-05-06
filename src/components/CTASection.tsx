
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoRequestForm } from "@/components/DemoRequestForm";

export const CTASection = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  return (
    <section className="section-padding gradient-bg text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">
            Ready to Transform Your Talent Acquisition?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join hundreds of forward-thinking organizations already using SparklyFlow to hire faster, 
            smarter, and with better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="font-medium text-primary"
              onClick={() => setIsDemoFormOpen(true)}
            >
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white/10 font-medium"
              onClick={() => setIsDemoFormOpen(true)}
            >
              Contact Sales
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No credit card required. Get started in minutes.
          </p>
        </div>
      </div>

      {/* Demo Request Form */}
      <DemoRequestForm open={isDemoFormOpen} onOpenChange={setIsDemoFormOpen} />
    </section>
  );
};
