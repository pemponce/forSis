package com.std.wedd.controller;

import com.std.wedd.model.Person;
import com.std.wedd.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/person")
@CrossOrigin
public class PersonController {

    @Autowired
    private PersonService personService;

    @PostMapping("/add")
    public String add(@RequestBody Person person) {
        personService.savePerson(person);

        return "New Person and his preferences is added";
    }

    @GetMapping("/getAll")
    public List<Person> getAllPersons(){
        return personService.getAllPersons();
    }
}
