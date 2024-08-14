"use client";
import { BellIcon, GraduationCapIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";
import Icon from "./ui/icon";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { cn } from "@/lib/utils";

interface SideNavItemProps extends LinkProps {
  text: string;
  icon: keyof typeof dynamicIconImports;
  href: Url;
}

const SideNavItem: React.FC<SideNavItemProps> = (props) => {
  const { text, icon, href } = props;
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
        pathname == href ? "bg-muted" : "",
      )}
      prefetch={true}
    >
      <Icon name={icon} className="w-4 h-4" />
      {text}
    </Link>
  );
};

export function SideNav() {
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold"
          prefetch={false}
        >
          <GraduationCapIcon className="h-6 w-6" />
          <span className="">University Dashboard</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <BellIcon className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <SideNavItem href="/" icon="house" text="Dashboard" />
          <SideNavItem href="/classes" icon="calendar" text="Classes" />
          <SideNavItem href="/grades" icon="book" text="Grades" />
          <SideNavItem
            href="/student-organizations"
            icon="users"
            text="Student Organizations"
          />
          <SideNavItem
            href="/career-services"
            icon="briefcase"
            text="Career Services"
          />
        </nav>
      </div>
    </div>
  );
}
