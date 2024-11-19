'use client'

import { ListFilter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { TableEvents } from '@/components/TableEvents'

export default function MyEvents() {
  return (
    <div className="grid  items-start gap-4 p-8 lg:gap-8 bg-muted-foreground">
      <Tabs defaultValue="all" className="bg-muted-foreground">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            {/* <TabsTrigger value="active">Ativos</TabsTrigger>
            <TabsTrigger value="finished">Finalizados</TabsTrigger>
            <TabsTrigger value="cancel">Cancelados</TabsTrigger> */}
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-7 gap-1">
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only lg:not-sr-only whitespace-nowrap">
                    Filter
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Ativos
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Rascunhos</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Finalizados</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            {/* <Button size="sm" variant="outline" className="h-7 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button size="sm" className="h-7 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button> */}
          </div>
        </div>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Eventos</CardTitle>
              <CardDescription>
                Administre seus eventos e veja suas vendas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TableEvents />
            </CardContent>
            <CardFooter>
              <div className="text-xs text--foreground pt-4">
                Mostrando <strong>1-10</strong> of <strong>15</strong> eventos
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
