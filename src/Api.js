import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5071/api/CadastroMercadoriasAPI',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getMercadorias = async () => {
  try {
    const response = await api.get('mercadorias');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter mercadorias:', error);
    throw error;
  }
};

export const salvarMercadoria = async (mercadoria) => {
  try {
    const response = await api.post('mercadorias', mercadoria);
    return response.data;
  } catch (error) {
    console.error('Erro ao salvar mercadoria:', error);
    throw error;
  }
};

export const editarMercadoria = async (id, mercadoria) => {
  try {
    const response = await api.put(`mercadorias/${id}`, mercadoria);
    return response.data;
  } catch (error) {
    console.error('Erro ao editar mercadoria:', error);
    throw error;
  }
};

export const deletarMercadoria = async (id) => {
  try {
    await api.delete(`mercadorias/${id}`);
  } catch (error) {
    console.error('Erro ao deletar mercadoria:', error);
    throw error;
  }
};
