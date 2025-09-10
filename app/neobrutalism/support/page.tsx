import { SidebarNeobrutalism } from "@/neobrutalism/components/sidebar"
import { HeaderNeobrutalism } from "@/neobrutalism/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/neobrutalism/components/card"
import { Button } from "@/neobrutalism/components/button"
import { MessageSquare, Clock, CheckCircle, AlertTriangle, Plus, User } from "lucide-react"

export default function SupportPage() {
  const tickets = [
    { id: "#1247", title: "Error en facturación automática", client: "Empresa ABC", priority: "Alta", status: "Abierto", time: "2h" },
    { id: "#1246", title: "Consulta sobre integración API", client: "Tech Solutions", priority: "Media", status: "En Proceso", time: "4h" },
    { id: "#1245", title: "Solicitud de capacitación", client: "Global Services", priority: "Baja", status: "Cerrado", time: "1d" },
    { id: "#1244", title: "Problema de conectividad", client: "Innovation Corp", priority: "Alta", status: "Abierto", time: "30m" },
  ]

  return (
    <div className="flex min-h-screen bg-red-300">
      <SidebarNeobrutalism />
      <div className="flex-1 flex flex-col">
        <HeaderNeobrutalism />
        <div className="flex-1 p-8 bg-red-300">
          <div className="mb-8">
            <h1 className="text-6xl font-black text-black transform -rotate-1 mb-4">
              SOPORTE TÉCNICO
            </h1>
            <p className="text-black font-bold text-lg bg-white px-4 py-2 border-4 border-black inline-block transform rotate-1">
              Centro de atención y tickets de soporte
            </p>
          </div>

          <div className="flex gap-4 mb-8">
            <Button>
              <Plus className="size-4" strokeWidth={3} />
              NUEVO TICKET
            </Button>
            <Button variant="outline">
              FILTRAR TICKETS
            </Button>
            <Button variant="outline">
              EXPORTAR REPORTE
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="size-6 text-blue-600" strokeWidth={3} />
                  TICKETS TOTALES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-black text-blue-600 mb-2">1,247</div>
                <p className="font-bold text-black">Este mes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="size-6 text-orange-600" strokeWidth={3} />
                  PENDIENTES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-black text-orange-600 mb-2">23</div>
                <p className="font-bold text-black">Requieren atención</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="size-6 text-green-600" strokeWidth={3} />
                  RESUELTOS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-black text-green-600 mb-2">1,201</div>
                <p className="font-bold text-black">Tickets cerrados</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="size-6 text-red-600" strokeWidth={3} />
                  CRÍTICOS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-black text-red-600 mb-2">3</div>
                <p className="font-bold text-black">Prioridad alta</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>TICKETS RECIENTES</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tickets.map((ticket, index) => (
                  <div key={index} className="bg-white border-4 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-black text-lg text-black">{ticket.id}</span>
                          <span className={`px-2 py-1 border-2 border-black font-bold text-xs ${
                            ticket.priority === "Alta" ? "bg-red-200" :
                            ticket.priority === "Media" ? "bg-yellow-200" : "bg-green-200"
                          }`}>
                            {ticket.priority}
                          </span>
                          <span className={`px-2 py-1 border-2 border-black font-bold text-xs ${
                            ticket.status === "Abierto" ? "bg-red-200" :
                            ticket.status === "En Proceso" ? "bg-yellow-200" : "bg-green-200"
                          }`}>
                            {ticket.status}
                          </span>
                        </div>
                        <h3 className="font-black text-lg text-black mb-1">{ticket.title}</h3>
                        <div className="flex gap-4 text-sm font-bold text-gray-700">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" strokeWidth={3} />
                            {ticket.client}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" strokeWidth={3} />
                            {ticket.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">
                          RESPONDER
                        </Button>
                        <Button variant="outline" size="sm">
                          VER DETALLE
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}