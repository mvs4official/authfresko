import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    weight: "600",
    subsets: ["latin"],
});

interface HeaderProps {
label: string;
}

export const Header = ({
    label
}: HeaderProps) =>{
return (
    <div className="h-full flex flex-col gap-y-2 items-center justify-center">
<h1 className={cn("text-3xl font-semibold",
    poppins.className
)}>
    Fresko
</h1>
<p className="text-muted-foreground text-sm">
    {label}
</p>
    </div>
)
}