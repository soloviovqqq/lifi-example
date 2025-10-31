"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ChangeTheme() {
  const { setTheme } = useTheme()

  return (
    <div className='space-x-4'>
      <Button variant="outline" onClick={() => setTheme("dark")}>
        <Moon/> Dark
      </Button>
      <Button variant="outline" onClick={() => setTheme("light")}>
        <Sun/>Light
      </Button>
    </div>
  )
}
