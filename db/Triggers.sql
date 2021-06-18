SP_CONFIGURE 'nested_triggers',1
GO
RECONFIGURE
GO



create or alter trigger crear_servicios
    on Sucursal
    for insert
    as
    begin
            declare @id as int
            select @id=id from inserted
            insert into Servicio (nombre, descripicion, imagen, idSucursal) values
                                                                                   ('Indoor Cycling','bicicleta estatica','https://th.bing.com/th/id/OIP.W_K2ONBzO95uEHxfUlXpLwHaE7?w=253&h=180&c=7&o=5&pid=1.7',@id),
                                                                                   ('Pilates','Conjunto de ejercicios fisicos en los que se entrena la musculatura, la resistencia, la flexibilidad y el control de la respiracion y de la mente','https://th.bing.com/th/id/OIP.MchD_9cFk51aLI4nwGMw8AHaEK?w=285&h=180&c=7&o=5&pid=1.7',@id),
                                                                                   ('Yoga',' posturas fisicas, ejercicios de respiracion y meditacion para mejorar la salud general','https://th.bing.com/th/id/OIP.IFEyhLIhghY8QnexUySEGAHaE9?w=280&h=187&c=7&o=5&pid=1.7',@id),
                                                                                   ('Zumba','ejercicios aerobicos al ritmo de musica latina','https://th.bing.com/th/id/OIP.UXHp0C4QeeAfWgv8VmE-PgHaE7?w=269&h=180&c=7&o=5&pid=1.7',@id),
                                                                                   ('Natacion','nadar en piscina','https://th.bing.com/th/id/OIP._RxovezBlKIl4bQwu6le5gAAAA?w=282&h=166&c=7&o=5&pid=1.7',@id);
    end;
GO
create  or alter trigger bloquear_tratamientos_default
    on Tratamiento
    after update,delete
    as
    begin
        if exists(select * from deleted where deleted.id<=4)
        begin rollback transaction end
    end;
GO
create or alter trigger bloquear_eliminar_tratamiento_asociado
    on Tratamiento
    after delete
    as
    begin
        if exists(select * from deleted join TratamientoSucursal on deleted.id=TratamientoSucursal.idTratamiento)
        begin rollback transaction end
    end;
GO
create or alter trigger bloquear_planilla_default
    on Planilla
    after delete,update
    as
    begin
        if exists(select * from deleted where deleted.id<=3)
        begin rollback transaction end
    end;
GO
create or alter trigger bloquear_puesto_default
    on Puesto
    after delete,update
    as
    begin
        if exists(select * from deleted where deleted.id<=4)
        begin rollback transaction end
    end;
GO
create or alter trigger evitar_nombres_iguales_servicios_sucursal
    on Servicio
    for insert ,update
    as
    begin
        if exists(select * from inserted join Servicio on inserted.idSucursal=Servicio.idSucursal where inserted.id!=Servicio.id and inserted.nombre=Servicio.nombre)
            begin rollback transaction end
    end;
GO
create or alter trigger empleado_da_clases_solo_su_sucursal
    on Clase
    for insert, update
    as begin
        if update(idEmpleado) and exists(select * from inserted join Servicio on inserted.idServicio=Servicio.id join Empleado E on inserted.idEmpleado=E.cedula where E.idSucursal!=Servicio.idSucursal)
        begin rollback transaction end
end

GO