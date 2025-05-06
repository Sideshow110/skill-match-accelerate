
import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const IconCard = ({ icon: Icon, title, description, className = '' }: IconCardProps) => {
  return (
    <div className={`p-6 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
