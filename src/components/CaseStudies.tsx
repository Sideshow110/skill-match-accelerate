
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CaseStudies = () => {
  const caseStudies = [
    {
      companyName: "Global Enterprise",
      industry: "Multinational",
      challenge: "Low candidate conversion rates, inefficient processes, and a suboptimal candidate experience.",
      solution: "Implemented AI-driven tools to automate candidate screening and interview scheduling.",
      result: "Faster hires and an improved candidate experience with 85% reduction in time-to-hire."
    },
    {
      companyName: "Growth-Stage Startup",
      industry: "Finance",
      challenge: "Seeking a CFO with specific experience (IPO and significant revenue growth) with traditional search methods failing.",
      solution: "AI was used to search through large datasets and identify candidates with the specific experience and skills required.",
      result: "Successfully placed an ideal candidate within 4 weeks instead of the typical 3-6 month timeline."
    },
    {
      companyName: "Tech Company",
      industry: "Technology",
      challenge: "Recruitment messaging was not inclusive enough, impacting the number of female applicants.",
      solution: "AI analyzed recruitment texts to ensure neutral and inclusive language.",
      result: "57% increase in female applicants and a more diverse candidate pipeline."
    },
    {
      companyName: "Enterprise Corporation",
      industry: "Retail",
      challenge: "Large recruitment teams spending significant time on administrative tasks and manual CV screening.",
      solution: "Implemented AI to automate CV screening and preliminary interviews via chatbots.",
      result: "Freed up recruiters' time by 60% to focus on more strategic tasks and candidate relationships."
    },
    {
      companyName: "Healthcare Provider",
      industry: "Healthcare",
      challenge: "Deficient onboarding process led to new hires not feeling engaged and leaving prematurely.",
      solution: "AI created personalized training programs and automated administrative tasks during onboarding.",
      result: "35% reduction in employee turnover among new hires within the first 90 days."
    }
  ];

  return (
    <section id="case-studies" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            See how organizations like yours have transformed their hiring processes with SparklyFlow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.slice(0, 3).map((study, index) => (
            <TestimonialCard
              key={index}
              companyName={study.companyName}
              industry={study.industry}
              challenge={study.challenge}
              solution={study.solution}
              result={study.result}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {caseStudies.slice(3, 5).map((study, index) => (
            <TestimonialCard
              key={index}
              companyName={study.companyName}
              industry={study.industry}
              challenge={study.challenge}
              solution={study.solution}
              result={study.result}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="font-medium">
            View More Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
