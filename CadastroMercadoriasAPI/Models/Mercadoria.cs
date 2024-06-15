using System;
using System.ComponentModel.DataAnnotations;
namespace CadastroMercadoriasAPI.Models
{
    public class Mercadoria
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public string? Codigo { get; set; }
        public decimal Preco { get; set; }
        public DateTime DataFabricacao { get; set; }
        public DateTime DataValidade { get; set; }
        public string  DataFabricacaoFormatada => DataFabricacao.ToString("yyyy-MM-dd");
        public string DataVencimentoFormatada => DataValidade.ToString("yyyy-MM-dd");

    }
}




        
    

