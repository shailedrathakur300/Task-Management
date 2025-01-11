'use client'

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import { useState } from "react"

type TimePeriod = 'DAILY' | 'YESTERDAY' | 'WEEKLY'

export function TimePeriodSelector() {
  const [selected, setSelected] = useState<TimePeriod>('DAILY')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[110px] justify-between bg-white">
          {selected}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[110px]">
        <DropdownMenuItem onClick={() => setSelected('DAILY')}>
          DAILY
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelected('YESTERDAY')}>
          YESTERDAY
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelected('WEEKLY')}>
          WEEKLY
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

