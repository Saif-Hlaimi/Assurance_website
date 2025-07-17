package com.backend.mae_backend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class Hello {
    @RequestMapping("/hello")
    public String hello() {
        return "hello";
    }
}
