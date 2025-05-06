
import { 
  Clock, 
  Users, 
  Briefcase, 
  Handshake,
  MessageSquare,
  BarChart,
  Database
} from "lucide-react";
import { IconCard } from "@/components/ui/IconCard";

export const KeyBenefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Accelerate Hiring",
      description: "Reduce time-to-hire by up to 85% with automation and AI-driven candidate matching."
    },
    {
      icon: Users,
      title: "Improve Talent Quality",
      description: "Identify best-fit candidates based on skills and potential, not just keywords."
    },
    {
      icon: Briefcase,
      title: "Enhance Productivity",
      description: "AI assistants offload tedious tasks so your team can focus on strategic work."
    },
    {
      icon: Handshake,
      title: "Foster Diversity & Inclusion",
      description: "Enable unbiased, skills-based hiring decisions to build more diverse teams."
    },
    {
      icon: MessageSquare,
      title: "Seamless Candidate Experience",
      description: "Deliver engaging, personalized interactions throughout the hiring process."
    },
    {
      icon: BarChart,
      title: "Actionable Insights",
      description: "Make data-driven decisions with robust analytics and performance tracking."
    },
    {
      icon: Database,
      title: "Consolidate & Simplify",
      description: "Replace multiple tools with a single platform featuring unified data and workflows."
    }
  ];

  return (
    <section id="features" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">Transforming Talent Acquisition with AI</h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive AI solution streamlines the entire recruitment process, 
            helping you find the right talent faster and more efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <IconCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
