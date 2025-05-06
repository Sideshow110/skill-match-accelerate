
import { Button } from "@/components/ui/button";

export const TargetAudience = () => {
  const audiences = [
    {
      title: "Enterprise HR Teams",
      description: "Scale your talent acquisition with AI that handles high volume recruiting while maintaining quality.",
      buttonText: "Enterprise Solutions"
    },
    {
      title: "Staffing Agencies",
      description: "Place candidates faster with AI-powered matching and automated candidate communications.",
      buttonText: "Agency Solutions"
    },
    {
      title: "Small & Medium Businesses",
      description: "Access enterprise-grade recruitment technology sized and priced for growing companies.",
      buttonText: "SMB Solutions"
    },
    {
      title: "Public Sector",
      description: "Meet diversity goals and compliance requirements while streamlining hiring processes.",
      buttonText: "Public Sector Solutions"
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">Tailored Solutions for Every Organization</h2>
          <p className="text-lg text-muted-foreground">
            Whatever your size or industry, SparklyFlow adapts to your unique talent acquisition needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-8 shadow-sm border border-border"
            >
              <h3 className="text-2xl font-semibold mb-3">{audience.title}</h3>
              <p className="text-muted-foreground mb-6">{audience.description}</p>
              <Button variant="outline">{audience.buttonText}</Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/20">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Need a Custom Solution?</h3>
              <p className="text-muted-foreground">
                Our team can create a tailored implementation to meet your organization's specific challenges and goals.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Button>Contact Our Team</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
