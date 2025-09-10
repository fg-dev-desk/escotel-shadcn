# Configuración de Browser MCP en Claude Code

Este documento contiene las instrucciones para configurar Browser MCP (Model Context Protocol) en Claude Code para leer la consola del navegador y automatizar tareas web.

## Requisitos Previos

- Claude Code instalado
- Node.js y npm instalados
- Google Chrome (o navegador compatible)

## Pasos de Instalación

### 1. Instalar Browser MCP globalmente

```bash
npm install -g @browsermcp/mcp@latest
```

### 2. Crear archivo de configuración MCP

Crear el archivo `.mcp.json` en la raíz del proyecto con el siguiente contenido:

```json
{
  "mcpServers": {
    "browsermcp": {
      "command": "npx",
      "args": ["@browsermcp/mcp@latest"],
      "env": {}
    }
  }
}
```

### 3. Reiniciar Claude Code

1. Cerrar completamente Claude Code
2. Volver a abrir Claude Code
3. Al detectar el archivo `.mcp.json`, aparecerá un prompt preguntando si usar el servidor MCP
4. Seleccionar opción 1: "Use this and all future MCP servers in this project"

### 4. Verificar instalación

Ejecutar en Claude Code:
```
/mcp
```

Debería mostrar el servidor `browsermcp` como configurado.

## Herramientas Disponibles

Una vez configurado, tendrás acceso a herramientas como:

- `mcp__browsermcp__browser_navigate` - Navegar a páginas web
- `mcp__browsermcp__browser_screenshot` - Capturar pantallas
- `mcp__browsermcp__browser_get_console_logs` - **Leer logs de consola**
- `mcp__browsermcp__browser_click` - Hacer clicks en elementos
- `mcp__browsermcp__browser_type` - Escribir texto en campos
- `mcp__browsermcp__browser_snapshot` - Obtener información de la página

## Uso Básico

### Leer consola del navegador:
```
Claude, navega a [URL] y lee los errores de la consola
```

### Automatizar tareas:
```
Claude, navega a [URL], haz click en [elemento] y captura una screenshot
```

## Troubleshooting

### Error "No MCP servers configured"
- Verificar que el archivo `.mcp.json` esté en la raíz del proyecto
- Verificar la sintaxis JSON del archivo
- Reiniciar Claude Code completamente

### Error de schema
- Asegurar que se usa `mcpServers` (no `servers`)
- Incluir los campos `command`, `args`, y `env`
- Verificar que la sintaxis JSON sea válida

### Browser MCP no funciona
- Verificar que esté instalado: `npx @browsermcp/mcp --version`
- Reinstalar si es necesario: `npm install -g @browsermcp/mcp@latest`

## Notas de Seguridad

- Los servidores MCP pueden ejecutar código y acceder a recursos del sistema
- Todas las llamadas a herramientas requieren aprobación
- Usar solo servidores MCP de fuentes confiables

## Enlaces Útiles

- [Documentación de Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [Browser MCP GitHub](https://github.com/browsermcp/mcp)
- [Documentación oficial MCP](https://modelcontextprotocol.io/)

---
*Configurado exitosamente el [fecha actual]*