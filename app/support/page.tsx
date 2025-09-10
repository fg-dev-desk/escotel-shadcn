import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Clock, CheckCircle, AlertTriangle, Plus, User, Calendar } from "lucide-react"

export default function SupportPage() {
  const tickets = [
    { id: "#1247", title: "Error en facturación automática", client: "Empresa ABC", priority: "Alta", status: "Abierto", time: "2h" },
    { id: "#1246", title: "Consulta sobre integración API", client: "Tech Solutions", priority: "Media", status: "En Proceso", time: "4h" },
    { id: "#1245", title: "Solicitud de capacitación", client: "Global Services", priority: "Baja", status: "Cerrado", time: "1d" },
    { id: "#1244", title: "Problema de conectividad", client: "Innovation Corp", priority: "Alta", status: "Abierto", time: "30m" },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Soporte Técnico</h2>
            <p className="text-muted-foreground">Centro de atención y tickets de soporte</p>
          </div>

          <div className="flex gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Ticket
            </Button>
            <Button variant="outline">
              Filtrar Tickets
            </Button>
            <Button variant="outline">
              Exportar Reporte
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tickets Totales</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,247</div>
                <p className="text-xs text-muted-foreground">
                  Este mes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
                <Clock className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">23</div>
                <p className="text-xs text-muted-foreground">
                  Requieren atención
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Resueltos</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">1,201</div>
                <p className="text-xs text-muted-foreground">
                  Tickets cerrados
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Críticos</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">3</div>
                <p className="text-xs text-muted-foreground">
                  Prioridad alta
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tickets Recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tickets.map((ticket, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold text-lg">{ticket.id}</span>
                        <Badge variant={
                          ticket.priority === "Alta" ? "destructive" :
                          ticket.priority === "Media" ? "default" : "secondary"
                        }>
                          {ticket.priority}
                        </Badge>
                        <Badge variant={
                          ticket.status === "Abierto" ? "destructive" :
                          ticket.status === "En Proceso" ? "default" : "secondary"
                        }>
                          {ticket.status}
                        </Badge>
                      </div>
                      <h3 className="font-semibold">{ticket.title}</h3>
                      <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {ticket.client}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {ticket.time}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">Responder</Button>
                      <Button variant="outline" size="sm">Ver Detalle</Button>
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