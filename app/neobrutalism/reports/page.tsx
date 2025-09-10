import { SidebarNeobrutalism } from "@/neobrutalism/components/sidebar"
import { HeaderNeobrutalism } from "@/neobrutalism/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/neobrutalism/components/card"
import { Button } from "@/neobrutalism/components/button"
import { FileText, Download, Calendar, Filter } from "lucide-react"

export default function ReportsPage() {
  const reports = [
    { name: "Reporte Mensual de Ventas", date: "2024-06-30", type: "PDF", status: "Completado" },
    { name: "Análisis de Satisfacción Cliente", date: "2024-06-28", type: "Excel", status: "Completado" },
    { name: "Métricas de Rendimiento Q2", date: "2024-06-25", type: "PDF", status: "En Proceso" },
    { name: "Dashboard Ejecutivo", date: "2024-06-20", type: "PowerBI", status: "Completado" },
  ]

  return (
    <div className="flex min-h-screen bg-orange-300">
      <SidebarNeobrutalism />
      <div className="flex-1 flex flex-col">
        <HeaderNeobrutalism />
        <div className="flex-1 p-8 bg-orange-300">
          <div className="mb-8">
            <h1 className="text-6xl font-black text-black transform -rotate-1 mb-4">
              REPORTES
            </h1>
            <p className="text-black font-bold text-lg bg-white px-4 py-2 border-4 border-black inline-block transform rotate-1">
              Informes y documentación empresarial
            </p>
          </div>

          <div className="flex gap-4 mb-8">
            <Button>
              <FileText className="size-4" strokeWidth={3} />
              NUEVO REPORTE
            </Button>
            <Button variant="outline">
              <Filter className="size-4" strokeWidth={3} />
              FILTRAR
            </Button>
            <Button variant="outline">
              <Calendar className="size-4" strokeWidth={3} />
              PROGRAMAR
            </Button>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>REPORTES RECIENTES</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.map((report, index) => (
                    <div key={index} className="bg-white border-4 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-black text-lg text-black mb-1">{report.name}</h3>
                          <div className="flex gap-4 text-sm font-bold text-gray-700">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" strokeWidth={3} />
                              {report.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <FileText className="h-3 w-3" strokeWidth={3} />
                              {report.type}
                            </div>
                            <span className={`px-2 py-1 border-2 border-black ${
                              report.status === "Completado" ? "bg-green-200" : "bg-yellow-200"
                            }`}>
                              {report.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            <Download className="size-4" strokeWidth={3} />
                            DESCARGAR
                          </Button>
                          <Button variant="outline" size="sm">
                            VER
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>REPORTES AUTOMÁTICOS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-black text-blue-600 mb-2">12</div>
                  <p className="font-bold text-black">Configurados este mes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>DESCARGAS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-black text-green-600 mb-2">1,347</div>
                  <p className="font-bold text-black">Total este mes</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ALMACENAMIENTO</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-black text-purple-600 mb-2">2.4GB</div>
                  <p className="font-bold text-black">Espacio utilizado</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}