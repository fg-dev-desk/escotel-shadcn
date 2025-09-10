"use client"

import ChartBarInteractiveNeobrutalism from "../chart-bar-interactive"
import { ChartBarActiveNeobrutalism } from "../charts/chart-bar-active"
import { ChartAreaNeobrutalism } from "../charts/chart-area"
import { ChartLineNeobrutalism } from "../charts/chart-line"
import { ChartPieNeobrutalism } from "../charts/chart-pie"
import { ChartRadialNeobrutalism } from "../charts/chart-radial"
import { ChartBarMultipleNeobrutalism } from "../charts/chart-bar-multiple"
import { ChartBarStackedNeobrutalism } from "../charts/chart-bar-stacked"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./card"

export function DashboardNeobrutalism() {
  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6 bg-yellow-300 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-2">
        <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-black transform -rotate-1">
          PANEL DE CONTROL
        </h2>
        <p className="text-black font-bold text-sm lg:text-lg bg-white px-3 lg:px-4 py-2 border-4 border-black transform rotate-1">
          Monitoreo y análisis de métricas empresariales en tiempo real
        </p>
      </div>
      <div className="space-y-8">
        {/* Stats Cards */}
        <div className="grid gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-black uppercase tracking-wider">
                Ingresos Totales
              </CardTitle>
              <div className="h-8 w-8 bg-green-500 border-2 border-black flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="h-4 w-4 text-white"
                >
                  <path d="M12 2v20m9-9H3" />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black text-green-600">$1,245,892.00</div>
              <p className="text-sm font-bold text-black bg-green-200 inline-block px-2 py-1 mt-2">
                +12.4% respecto al mes anterior
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-black uppercase tracking-wider">
                Clientes Activos
              </CardTitle>
              <div className="h-8 w-8 bg-blue-500 border-2 border-black flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="h-4 w-4 text-white"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black text-blue-600">8,425</div>
              <p className="text-sm font-bold text-black bg-blue-200 inline-block px-2 py-1 mt-2">
                +8.2% respecto al mes anterior
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-black uppercase tracking-wider">
                Servicios Contratados
              </CardTitle>
              <div className="h-8 w-8 bg-purple-500 border-2 border-black flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="h-4 w-4 text-white"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black text-purple-600">15,680</div>
              <p className="text-sm font-bold text-black bg-purple-200 inline-block px-2 py-1 mt-2">
                +15.7% respecto al mes anterior
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-black uppercase tracking-wider">
                Usuarios en Línea
              </CardTitle>
              <div className="h-8 w-8 bg-red-500 border-2 border-black flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="h-4 w-4 text-white"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black text-red-600">1,247</div>
              <p className="text-sm font-bold text-black bg-red-200 inline-block px-2 py-1 mt-2">
                +89 en la última hora
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Charts Grid */}
        <div className="grid gap-4 lg:gap-6 grid-cols-1 lg:grid-cols-2">
          <ChartBarActiveNeobrutalism />
          <ChartAreaNeobrutalism />
          <ChartLineNeobrutalism />
          <ChartPieNeobrutalism />
          <ChartRadialNeobrutalism />
          <ChartBarMultipleNeobrutalism />
        </div>
        
        {/* Full width charts */}
        <div className="grid gap-4 lg:gap-6">
          <ChartBarInteractiveNeobrutalism />
          <ChartBarStackedNeobrutalism />
        </div>
      </div>
    </div>
  )
}