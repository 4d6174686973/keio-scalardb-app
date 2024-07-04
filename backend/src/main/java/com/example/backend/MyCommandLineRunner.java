package com.example.backend;

import com.example.backend.model.Product;
import com.example.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyCommandLineRunner implements CommandLineRunner {

    @Autowired
    private ProductService productService;

    @Override
    public void run(String... args) throws Exception {
        Product item1 = new Product();
        item1.setName("Max");
        item1.setEmail("max@gmx.de");
        item1.setCreditcard(1234);
        productService.save(item1);

        Product item2 = new Product();
        item2.setName("Mathis");
        item2.setEmail("mathis@web.de");
        item2.setCreditcard(5678);
        productService.save(item2);
    }
}
