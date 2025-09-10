import { NeobrutalistLayout } from "@/neobrutalism/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/neobrutalism/components/card"
import { Button } from "@/neobrutalism/components/button"
import { Settings, User, Shield, Bell, Database, Palette } from "lucide-react"

export default function SettingsPage() {
  return (
    <NeobrutalistLayout bgColor="bg-teal-300">
      <div className="flex-1 p-4 lg:p-8 bg-teal-300">
          <div className="mb-8">
            <h1 className="text-6xl font-black text-black transform -rotate-1 mb-4">
              CONFIGURACIÓN
            </h1>
            <p className="text-black font-bold text-lg bg-white px-4 py-2 border-4 border-black inline-block transform rotate-1">
              Ajustes y preferencias del sistema
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="size-6 text-blue-600" strokeWidth={3} />
                  PERFIL DE USUARIO
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-100 border-4 border-black p-4">
                  <h3 className="font-black text-lg mb-2">Información Personal</h3>
                  <p className="font-bold text-sm text-gray-700 mb-2">
                    Actualiza tu información de contacto
                  </p>
                </div>
                <Button className="w-full">
                  EDITAR PERFIL
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="size-6 text-green-600" strokeWidth={3} />
                  SEGURIDAD
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-100 border-4 border-black p-4">
                  <h3 className="font-black text-lg mb-2">Autenticación 2FA</h3>
                  <p className="font-bold text-sm text-gray-700 mb-2">
                    Configurar doble factor
                  </p>
                </div>
                <Button className="w-full">
                  CONFIGURAR 2FA
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="size-6 text-yellow-600" strokeWidth={3} />
                  NOTIFICACIONES
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-100 border-4 border-black p-4">
                  <h3 className="font-black text-lg mb-2">Alertas del Sistema</h3>
                  <p className="font-bold text-sm text-gray-700 mb-2">
                    Gestionar preferencias
                  </p>
                </div>
                <Button className="w-full">
                  GESTIONAR ALERTAS
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="size-6 text-purple-600" strokeWidth={3} />
                  BASE DE DATOS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-100 border-4 border-black p-4">
                  <h3 className="font-black text-lg mb-2">Backup y Restore</h3>
                  <p className="font-bold text-sm text-gray-700 mb-2">
                    Gestión de respaldos
                  </p>
                </div>
                <Button className="w-full">
                  CREAR BACKUP
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="size-6 text-pink-600" strokeWidth={3} />
                  APARIENCIA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-100 border-4 border-black p-4">
                  <h3 className="font-black text-lg mb-2">Tema y Colores</h3>
                  <p className="font-bold text-sm text-gray-700 mb-2">
                    Personalizar interfaz
                  </p>
                </div>
                <Button className="w-full">
                  CAMBIAR TEMA
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="size-6 text-orange-600" strokeWidth={3} />
                  SISTEMA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-100 border-4 border-black p-4">
                  <h3 className="font-black text-lg mb-2">Configuración Avanzada</h3>
                  <p className="font-bold text-sm text-gray-700 mb-2">
                    Parámetros del sistema
                  </p>
                </div>
                <Button className="w-full">
                  CONFIGURAR
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>CONFIGURACIONES RÁPIDAS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-white border-4 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="font-black text-lg mb-2">Modo Oscuro</h3>
                    <Button variant="outline" size="sm">
                      ACTIVAR
                    </Button>
                  </div>
                  <div className="bg-white border-4 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="font-black text-lg mb-2">Idioma</h3>
                    <Button variant="outline" size="sm">
                      ESPAÑOL
                    </Button>
                  </div>
                  <div className="bg-white border-4 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="font-black text-lg mb-2">Zona Horaria</h3>
                    <Button variant="outline" size="sm">
                      UTC-5
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
    </NeobrutalistLayout>
  )
}