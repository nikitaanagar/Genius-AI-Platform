import { icons } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon: "Code" | "Music" | "FileAudio" | "ImageIcon" | "Code"; // Specify allowed icon names
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  // Define a mapping of icon names to Lucide icons
  const iconMapping: Record<string, React.ComponentType<any>> = {
    Code: icons.Code,
    Music: icons.Music,
    FileAudio: icons.FileAudio,
    ImageIcon: icons.Image,
    Conversation: icons.Code,
  };

  // Select the appropriate Lucide icon based on the icon prop
  const LucideIcon = iconMapping[icon];

  if (!LucideIcon) {
    console.error(`Icon '${icon}' not found in Lucide icons.`);
    // You might want to handle this case, e.g., use a default icon or show an error message.
    return null;
  }

  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <LucideIcon className={cn("w-10 h-10", iconColor)} />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
