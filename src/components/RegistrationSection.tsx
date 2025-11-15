import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface RegistrationSectionProps {
  registrationUrl: string;
  qrCodeSrc: string;
}

export const RegistrationSection: FC<RegistrationSectionProps> = ({
  registrationUrl,
  qrCodeSrc,
}) => {
  return (
    <div className="flex flex-col items-center gap-6 py-8 lg:min-w-[280px] shrink-0">
      <Button 
        variant="cta" 
        size="xl" 
        asChild
        className="shadow-lg shadow-primary/50"
      >
        <a 
          href={registrationUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          Register Now
          <ExternalLink className="w-5 h-5" />
        </a>
      </Button>
      
      <div className="flex flex-col items-center gap-2">
        <p className="text-muted-foreground text-sm">Or scan the QR code:</p>
        <img 
          src={qrCodeSrc} 
          alt="QR Code for Registration" 
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg border-2 border-border"
        />
      </div>
    </div>
  );
};
