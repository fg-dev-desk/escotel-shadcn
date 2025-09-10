import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Calendar, Filter } from "lucide-react"

export default function ReportsPage() {
  const reports = [
    { name: "Reporte Mensual de Ventas", date: "2024-06-30", type: "PDF", status: "Completado" },
    { name: "Análisis de Satisfacción Cliente", date: "2024-06-28", type: "Excel", status: "Completado" },
    { name: "Métricas de Rendimiento Q2", date: "2024-06-25", type: "PDF", status: "En Proceso" },
    { name: "Dashboard Ejecutivo", date: "2024-06-20", type: "PowerBI", status: "Completado" },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Reportes</h2>
            <p className="text-muted-foreground">Informes y documentación empresarial</p>
          </div>

          <div className="flex gap-2">
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Nuevo Reporte
            </Button>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtrar
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Programar
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Reportes Recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold">{report.name}</h3>
                      <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {report.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {report.type}
                        </div>
                        <Badge variant={report.status === "Completado" ? "default" : "secondary"}>
                          {report.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Descargar
                      </Button>
                      <Button size="sm">Ver</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Reportes Automáticos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  Configurados este mes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Descargas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,347</div>
                <p className="text-xs text-muted-foreground">
                  Total este mes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Almacenamiento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4GB</div>
                <p className="text-xs text-muted-foreground">
                  Espacio utilizado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}