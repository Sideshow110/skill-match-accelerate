
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TestimonialCardProps {
  companyName: string;
  challenge: string;
  solution: string;
  result: string;
  industry?: string;
  className?: string;
}

export const TestimonialCard = ({ 
  companyName, 
  challenge, 
  solution, 
  result, 
  industry, 
  className = '' 
}: TestimonialCardProps) => {
  return (
    <Card className={`h-full flex flex-col ${className}`}>
      <CardHeader className="pb-2 pt-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{companyName}</h3>
          {industry && (
            <Badge variant="outline" className="text-xs">{industry}</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="mb-3">
          <p className="text-sm font-semibold text-muted-foreground">Challenge:</p>
          <p className="text-sm">{challenge}</p>
        </div>
        <div className="mb-3">
          <p className="text-sm font-semibold text-muted-foreground">Solution:</p>
          <p className="text-sm">{solution}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-muted-foreground">Results:</p>
          <p className="text-sm">{result}</p>
        </div>
      </CardContent>
    </Card>
  );
};
