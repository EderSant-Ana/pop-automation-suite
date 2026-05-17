package com.example.poc;

import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;
//mvn spring-boot:run
public class RestAssuredTest {
    @Test
    public void deveValidarListaDeTodos() {
        given()
                .baseUri("http://localhost:8080")
                .when()
                .get("/api/todos")
                .then()
                .statusCode(200)
                .body("title", hasItems("Estudar Cypress", "Configurar k6"));
    }
}