create or alter view mostrar_clientes as
    select cedula, email, contrasena, primer_apellido, segundo_apellido, Empleado.nombre, Empleado.distrito, Empleado.canton, Empleado.provincia, salario,p2.nombre as puesto,P.Tipo as tipoPlanilla, S.id as idSucursal, S.nombre as nombreSucursal from Empleado
    left join Sucursal S on Empleado.idSucursal = S.id
    left join Planilla P on Empleado.idPlanilla = P.id
    left join Puesto P2 on Empleado.idPuesto = P2.id

create or alter view mostrar_inventario as
    select Equipo.nserie, Equipo.marca, Equipo.descripcion, Equipo.imagen, Equipo.idsucursal, TE.nombre as tipoEquipo from Equipo
    join TipoEquipo TE on TE.id = Equipo.idTipoEquipo

create or alter view mostrar_clases as
    select Clase.id, Clase.horaInicio, Clase.horaFin, fecha, Clase.capacidad,S3.nombre as nombreServicio, E.nombre as nombreInstructor,E.primer_apellido,E.segundo_apellido, S2.nombre as nombreSucursal from Clase
    join Empleado E on Clase.idEmpleado = E.cedula
    join Sucursal S2 on E.idSucursal = S2.id
    join Servicio S3 on Clase.idServicio = S3.id


select * from tratamientos_asociados
