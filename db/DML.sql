insert into Sucursal (horaInicio, horaFinal, imagen, capacidad, nombre, distrito, canton, provincia) values
(7,22,'https://th.bing.com/th/id/OIP.T_Wv_He0oQE_4XjudKWXngHaE7?w=221&h=180&c=7&o=5&pid=1.7',100,'Adrenalina','Santiago','San Ramon','Alajuela');
insert into Sucursal (horaInicio, horaFinal, imagen, capacidad, nombre, distrito, canton, provincia) values
                                                                                                            (8,23,'https://th.bing.com/th/id/OIP.DJq1U-F_Dbq3wHxPXofK0QHaEK?w=319&h=180&c=7&o=5&pid=1.7',90,'Gympower','Tres Rios','La Union','Cartago');
insert into Sucursal (horaInicio, horaFinal, imagen, capacidad, nombre, distrito, canton, provincia) values
                                                                                                            (9,21,'https://th.bing.com/th/id/OIP.PndCEomFZRhrVlVsjnq2ZQHaE8?w=269&h=180&c=7&o=5&pid=1.7',50,'Refitness','San Pedro','Montes de Oca','San Jose');
insert into Tratamiento (nombre, imagen) values
                                                ('Masaje relajante','https://th.bing.com/th/id/OIP.t6Xndlk48Cldbj18pY9zIQHaE8?w=282&h=188&c=7&o=5&pid=1.7'),
                                                ('Masaje descarga muscular','https://th.bing.com/th/id/OIP.0NDIm_5oqHQ2cnN8bxkVFgHaFj?w=194&h=180&c=7&o=5&pid=1.7'),
                                                ('Sauna','https://th.bing.com/th/id/OIP.BC-GAacut7-YZjP6fCCXRgHaDt?w=296&h=174&c=7&o=5&pid=1.7'),
                                                ('Banos a vapor','https://th.bing.com/th/id/OIP.fClMT6bKCSt1SlGec_vr-wHaFj?w=237&h=180&c=7&o=5&pid=1.7');
insert into Puesto (nombre, descripicion, imagen) values
                                                         ('Administrador','Administra','https://th.bing.com/th/id/OIP.mB8WurwIt4H4REKYxTkisgHaDl?w=349&h=169&c=7&o=5&pid=1.7'),
                                                         ('Instructor','Intruye','https://th.bing.com/th/id/OIP.f7yzOHiigRRG2m_PTG95hAAAAA?w=225&h=193&c=7&o=5&pid=1.7'),
                                                         ('Dependiente Spa','Maneja el spa','https://th.bing.com/th/id/OIP.7JcJd73VOzb0EUt6ugIuJAAAAA?w=183&h=141&c=7&o=5&pid=1.7'),
                                                         ('Dependiente tienda','Maneja la tienda','https://th.bing.com/th/id/OIP.04wpQ-Sxq2xPs3-2nRiZnQHaE7?w=223&h=180&c=7&o=5&pid=1.7');
insert into Planilla (Tipo, descripicion) values
                                                 ('Pago mensual','pago fijo por mes'),
                                                 ('Pago por horas','paga por cantidad de horas trabajadas'),
                                                 ('Pago por clase','paga por la cantidad de clases impartidas');
insert into TipoEquipo (nombre, descripcion, imagen) values
                                                            ('Cintas de correr','sirven para correr en un mismo sitio','https://th.bing.com/th/id/OIP.JRq55eCXCmcyjrgC481KlgHaGB?w=255&h=207&c=7&o=5&pid=1.7'),
                                                            ('Bicicletas estacionarias','bicicletas que no se mueven y dificultad ajustable','https://th.bing.com/th/id/OIP.eXR5rHJX7SY1CNy91VvnkwHaKI?w=145&h=199&c=7&o=5&pid=1.7'),
                                                            ('Multigimnasios','varios ejercicios en una maquina','https://th.bing.com/th/id/OIP.kytWEtFHUKOg2H3GSqPtEwHaHa?w=220&h=220&c=7&o=5&pid=1.7'),
                                                            ('Remos','maquinas para hacer remos','https://th.bing.com/th/id/OIP.pjMl_Cv_ov7uyoAKFlBjaAHaE7?w=228&h=180&c=7&o=5&pid=1.7'),
                                                            ('Pesas','pesos de varias formas y tipos','https://th.bing.com/th/id/OIP.hlr0DonKR8gI1Kp82dLa8AHaFL?w=227&h=180&c=7&o=5&pid=1.7');

insert into Empleado (cedula, email, contrasena, primer_apellido, segundo_apellido, nombre, distrito, canton, provincia, salario, idSucursal, idPuesto, idPlanilla) values
(1234,'admin@gmail.com',1234,'leon','urbina','brayan','Centro','San Ramon','Aljuela',200,1,1,1)
