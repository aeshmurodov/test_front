'use client'

import Image from "next/image";
import { DataTableTest } from "@/components/DataTableTest";
import { columns } from "@/components/columns"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <DataTableTest
        
          data={
            [
              { id: "1", name: "Product 1", count: 1, price: 100 },
              { id: "2", name: "Product 2", count: 2, price: 200 },
              { id: "3", name: "Product 3", count: 3, price: 300 },
              { id: "4", name: "Product 4", count: 4, price: 400 },
              { id: "5", name: "Product 5", count: 5, price: 500 },
              { id: "6", name: "Product 6", count: 6, price: 600 },
              { id: "7", name: "Product 7", count: 7, price: 700 },
              { id: "8", name: "Product 8", count: 8, price: 800 },
              { id: "9", name: "Product 9", count: 9, price: 900 },
              { id: "10", name: "Product 10", count: 10, price: 1000 },
            ]
          }
        />
    </main>
  );
}
