# Guía de Configuración para GitHub Pages

## Error Corregido
El error `Cannot find module 'D:\Mar\dev'` se debía a que estabas usando `npx run dev` en lugar de `npm run dev`.

**Comando correcto:**
```bash
npm run dev
```

## Configuración para GitHub Pages

Se ha actualizado la configuración para desplegar automáticamente en GitHub Pages.

### Pasos para activar el despliegue automático:

1. **Ve a tu repositorio en GitHub**
   - Settings → Pages
   - Source: GitHub Actions
   - Save

2. **Haz push a tu rama principal (main o master)**
   ```bash
   git push origin main
   ```

3. **El workflow automático se ejecutará**
   - Ve a Actions en tu repositorio
   - Verifica que el workflow "Deploy to GitHub Pages" se ejecute correctamente

### Scripts disponibles:

```bash
npm run dev       # Iniciar servidor de desarrollo
npm run build     # Compilar para producción
npm run preview   # Ver preview de la build
npm run deploy    # Build + preparar para deploy
npm run lint      # Verificar código con ESLint
```

### Configuración realizada:

- **vite.config.js**: Agregado `base: '/mar/'`
- **package.json**: Agregado script `deploy`
- **.github/workflows/deploy.yml**: Workflow de GitHub Actions para deploy automático

### URL de tu sitio:
```
https://[tu-usuario].github.io/mar/
```

## Notas importantes:

- Cambia el nombre del repositorio en `vite.config.js` si tu repositorio no se llama `mar`
- El workflow se ejecuta automáticamente en cada push a `main` o `master`
- Asegúrate de que GitHub Pages esté habilitado en los settings de tu repositorio
