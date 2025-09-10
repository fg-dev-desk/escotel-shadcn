import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, UserPlus, Search, Phone, Mail } from "lucide-react"

export default function ClientsPage() {
  const clients = [
    { name: "Empresa ABC S.A.", contact: "María González", phone: "+1 234-567-8900", email: "maria@abc.com", status: "Activo" },
    { name: "Tech Solutions Ltd.", contact: "Carlos Ruiz", phone: "+1 234-567-8901", email: "carlos@tech.com", status: "Activo" },
    { name: "Global Services Inc.", contact: "Ana López", phone: "+1 234-567-8902", email: "ana@global.com", status: "Pendiente" },
    { name: "Innovation Corp.", contact: "Pedro Sánchez", phone: "+1 234-567-8903", email: "pedro@innovation.com", status: "Activo" },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Gestión de Clientes</h2>
            <p className="text-muted-foreground">Administración y seguimiento de clientes</p>
          </div>

          <div className="flex gap-2">
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Nuevo Cliente
            </Button>
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Buscar
            </Button>
            <Button variant="outline">
              Exportar Lista
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Clientes</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">847</div>
                <p className="text-xs text-muted-foreground">
                  Clientes registrados
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Clientes Activos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">723</div>
                <p className="text-xs text-muted-foreground">
                  Este mes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Nuevos Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47</div>
                <p className="text-xs text-muted-foreground">
                  Últimos 30 días
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Retención</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">94%</div>
                <p className="text-xs text-muted-foreground">
                  Tasa de retención
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Lista de Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clients.map((client, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{client.name}</h3>
                      <div className="grid md:grid-cols-3 gap-2 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {client.contact}
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {client.phone}
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {client.email}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={client.status === "Activo" ? "default" : "secondary"}>
                        {client.status}
                      </Badge>
                      <Button size="sm">Ver Detalle</Button>
                      <Button variant="outline" size="sm">Editar</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}