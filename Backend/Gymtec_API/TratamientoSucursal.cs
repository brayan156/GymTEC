//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Gymtec_API
{
    using System;
    using System.Collections.Generic;
    
    public partial class TratamientoSucursal
    {
        public int idSucursal { get; set; }
        public int idTratamiento { get; set; }
    
        public virtual Sucursal Sucursal { get; set; }
    }
}
