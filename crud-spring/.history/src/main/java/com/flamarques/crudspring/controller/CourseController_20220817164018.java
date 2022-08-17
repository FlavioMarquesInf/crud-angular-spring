package com.flamarques.crudspring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flamarques.crudspring.repository.CourseRepository;

import lombok.AllArgsConstructor;
import model.Course;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor

public class CourseController {

  private final CourseRepository courseRepository;

  // @RequestMapping(method = RequestMethod.GET)
  @GetMapping
  public List<Course> list() {
    return courseRepository.findAll();
  }

}

