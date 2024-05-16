import { DataTable } from "@/components/bitcoin-cli-table"
import { getBitcoinCliCommands } from "./services"
import { columns } from "@/components/bitcoin-cli-columns"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function BitcoinCliPage() {
  
  const data= await getBitcoinCliCommands()

  return (
    <div className="w-full">      

      <h1 className="text-3xl font-bold text-center">Bitcoin CLI Commands</h1> 
      <h2 className="font-bold mb-10 text-center">B4OS</h2>

      <div className="container bg-white p-3 py-4 mx-auto border rounded-md text-muted-foreground dark:text-white dark:bg-black">
        <DataTable columns={columns} data={data} subject="Command" />
      </div>

      <div className="flex items-center justify-center py-8">
        <p className="pb-0.5">Source:</p>
        <Link href="https://chainquery.com/bitcoin-cli" target="_blank">
          <Button variant="link">
            https://chainquery.com/bitcoin-cli
          </Button>
        </Link>
      </div>

      
    </div>
  )
}
  
