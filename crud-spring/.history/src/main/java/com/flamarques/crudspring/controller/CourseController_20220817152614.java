package com.flamarques.crudspring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

  // @RequestMapping(method = RequestMethod.GET)
  @GetMapping
  public List<Object> list() {
    return null;
  }
}

