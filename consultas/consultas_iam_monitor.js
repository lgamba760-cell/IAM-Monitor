/*
=========================================================
IAM MONITOR
Sistema de gestion y auditoria de identidades y accesos
Base de datos: iam_monitor
Herramienta: MongoDB mongosh
Autora: Angie Baron
Proyecto academico - Curso de Big Data (UNAD)

NOTA: Los datos usados son ficticios y corresponden a un entorno de pruebas.
=========================================================
*/

// Seleccionar la base de datos
use("iam_monitor");

// =======================================================
// 1. CONSULTAS BASICAS
// =======================================================

// Consultar las primeras cinco cuentas
db.cuentas.find().limit(5).toArray();

// Consultar las cuentas activas
db.cuentas.find({ estado: "Activo" }).toArray();

// Consultar las aplicaciones registradas
db.aplicaciones.find().toArray();

// Consultar los primeros diez eventos de auditoria
db.auditoria_accesos.find().limit(10).toArray();

// =======================================================
// 2. CONSULTAS CON FILTROS
// =======================================================

// Buscar cuentas del departamento de Tecnologia
db.cuentas.find({ departamento: "Operaciones"}).toArray();

// Buscar cuentas con cargo de Administrador
db.cuentas.find({ cargo: "Administrador"}).toArray();

// Consultar aplicaciones activas
db.aplicaciones.find({ estado: "Activo"}).toArray();

// Consultar una cuenta especifica
db.cuentas.findOne({ nombre: "Usuario 1"});

// =======================================================
// 3. CONTEOS Y AGREGACIONES
// =======================================================

// Contar documentos de cada coleccion
print("CUENTAS: " + db.cuentas.countDocuments());
print("ROLES: " + db.roles.countDocuments());
print("APLICACIONES: " + db.aplicaciones.countDocuments());
print("ASIGNACIONES: " + db.asignaciones_acceso.countDocuments());
print("AUDITORIA: " + db.auditoria_accesos.countDocuments());

// Agrupar cuentas por estado
db.cuentas.aggregate([
  {
    $group: {
      _id: "$estado",
      total: { $sum: 1 }
    }
  }
]).toArray();

// Agrupar cuentas por departamento
db.cuentas.aggregate([
  {
    $group: {
      _id: "$departamento",
      total: { $sum: 1 }
    }
  },
  {
    $sort: { total: -1 }
  }
]).toArray();

// Contar eventos de auditoria por resultado
db.auditoria_accesos.aggregate([
  {
    $group: {
      _id: "$resultado",
      total: { $sum: 1 }
    }
  }
]).toArray();

// Contar eventos de auditoria por tipo
db.auditoria_accesos.aggregate([
  {
    $group: {
      _id: "$tipo_evento",
      total: { $sum: 1 }
    }
  },
  {
    $sort: { total: -1 }
  }
]).toArray();

// =======================================================
// 4. ACTUALIZACION DE CUENTAS
// =======================================================
// Ejemplo ejecutado: cambiar el estado de Usuario 1 a Bloqueado y verificar el resultado.
// Esta operacion modifica los datos de la base.

// db.cuentas.updateOne(
//   { nombre: "Usuario 1" },
//   { $set: { estado: "Bloqueado" } }
// );

// Consultar el estado actual de Usuario 1
db.cuentas.findOne({
  nombre: "Usuario 1"
});

// =======================================================
// 5. ELIMINACION DE UN REGISTRO DE PRUEBA
// =======================================================
// db.cuentas.deleteOne({
//   nombre: "Usuario 10"
// });

// Verificar que el registro no exista
db.cuentas.findOne({
  nombre: "Usuario 10"
});

// =======================================================
// 6. RELACION ENTRE COLECCIONES
// =======================================================
// Consultar una asignacion de acceso
// Las referencias permiten relacionar cuentas, aplicaciones y roles mediante sus identificadores.

db.asignaciones_acceso.findOne();
