
# IAM Monitor
### Sistema de gestión y auditoría de identidades, cuentas y accesos

## 1. Descripción del proyecto

IAM Monitor es un prototipo académico desarrollado con MongoDB que permite gestionar y consultar información relacionada con identidades digitales, cuentas de usuario, roles, aplicaciones, asignaciones de acceso y eventos de auditoría.

El proyecto busca demostrar cómo una base de datos NoSQL puede facilitar la organización y el análisis de información relacionada con la gestión de identidades y accesos (IAM).

## 2. Objetivo general

Diseñar e implementar una base de datos NoSQL en MongoDB para gestionar y auditar cuentas, roles, aplicaciones y accesos, mediante consultas que permitan analizar la información y apoyar la revisión de seguridad.

## 3. Tecnologías utilizadas

- MongoDB Atlas: almacenamiento de datos en la nube.
- MongoDB Compass: exploración y administración visual de la base de datos.
- mongosh: ejecución de consultas y operaciones sobre MongoDB.
- GitHub: almacenamiento y documentación del código del proyecto.

## 4. Estructura de la base de datos

Nombre de la base de datos: `iam_monitor`

| Colección | Descripción |
|---|---|
| cuentas | Información de las cuentas de usuario |
| roles | Roles y niveles de privilegio |
| aplicaciones | Catálogo de aplicaciones |
| asignaciones_acceso | Relaciones entre cuentas, aplicaciones y roles |
| auditoria_accesos | Registro de eventos de auditoría |

## 5. Funcionalidades implementadas

- Inserción de documentos.
- Consulta de registros.
- Actualización de cuentas.
- Eliminación de registros de prueba.
- Búsquedas mediante filtros.
- Agrupaciones y agregaciones.
- Conteo de cuentas y eventos.
- Relación entre colecciones mediante `$lookup`.

## 6. Datos de prueba

Se utilizaron datos ficticios para representar un entorno organizacional de prueba.

Registros implementados:

| Colección | Documentos |
|---|---:|
| cuentas | 100 |
| roles | 5 |
| aplicaciones | 8 |
| asignaciones_acceso | 150 |
| auditoria_accesos | 200 |
| **Total** | **463** |

## 7. Alcance del proyecto

IAM Monitor es un ejercicio académico de modelado y consulta de datos. No se encuentra conectado a sistemas corporativos reales ni realiza autenticación, detección automática de amenazas o administración de accesos en producción.

## 8. Autora

Angie Baron

Proyecto académico – Curso de Big Data  
Universidad Nacional Abierta y a Distancia (UNAD).

## 9. Repositorio

Este repositorio contiene la documentación y las consultas desarrolladas durante la implementación del proyecto.
