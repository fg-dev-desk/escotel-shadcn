import { SidebarNeobrutalism } from "@/neobrutalism/components/sidebar"
import { HeaderNeobrutalism } from "@/neobrutalism/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/neobrutalism/components/card"
import { Button } from "@/neobrutalism/components/button"
import { TrendingUp, BarChart3, PieChart } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-lime-300">
      <SidebarNeobrutalism />
      <div className="flex-1 flex flex-col">
        <HeaderNeobrutalism />
        <div className="flex-1 p-8 bg-lime-300">
          <div className="mb-8">
            <h1 className="text-6xl font-black text-black transform -rotate-1 mb-4">
              ANÁLISIS DE DATOS
            </h1>
            <p className="text-black font-bold text-lg bg-white px-4 py-2 border-4 border-black inline-block transform rotate-1">
              Insights profundos y métricas avanzadas
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="size-6 text-green-600" strokeWidth={3} />
                  CRECIMIENTO MENSUAL
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-black text-green-600 mb-2">+24.5%</div>
                <p className="font-bold text-black">Comparado con el mes anterior</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="size-6 text-blue-600" strokeWidth={3} />
                  CONVERSIONES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-black text-blue-600 mb-2">1,247</div>
                <p className="font-bold text-black">Esta semana</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="size-6 text-purple-600" strokeWidth={3} />
                  RETENCIÓN
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-black text-purple-600 mb-2">89.2%</div>
                <p className="font-bold text-black">Usuarios activos</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>ANÁLISIS AVANZADO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-100 border-4 border-black p-4">
                  <h3 className="font-black text-lg mb-2">Segmentación de Usuarios</h3>
                  <p className="font-bold text-sm text-gray-700">
                    Análisis detallado de comportamiento por demografía
                  </p>
                </div>
                <Button className="w-full">
                  VER REPORTE COMPLETO
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PREDICCIONES IA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-100 border-4 border-black p-4">
                  <h3 className="font-black text-lg mb-2">Pronóstico Q4</h3>
                  <p className="font-bold text-sm text-gray-700">
                    Proyecciones basadas en machine learning
                  </p>
                </div>
                <Button variant="secondary" className="w-full">
                  CONFIGURAR ALERTAS
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}