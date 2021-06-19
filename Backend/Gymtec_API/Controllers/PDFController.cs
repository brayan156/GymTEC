using Microsoft.Reporting.WebForms;
using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Text;
using System.Web;
using System.Web.Http;

namespace Gymtec_API.Controllers
{
    public class PDFController : ApiController
    {

        private gymtecdatabaseEntities1 db = new gymtecdatabaseEntities1();
       
        // GET: api/PDF/5
        [HttpGet]
        [Route("api/PDF/{idSucursal}")]
        public HttpResponseMessage GenerateReport(int idSucursal)
        {

            Dictionary<string, string> parameters = new Dictionary<string, string>();
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            Encoding.GetEncoding("windows-1252");
            LocalReport report = new LocalReport();
            report.ReportPath = HttpContext.Current.Server.MapPath(@"~/Reportes/Report1.rdlc");

            ReportDataSource dataSource = new ReportDataSource();
            dataSource.Name = "DataSet1";
            dataSource.Value = db.generar_planilla(idSucursal).ToList();
            report.DataSources.Add(dataSource);
            string extension = "pdf";
            string mimeType;
            string encoding;
            string[] stream;
            Warning[] warnings;
            ReportParameter p = new ReportParameter("sucursal", db.Sucursal.Find(idSucursal).nombre);
            report.SetParameters(p);


            byte[] bytes = report.Render("PDF", "", out mimeType,
                out encoding, out extension, out stream, out warnings);
            var result = new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new ByteArrayContent(bytes)
            };
            result.Content.Headers.ContentDisposition =
                new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment")
                {
                    FileName = "Report.pdf"
                };
            result.Content.Headers.ContentType =
                new System.Net.Http.Headers.MediaTypeHeaderValue("application/octet-stream");
            return result;
        }

    }
}
