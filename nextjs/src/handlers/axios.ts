import axios from "axios";

export class ApiRequest {
  static async GET(host: string): Promise<any> {
    try {
      const res = await axios.get(host);
      console.log("Respuesta de la solicitud: " + res.data);
    } catch (err) {
      console.error("Error trying to get microservice data. " + err);
    }
  }
}
