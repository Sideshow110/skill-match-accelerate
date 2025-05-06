
import { ShieldCheck } from "lucide-react";

export const SecuritySection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="flex-shrink-0">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security & Compliance</h3>
            <p className="text-muted-foreground">
              Your data is protected with industry-leading security measures. 
              SparklyFlow is GDPR compliant, SOC 2 certified, and committed to privacy by design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
