"use client";

import { WidgetConfig, WidgetDrawer } from "@lifi/widget";
import { LiFiWidget } from "@lifi/widget";
import { useRef } from "react";
import { useTheme } from "next-themes";
import {Button} from "@/components/ui/button";

export function Widget() {
  const { theme } = useTheme();
  const drawerRef = useRef<WidgetDrawer>(null);
  const config = {
    fee: 0.005,
    variant: "drawer",
    appearance: theme,
    chains: {
      deny: [101],
    },
    theme: {
      palette: {
        primary: { main: "#178B76" },
        secondary: { main: "#23d1b4" },
      },
      shape: {
        borderRadius: 8,
        borderRadiusSecondary: 8,
      },
      typography: {
        fontFamily: "Poppins",
      },
    },
  } as Partial<WidgetConfig>;

  return (
    <>
      <Button onClick={() => drawerRef.current?.openDrawer()} variant='outline'>Open LI FI drawer</Button>
      <LiFiWidget config={config} ref={drawerRef} integrator="Omni-Hub" />
    </>
  );
}
