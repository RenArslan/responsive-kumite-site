import { FC } from "react";

interface EventPosterProps {
  src: string;
  alt: string;
}

export const EventPoster: FC<EventPosterProps> = ({ src, alt }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto rounded-lg shadow-2xl"
      />
    </div>
  );
};
