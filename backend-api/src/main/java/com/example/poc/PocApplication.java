package com.example.poc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class PocApplication {
    public static void main(String[] args) {
        SpringApplication.run(PocApplication.class, args);
    }
}

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "*")
class TodoController {
    private final List<Todo> todos = new ArrayList<>();

    public TodoController() {
        todos.add(new Todo(1, "Estudar Cypress"));
        todos.add(new Todo(2, "Configurar k6"));
    }

    @GetMapping
    public List<Todo> getAll() { return todos; }

    @PostMapping
    public Todo create(@RequestBody Todo todo) {
        todo.setId(todos.size() + 1);
        todos.add(todo);
        return todo;
    }
}

class Todo {
    private int id;
    private String title;
    public Todo() {}
    public Todo(int id, String title) { this.id = id; this.title = title; }
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
}