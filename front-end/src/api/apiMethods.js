const API_BASE_URL = 'http://localhost:8080'; // Substitua pela URL base da sua API

export const apiMethods = {
    get: async (endpoint) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            });
            if (!response.ok) {
                console.log('Erro no GET:', response);
                throw new Error(`Erro ao buscar dados: ${response}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Erro no GET:', error);
            throw error;
        }
    },

    post: async (endpoint, payload) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (!response.ok) {
                throw new Error(`Erro ao enviar dados: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Erro no POST:', error);
            throw error;
        }
    },

    delete: async (endpoint, id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Erro ao deletar dados: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Erro no DELETE:', error);
            throw error;
        }
    },
};