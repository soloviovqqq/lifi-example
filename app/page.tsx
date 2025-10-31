import {ChangeTheme} from "@/components/change-theme";
import {Alert, AlertDescription} from "@/components/ui/alert";
import {Widget} from "@/components/widget";
import {AlertCircleIcon, Footprints, Lightbulb, TriangleAlert} from "lucide-react";
import {AlertTitle} from "@mui/material";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className='max-w-xl space-y-4'>
        <Alert>
          <TriangleAlert/>
          <AlertTitle>Important note</AlertTitle>
          <AlertDescription>
            You dont need to connect any wallet to reproduce this issue.
          </AlertDescription>
        </Alert>

        <Alert>
          <Footprints />
          <AlertTitle>Steps to reproduce</AlertTitle>
          <AlertDescription>

            <ul className="list-inside list-disc text-sm">
              <li>Open LI FI drawer (click on the button below)</li>
              <li>In LI FI drawer settings change appearance to dark</li>
              <li>Close LI FI drawer</li>
              <li>Set the nextjs theme to light</li>
              <li>Refresh the page</li>
              <li>When the component {'<Widget/>'} is mounted, the {'<html>'} tag is modified (if comment component {'<Widget/>'} everything works properly)</li>
            </ul>
          </AlertDescription>
        </Alert>

        <Alert>
          <Lightbulb/>
          <AlertTitle>
            Expected behavior
          </AlertTitle>
          <AlertDescription>
          The widget should not modify the html element or global theme classes (dark, light, etc.). It should only apply its theme internally based on the provided config.
          </AlertDescription>
        </Alert>

        <Alert>
          <AlertCircleIcon/>
          <AlertTitle>Environment</AlertTitle>
          <AlertDescription>
            <ul className="list-inside list-disc text-sm">
              <li>Framework: Next.js 16</li>
              <li>Theme library: next-themes</li>
              <li>Widget version: @lifi/widget:^3.34.0</li>
              <li>Browser: Chrome / Safari</li>
              <li>OS: macOS</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>

      <ChangeTheme/>
      <Widget/>
    </div>
  );
}
