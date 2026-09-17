import { cn } from '../utils';

export function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  // We remove the invert filter to ensure full-color uploaded logos display correctly
  return (
    <div className="flex items-center justify-center shrink-0">
      <img 
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt="Team Avron Logo" 
        className={cn(
          "h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        )}
      />
    </div>
  );
}

