-- SQL para crear usuario administrador (generado automáticamente)
-- Contraseña en claro: admin123
-- Inserta un usuario con rol 'admin'. Ejecuta esto contra tu base de datos.

INSERT INTO users (username, password_hash, role)
VALUES (
  'admin',
  '$2b$12$6AsZIXXDp/H93Ha2yiO5FuNbOfhltcJzvSjZ4K5Zm1oC9EoIFo4VC',
  'admin'
);
