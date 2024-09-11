import { apiMethods } from "./apiMethods";

class ReminderRequests {
  static async addReminder(reminder) {
    try {
      const response = await apiMethods.post('reminder', reminder);

      return response;
    } catch(error) {
      console.error('Erro ao buscar lembretes', error);
    }
  }

    static async getReminders() {
      try {
        const reminders = await apiMethods.get('reminder');
        
        return reminders;
      } catch(error) {
        console.error('Erro ao buscar lembretes', error);
      }
    }

    static async deleteReminder(id) {
      try {
        await apiMethods.delete('reminder', id);
      } catch(error) {
        console.error('Erro ao excluir lembrete', error);
      }
    }
}

export default ReminderRequests;