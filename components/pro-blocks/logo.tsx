import Image from "next/image";

interface LogoProps {
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ showText = true, className }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/ces-logo.png"
          alt="Central Education Services logo"
          fill
          className="object-cover scale-175"
          style={{ objectPosition: "50% 53%" }}
          sizes="48px"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold text-primary leading-snug">Central Education</span>
          <span className="text-xs font-medium text-muted-foreground">Services</span>
        </div>
      )}
    </div>
  );
};
