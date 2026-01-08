import { PropsWithChildren, ReactNode } from "react";
import { Button, type ButtonProps } from "./button";

interface TabProps extends ButtonProps {
  title: string;
  isActive?: boolean;
}

const Tab = ({
  title,
  variant = "ghost",
  isActive = false,
  ...props
}: TabProps) => {
  return (
    <Button variant={isActive ? "primary" : variant} {...props}>
      {title}
    </Button>
  );
};

const Tabs = ({ children }: PropsWithChildren) => {
  if (!Array.isArray(children)) {
    children = [children] as ReactNode[];
  }

  const tabs: ReactNode[] = [];

  for (let child of children) {
    if (child.type === Tab) {
      tabs.push(child);
    }
  }

  return <div className="flex flex-wrap">{tabs}</div>;
};

Tabs.displayName = "Tabs";
Tabs.Tab = Tab;

export { Tabs };
