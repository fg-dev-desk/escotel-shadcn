import { SidebarNeobrutalism } from "@/neobrutalism/components/sidebar"
import { HeaderNeobrutalism } from "@/neobrutalism/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/neobrutalism/components/card"
import { Button } from "@/neobrutalism/components/button"
import { Users, UserPlus, Search, Phone, Mail } from "lucide-react"

export default function ClientsPage() {
  const clients = [
    { name: "Empresa ABC S.A.", contact: "María González", phone: "+1 234-567-8900", email: "maria@abc.com", status: "Activo" },
    { name: "Tech Solutions Ltd.", contact: "Carlos Ruiz", phone: "+1 234-567-8901", email: "carlos@tech.com", status: "Activo" },
    { name: "Global Services Inc.", contact: "Ana López", phone: "+1 234-567-8902", email: "ana@global.com", status: "Pendiente" },
    { name: "Innovation Corp.", contact: "Pedro Sánchez", phone: "+1 234-567-8903", email: "pedro@innovation.com", status: "Activo" },
  ]

  return (
    <div className="flex min-h-screen bg-purple-300">
      <SidebarNeobrutalism />
      <div className="flex-1 flex flex-col">
        <HeaderNeobrutalism />
        <div className="flex-1 p-8 bg-purple-300">
          <div className="mb-8">
            <h1 className="text-6xl font-black text-black transform -rotate-1 mb-4">
              GESTIÓN DE CLIENTES
            </h1>
            <p className="text-black font-bold text-lg bg-white px-4 py-2 border-4 border-black inline-block transform rotate-1">
              Administración y seguimiento de clientes
            </p>
          </div>

          <div className="flex gap-4 mb-8">
            <Button>
              <UserPlus className="size-4" strokeWidth={3} />
              NUEVO CLIENTE
            </Button>
            <Button variant="outline">
              <Search className="size-4" strokeWidth={3} />
              BUSCAR
            </Button>
            <Button variant="outline">
              EXPORTAR LISTA
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="size-6 text-blue-600" strokeWidth={3} />
                  TOTAL CLIENTES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-black text-blue-600 mb-2">847</div>
                <p className="font-bold text-black">Clientes registrados</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CLIENTES ACTIVOS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-black text-green-600 mb-2">723</div>
                <p className="font-bold text-black">Este mes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NUEVOS CLIENTES</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-black text-purple-600 mb-2">47</div>
                <p className="font-bold text-black">Últimos 30 días</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>RETENCIÓN</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-black text-orange-600 mb-2">94%</div>
                <p className="font-bold text-black">Tasa de retención</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>LISTA DE CLIENTES</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clients.map((client, index) => (
                  <div key={index} className="bg-white border-4 border-black p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-black text-xl text-black mb-2">{client.name}</h3>
                        <div className="grid md:grid-cols-3 gap-4 text-sm font-bold text-gray-700">
                          <div className="flex items-center gap-2">
                            <Users className="size-4" strokeWidth={3} />
                            {client.contact}
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="size-4" strokeWidth={3} />
                            {client.phone}
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="size-4" strokeWidth={3} />
                            {client.email}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 border-2 border-black font-bold ${
                          client.status === "Activo" ? "bg-green-200" : "bg-yellow-200"
                        }`}>
                          {client.status}
                        </span>
                        <Button size="sm">
                          VER DETALLE
                        </Button>
                        <Button variant="outline" size="sm">
                          EDITAR
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