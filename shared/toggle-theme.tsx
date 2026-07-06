"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMount(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    mount && (
      <Button
        size="icon"
        onClick={() =>
          resolvedTheme === "light" ? setTheme("dark") : setTheme("light")
        }
        variant="ghost"
      >
        {resolvedTheme === "light" ? <Moon /> : <Sun />}
      </Button>
    )
  );
};

export default ToggleTheme;
