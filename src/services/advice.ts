
class AdviceService {
    static async getRandomAdvice() {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        return data.slip;
      } catch (error) {
        console.error("Erro ao buscar conselho:", error);
        throw error;
      }
    }
  }
  
  export default AdviceService;
  