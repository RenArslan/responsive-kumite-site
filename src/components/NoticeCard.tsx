import { FC, ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

interface NoticeCardProps {
  children: ReactNode;
}

export const NoticeCard: FC<NoticeCardProps> = ({ children }) => {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-card border-border">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div className="text-left space-y-4 text-card-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
