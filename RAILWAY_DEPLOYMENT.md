# 🚀 Guía Completa para Desplegar en Railway

## PASO 1: Preparar el Repositorio (Ya está listo ✓)

Tu repositorio `https://github.com/AxelVZM/ProyectoISI` ya tiene:
- ✓ `Procfile` en backend/
- ✓ `Procfile` en frontend/
- ✓ `runtime.txt` en backend/
- ✓ `requirements.txt` actualizado
- ✓ `package.json` con `serve`

---

## PASO 2: Entrar a Railway

1. Ve a https://railway.app
2. Haz login con GitHub (recomendado)
3. Haz click en `+ New Project`
4. Selecciona `Deploy from GitHub repo`
5. Busca y selecciona: **`AxelVZM/ProyectoISI`**

---

## PASO 3: Configurar Servicios

Railway detectará automáticamente:
- **backend/** → Python/FastAPI
- **frontend/** → Node.js/React

### 3.1 AGREGAR BASE DE DATOS

1. Click en `+ Add Service` 
2. Selecciona `PostgreSQL`
3. Railway generará automáticamente `DATABASE_URL`

---

## PASO 4: Configurar Variables de Ambiente

### Para el Backend:

1. Click en el servicio `backend`
2. Ve a la pestaña `Variables`
3. Agrega estas variables:

```
DATABASE_URL = (Railway lo genera automáticamente al agregar PostgreSQL)
FRONTEND_URL = https://frontend-XXXXXX.railway.app
CLOUDINARY_CLOUD_NAME = tu_cloud_name (obtén en cloudinary.com)
CLOUDINARY_API_KEY = tu_api_key
CLOUDINARY_API_SECRET = tu_api_secret
JWT_SECRET = genera_una_clave_aleatoria_segura
PORT = 3000
```

**¿Cómo obtener credenciales de Cloudinary?**
1. Ve a https://cloudinary.com/console
2. Copia los valores de tu account

**¿Cómo generar JWT_SECRET?**
```bash
# En tu terminal local:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
# O usa cualquier generador de contraseñas fuerte
```

### Para el Frontend:

1. Click en el servicio `frontend`
2. Ve a la pestaña `Variables`
3. Agrega:

```
VITE_API_URL = https://backend-XXXXXX.railway.app
```

---

## PASO 5: Iniciar el Despliegue

1. Click en `Deploy` en cada servicio
2. Railway construirá automáticamente:
   - Backend con Python 3.11.7
   - Frontend con Node.js (Vite build)
   - PostgreSQL

**Tiempo estimado:** 5-10 minutos por servicio

---

## PASO 6: Verificar el Despliegue

### Backend:
1. Ve al servicio `backend`
2. Click en la URL generada (ej: `https://backend-xyz.railway.app`)
3. Deberías ver: `{"message": "Academia API v2.0 - FastAPI", "status": "running"}`

### Frontend:
1. Ve al servicio `frontend`
2. Click en la URL generada
3. Deberías ver tu aplicación React cargada

### Health Checks:
- Backend: `https://backend-xyz.railway.app/health`
- API Test: `https://backend-xyz.railway.app/api/test`

---

## PASO 7: Si algo falla

### Ver logs:
1. Haz click en el servicio
2. Ve a `Logs`
3. Busca el error

### Errores Comunes:

**Error: "ModuleNotFoundError: No module named 'main'"**
- Asegúrate que `Procfile` esté bien escrito
- Verificar que esté en la carpeta `backend/`

**Error: "Port already in use"**
- Railway asigna automáticamente el puerto
- No especifiques puerto en variables

**Error: "Database connection refused"**
- Agrega PostgreSQL desde `+ Add Service`
- Espera a que esté listo antes de desplegar el backend

**Frontend no carga la API**
- Verifica que `VITE_API_URL` esté configurado
- Reconstruye el frontend (Re-deploy)

---

## PASO 8: Actualizar Base de Datos (Si es necesario)

Si necesitas ejecutar scripts de setup:

1. Ve a tu servicio backend
2. Click en `Shell`
3. Ejecuta:
```bash
python scripts/populate_db.py  # o el script que uses
```

---

## PASO 9: Dominio Personalizado (Opcional)

En Railway puedes agregar dominio propio:
1. Haz click en el servicio
2. Ve a `Settings`
3. `Custom Domain`
4. Agrega tu dominio (ej: `api.tudominio.com`)

---

## CHECKLIST FINAL ✓

- [ ] Repositorio en GitHub conectado
- [ ] PostgreSQL agregado
- [ ] Variables de ambiente configuradas (backend y frontend)
- [ ] Backend deployado y funcionando
- [ ] Frontend deployado y funcionando
- [ ] Verificar CORS en https://backend-xyz.railway.app/
- [ ] Verificar conectividad a BD
- [ ] Cloudinary funcionando (si usas upload de imágenes)

---

## Recursos Útiles

- 📖 Docs Railway: https://railway.app/docs
- 🔧 Variables de Ambiente: https://railway.app/docs/guides/variables
- 📊 Monitoreo: Panel de Railway muestra uso de CPU, memoria, etc.

---

## SOPORTE

Si hay problemas:
1. Revisa los **Logs** en Railway
2. Verifica las **Variables de Ambiente**
3. Asegúrate que PostgreSQL esté **Healthy** (verde)
4. Push cambios a GitHub y Railway redeploya automáticamente

¡Listo para producción! 🚀
