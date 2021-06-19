create table Sucursal (
    id int not null IDENTITY(1,1) unique ,
    horaInicio   int,
    horaFinal int,
    imagen varchar (max),
    capacidad int,
    nombre varchar (50),
    fechaApertura date default getdate(),
    distrito varchar(50),
    canton varchar(50),
    provincia varchar(50),
    spaActivo bit default 0,
    tiendaActiva bit default 0,
    primary key(id)
);

create table Telefono(
    id int not null,
    telefono int not null,
    primary key (id,telefono),
    foreign key (id) references Sucursal (id)
);

create table TipoEquipo (
id int not null IDENTITY(1,1) unique,
nombre varchar(50) not null unique ,
descripcion varchar(300),
imagen varchar (max),
primary key(id)
);

create table Equipo (
nSerie int not null IDENTITY(1,1) unique,
marca varchar(50),
descripcion varchar(300),
imagen varchar (max),
costo int,
idTipoEquipo int,
idSucursal int,
primary key(nSerie),
foreign key (idTipoEquipo) references TipoEquipo (id),
foreign key (idSucursal) references Sucursal (id)
);

create table Tratamiento (
    id int not null IDENTITY(1,1) unique,
    nombre varchar(50) not null unique,
    imagen varchar (max),
    primary key (id)
);

create table TratamientoSucursal (
    idSucursal int not null,
    idTratamiento int not null,
    primary key (idSucursal,idTratamiento),
    foreign key (idSucursal) references Sucursal (id),
    foreign key (idTratamiento) references Tratamiento (id)
);

create table Producto (
    codigoBarras int not null IDENTITY(1,1) unique,
    nombre varchar(50) not null,
    imagen varchar (max),
    costo int not null ,
    descripcion varchar(300),
    primary key (codigoBarras)
);

create table ProductoSucursal (
    idSucursal int not null,
    codigoBarras int not null,
    primary key (idSucursal,codigoBarras),
    foreign key (idSucursal) references Sucursal (id),
    foreign key (codigoBarras) references Producto (codigoBarras)
);

create table Planilla (
    id int not null IDENTITY(1,1) unique,
    Tipo varchar(50) not null,
    descripicion varchar(300),
    primary key(id)
);

create table Puesto (
    id int not null IDENTITY(1,1) unique,
    nombre varchar(50) not null unique,
    descripicion varchar(300),
    imagen varchar (max),
    primary key(id)
);

create table Servicio(
    id int not null IDENTITY(1,1) unique,
    nombre varchar(50) not null,
    descripicion varchar(300),
    imagen varchar (max),
    idSucursal int,
    primary key(id),
    foreign key (idSucursal) references Sucursal (id),
);

create table Cliente(
    cedula int not null unique,
    primary key (cedula)
);

create table Empleado(
    cedula int unique not null,
    email varchar(100) not null unique ,
    contrasena varchar(max) not null,
    primer_apellido varchar (50),
    segundo_apellido varchar(50),
    nombre varchar(50) not null ,
    distrito varchar(50),
    canton varchar(50),
    provincia varchar(50),
    salario int,
    idSucursal int,
    idPuesto int,
    idPlanilla int,
    PRIMARY KEY (cedula),
    foreign key (idSucursal) references Sucursal (id),
    foreign key (idPuesto) references Puesto (id),
    foreign key (idPlanilla) references Planilla (id)
);

create table Clase (
    id int not null IDENTITY(1,1) unique,
    horaInicio   int,
    horaFin int,
    fecha date,
    capacidad int,
    idServicio int not null,
    idEmpleado int,
    primary key (id),
    foreign key (idServicio) references Servicio (id),
    foreign key (idEmpleado) references Empleado (cedula)
);

create table ClaseCliente (
    idClase int not null,
    cedulaCliente int not null,
    primary key (idClase,cedulaCliente),
    foreign key (idClase) references Clase (id),
    foreign key (cedulaCliente) references Cliente (cedula)
);

create table Permiso (
    nombre varchar (100) unique not null,
    primary key (nombre)
)

create table PuestoPermiso(
    nombrePermiso varchar (100) not null ,
    idPuesto int not null ,
    primary key (nombrePermiso, idPuesto),
    foreign key (nombrePermiso) references Permiso (nombre),
    foreign key (idPuesto) references Puesto (id)
)