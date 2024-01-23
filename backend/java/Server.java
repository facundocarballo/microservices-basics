import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class Server {

    public static int PORT = 3004;

    public static void main(String[] args) throws IOException {
        // Crear el servidor en el puerto 8080
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);

        // Crear un contexto para gestionar las solicitudes en la raíz ("/")
        server.createContext("/", new Handler());

        // Arrancar el servidor
        server.start();

        System.out.println("Server listening on port: " + PORT);
    }

    // Implementar un manejador para gestionar las solicitudes
    static class Handler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            // Obtener el método de la solicitud (GET, POST, etc.)
            String requestMethod = t.getRequestMethod();

            // Respuesta al cliente
            String response = "Hello world from Java!!";

            // Configurar las cabeceras de la respuesta
            t.getResponseHeaders().set("Content-Type", "text/plain");
            t.sendResponseHeaders(200, response.length());

            // Enviar la respuesta al cliente
            OutputStream os = t.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
}
