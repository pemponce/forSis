package com.std.wedd.service;

import com.std.wedd.model.Person;

import java.util.List;


public interface PersonService {
    public Person savePerson(Person person);
    public List<Person> getAllPersons();
}
