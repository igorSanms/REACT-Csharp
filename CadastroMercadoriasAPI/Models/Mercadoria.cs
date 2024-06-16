using System;
using System.ComponentModel.DataAnnotations;

namespace CadastroMercadoriasAPI.Models
{
    public class Mercadoria
    {
        public int Id { get; set; }

        [Required]
        public string? Nome { get; set; }

        [Required]
        public string? Codigo { get; set; }

        [Required]
        [Range(0, double.MaxValue, ErrorMessage = "Preço deve ser um valor positivo")]
        public decimal Preco { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DataFabricacao { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DataValidade { get; set; }

        public string DataFabricacaoFormatada => DataFabricacao.ToString("yyyy-MM-dd");
        public string DataValidadeFormatada => DataValidade.ToString("yyyy-MM-dd");

        public Mercadoria()
        {
            DataFabricacao = DateTime.Now;  
            DataValidade = DateTime.Now.AddYears(1);  
        }
    }
}
