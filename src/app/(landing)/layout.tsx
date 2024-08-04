import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="size-full">
      <DotPattern className={cn("[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]")} />
      {children}
    </div>
  );
};

export default Layout;
