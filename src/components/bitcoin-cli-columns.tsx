"use client"

import { ColumnDef } from "@tanstack/react-table"
import { BitcoinCliCommand } from "../app/services"
import { ArrowUpDown, SquareArrowOutUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export const columns: ColumnDef<BitcoinCliCommand>[] = [
  
  {
    accessorKey: "name",
    header: ({ column }) => {
        return (
          <Button variant="ghost" className="pl-0 dark:text-white"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Name
            <ArrowUpDown className="w-4 h-4 ml-1" />
          </Button>
    )},
    cell: ({ row }) => {
      const data= row.original
      return (
        <Link href={data.url} target="_blank">
          <Button variant="link" className="gap-2 px-0">
            {data.name}
          </Button>
      </Link>
  )
    },
  },

  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button variant="ghost" className="pl-0 dark:text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Description
          <ArrowUpDown className="w-4 h-4 ml-1" />
        </Button>
      )
    },
  },
  {
    accessorKey: "arguments",
    header: ({ column }) => {
      return (
        <Button variant="ghost" className="pl-0 dark:text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Arguments
          <ArrowUpDown className="w-4 h-4 ml-1" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const data= row.original
      const commands= data.arguments
      return (
        <div>
          {
            commands.map((command, index) => {
              const args= command.split(":")[0]
              const description= command.split(":")[1]
              return (
                <div key={index}>                 
                  {args !== "none" &&
                    <>
                      <p className="font-bold">- {args}:</p>
                      <p className="text-sm text-gray-500">{description}</p>
                    </> 
                  }
                </div>
              )
            })
          }
        </div>
      )
    },
  },
  {
    accessorKey: "url",
    header: ({ column }) => {
      return (
        <Button variant="ghost" className="pl-0 dark:text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Link
          <ArrowUpDown className="w-4 h-4 ml-1" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const data= row.original
      return (
        <div>
          <Link href={data.url} target="_blank">
            <Button variant="link" className="gap-2">
              <SquareArrowOutUpRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      )
    },
  },
]


