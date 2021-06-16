create or alter procedure copiar_calendario @fechainicio date, @fechanuevo date as begin
        select horaInicio, horaFin, fecha, capacidad, idServicio, idEmpleado into #temp from Clase
            where Clase.fecha>=@fechainicio and Clase.fecha<dateadd(week ,1,@fechainicio) and capacidad>1;

        update #temp
        set fecha=dateadd(week ,DATEDIFF(week ,@fechainicio,@fechanuevo),fecha);
        insert into Clase (horaInicio, horaFin, fecha, capacidad, idServicio, idEmpleado)  select * from #temp;
        print 'realizado';
    end;

exec copiar_calendario '2021-05-31','2021-06-14'

create or alter procedure copiar_gimnasio @idsucursal int,
    @imagen varchar (max),
    @nombre varchar (50),
    @distrito varchar(50),
    @canton varchar(50),
    @provincia varchar(50) as begin
        select  horaInicio, horaFinal, imagen, capacidad, nombre, distrito, canton, provincia into #nueva_sucursal from Sucursal
            where id=@idsucursal;


        select * into #nuevo_tratamientos from TratamientoSucursal where idSucursal=@idsucursal;

        select * into #nuevo_productos from ProductoSucursal where idSucursal=@idsucursal;

        select  id,nombre, descripicion, imagen, idSucursal into #nuevo_servicios  from Servicio where idSucursal=@idsucursal;

        select horaInicio, horaFin, fecha, capacidad, idServicio, idEmpleado into #nuevas_clases from Clase join #nuevo_servicios on #nuevo_servicios.id = Clase.idServicio where Clase.capacidad>1

        update #nueva_sucursal
        set imagen=@imagen, nombre=@nombre, distrito=@distrito, canton=@canton,provincia=@provincia
        from #nueva_sucursal;

        declare @sucursal_creada as TABLE (id int);
        insert into Sucursal (horaInicio, horaFinal, imagen, capacidad, nombre, distrito, canton, provincia)
        output inserted.id into @sucursal_creada
        select * from #nueva_sucursal

        update #nuevo_tratamientos
        set idSucursal=i.id
        from @sucursal_creada as i

        insert TratamientoSucursal select * from #nuevo_tratamientos

        update #nuevo_productos
        set idSucursal=i.id
        from @sucursal_creada as i

        insert ProductoSucursal select * from #nuevo_productos

        delete Servicio from Servicio join @sucursal_creada s on Servicio.idSucursal=s.id

        update #nuevo_servicios
        set idSucursal=i.id
        from @sucursal_creada as i

        declare @servicios_creados as table (id int, nombre varchar(50))
        insert Servicio (nombre, descripicion, imagen, idSucursal)
          output inserted.id,inserted.nombre into @servicios_creados
          select  nombre, descripicion, imagen, idSucursal from #nuevo_servicios

        update #nuevas_clases
        set  idEmpleado=null, idServicio=serv.id
        from Servicio S join #nuevas_clases C on S.id = C.idServicio join @servicios_creados serv on serv.nombre=S.nombre

        insert Clase (horaInicio, horaFin, fecha, capacidad, idServicio, idEmpleado) select * from #nuevas_clases

    end;

create or alter procedure generar_planilla @idsucursal int as begin

        with cte as (select cedula, primer_apellido, segundo_apellido, nombre,salario,idPlanilla,
        (case when Empleado.idPlanilla=1 then 1
              when Empleado.idPlanilla=2 then SUM(IIF(DATEDIFF(month, fecha, getdate()) = 0 and fecha <= getdate() and
                                                      C2.horaFin <= datepart(hour, getdate()),
                                                      C2.horaFin - C2.horaInicio, 0))
              when Empleado.idPlanilla=3 then COUNT(IIF(DATEDIFF(month, fecha, getdate()) = 0 and fecha <= getdate() and
                                                        C2.horaFin <= datepart(hour, getdate()),
                                                        C2.horaFin - C2.horaInicio, null))
        end )  as cantidad
        from Empleado join Clase C2 on Empleado.cedula = C2.idEmpleado
        where  idSucursal=@idsucursal
        group by cedula,primer_apellido,segundo_apellido,nombre,salario,idPlanilla)
        select cedula, primer_apellido, segundo_apellido, nombre,idPlanilla, cantidad, cantidad*salario as pago
        from cte
    end

create or alter procedure filtro_clases @id_sucursal int,@nombre_servicio varchar(50), @fechainicio date, @fechafin date as begin
    select Clase.id, Clase.horaInicio, Clase.horaFin, fecha, Clase.capacidad, Clase.capacidad-COUNT(CC.idClase) as Cupos,S3.nombre as nombreServicio, E.nombre as nombreInstructor,E.primer_apellido,E.segundo_apellido,S2.nombre as nombreSucursal from Clase
    join Empleado E on Clase.idEmpleado = E.cedula
    join Sucursal S2 on E.idSucursal = S2.id
    join Servicio S3 on Clase.idServicio = S3.id
    left join ClaseCliente CC on Clase.id = CC.idClase
    where (S2.id=@id_sucursal or @id_sucursal=0) and (S3.nombre=@nombre_servicio or @nombre_servicio is null) and (Clase.fecha>=@fechainicio or @fechainicio IS NULL) and (Clase.fecha<=@fechafin or @fechafin is null) and Clase.fecha>=getdate()
    group by Clase.id, Clase.horaInicio, Clase.horaFin, fecha, Clase.capacidad, S3.nombre, E.nombre, E.primer_apellido, E.segundo_apellido,S2.nombre
    end;

exec filtro_clases 1,null,'2021-05-31','2021-06-14'

create or alter procedure login_admin @email varchar(100),@contrasena varchar(max) as begin
    select * from Empleado
    where email=@email and contrasena=@contrasena
end

create or alter procedure servicios_gimnasio @id_sucursal int as begin
        select * from Servicio
    where @id_sucursal=Servicio.idSucursal
end

create or alter procedure mostrar_clases_gimnasio @id_sucursal int as begin
    select Clase.id, Clase.horaInicio, Clase.horaFin, fecha, Clase.capacidad,S3.nombre as nombreServicio, E.nombre as nombreInstructor,E.primer_apellido,E.segundo_apellido, S2.nombre as nombreSucursal from Clase
    join Empleado E on Clase.idEmpleado = E.cedula
    join Sucursal S2 on E.idSucursal = S2.id
    join Servicio S3 on Clase.idServicio = S3.id
    where S3.id=@id_sucursal
end

create or alter procedure tratamientos_gimnasio @id_sucursal int as begin
    select Tratamiento.id, Tratamiento.nombre,Tratamiento.imagen, iif(Ts.idSucursal is not null,'asociado','no asociado') from Tratamiento
    cross join Sucursal
    left join TratamientoSucursal TS on Sucursal.id = TS.idSucursal and Tratamiento.id=Ts.idTratamiento
    where @id_sucursal=Sucursal.id
    end

 create or alter procedure productos_gimnasio @id_sucursal int as begin
    select Producto.codigoBarras, Producto.nombre, Producto.imagen, costo, descripcion, iif(PS.idSucursal is not null,'asociado','no asociado') from Producto
    cross join Sucursal
    left join ProductoSucursal PS on Sucursal.id = PS.idSucursal and Producto.codigoBarras=PS.codigoBarras
    where @id_sucursal=Sucursal.id
    end

 create or alter procedure inventario_gimnasio @id_sucursal int as begin
    select nSerie, marca, Equipo.descripcion, Equipo.imagen, TE.nombre as tipo, iif(Equipo.idSucursal is not null,'asociado','no asociado') from Equipo
    join TipoEquipo TE on TE.id = Equipo.idTipoEquipo
    where @id_sucursal=Equipo.idSucursal or Equipo.idSucursal is null
    end

 create or alter procedure filtro_clase_cliente @id_cliente int as begin
    select Clase.id, Clase.horaInicio, Clase.horaFin, fecha,S3.nombre as nombreServicio, E.nombre as nombreInstructor,E.primer_apellido,E.segundo_apellido,S2.nombre as nombreSucursal from Clase
    join ClaseCliente on Clase.id = ClaseCliente.idClase
    join Empleado E on Clase.idEmpleado = E.cedula
    join Sucursal S2 on E.idSucursal = S2.id
    join Servicio S3 on Clase.idServicio = S3.id
    where   Clase.fecha>=getdate() and Clase.horaInicio>DATEPART(HOUR, GETDATE()) and ClaseCliente.idClase=@id_cliente
 end;



