package com.flamarques.crudspring.controller;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.RequestMethod;

import com.flamarques.crudspring.repository.CourseRepository;

import java.util.List;

@RestController
@RequestMapping("/api/courses")

@Component
public class CourseController {

  private CourseRepository courseRepository;
  // @RequestMapping(method = RequestMethod.GET)
  @GetMapping
  public List<Object> list() {
    return null;
  }
}

