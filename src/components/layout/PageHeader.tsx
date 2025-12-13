import { cn } from "@/lib/utils";
import { InteractiveGradient } from "@/components/ui/interactive-gradient";

interface PageHeaderProps {
    title: string;
    description?: string;
    className?: string;
    variant?: "default" | "grid" | "dots" | "waves" | "circles";
}

export function PageHeader({ title, description, className, variant = "default" }: PageHeaderProps) {
    const getVariantStyles = () => {
        switch (variant) {
            case "grid":
                return "bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]";
            case "dots":
                return "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent [background-size:30px_30px]";
            case "waves":
                return "bg-[linear-gradient(45deg,#ffffff08_25%,transparent_25%,transparent_50%,#ffffff08_50%,#ffffff08_75%,transparent_75%,transparent)] [background-size:60px_60px]";
            case "circles":
                return "bg-[radial-gradient(circle_800px_at_100%_200px,#ffffff1a,transparent)]";
            default:
                return "";
        }
    };

    return (
        <div className={cn("relative overflow-hidden py-12 md:py-16 text-center text-white", className)}>
            <InteractiveGradient />
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">{title}</h1>
                {description && (
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
