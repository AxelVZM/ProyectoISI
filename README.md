LO QUEREMOS PROFE <3





backend/ backend del proyecto

frontend/ frontend del proyecto

notificaciones/ servicio separado en Docker para notificaciones con Selenium





Para correr el backend/

cd backend/

py -m venv .venv

.venv/Scripts/activate

pip install -r requirements.txt 





Para correr el frontend/

cd frontend/

npm install

npm run dev





Para notificaciones (admin)

cd notificaciones/

docker-compose build

docker-compose up



crear archivos .env en backend/ y frontend/ respectivamente







