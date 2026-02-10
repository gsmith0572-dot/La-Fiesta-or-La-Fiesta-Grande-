# La Fiesta Natchez

Sitio web oficial de La Fiesta Natchez - Restaurante mexicano en Natchez, Mississippi.

## 🌐 Sitio en Vivo
- **Producción**: https://lafiestanatchez.com
- **Firebase Hosting**: https://la-fiesta-natchez.web.app

## 🛠️ Tecnologías
- React 19
- Vite
- Firebase Hosting
- Cloudflare CDN
- Framer Motion (animaciones)
- React Router DOM

## 📁 Estructura del Proyecto
```
la-fiesta-natchez/
├── src/              # Código fuente React
├── public/           # Assets públicos (imágenes)
├── dist/             # Build de producción
├── firebase.json     # Configuración Firebase
└── vite.config.js    # Configuración Vite
```

## 🚀 Desarrollo Local

### Instalar dependencias
```bash
npm install
```

### Ejecutar en modo desarrollo
```bash
npm run dev
```

### Build para producción
```bash
npm run build
```

## 📦 Deployment

### Deploy a Firebase Hosting
```bash
npm run build
firebase deploy --project la-fiesta-natchez
```

### Verificar deployment
```bash
~/check-lafiesta.sh
```

## 🔧 Cuentas y Configuración

- **Firebase Account**: gsmith0572@gmail.com
- **Project ID**: la-fiesta-natchez
- **Dominio**: Cloudflare (lafiestanatchez.com)
- **Repositorio**: https://github.com/gsmith0572-dot/La-Fiesta-or-La-Fiesta-Grande-

## 📝 Comandos Útiles
```bash
# Verificar estado del sitio
~/check-lafiesta.sh

# Ver logs de Firebase
firebase hosting:channel:list --project la-fiesta-natchez

# Cambiar de cuenta Firebase
firebase logout
firebase login

# Actualizar GitHub
git add .
git commit -m "Descripción de cambios"
git push origin main
```

## 🆘 Troubleshooting

Si el sitio no carga:
1. Limpiar caché del navegador (Cmd + Shift + R)
2. Verificar en modo incógnito
3. Ejecutar `~/check-lafiesta.sh`
4. Verificar consola del navegador (Option + Cmd + J)

## 📅 Último Deploy
24 de diciembre de 2025
