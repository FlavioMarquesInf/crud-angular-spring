package com.flamarques.crudspring.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flamarques.crudspring.model.Course;
import com.flamarques.crudspring.repository.CourseRepository;

import lombok.AllArgsConstructor;

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

  // @RequestMapping(method = RequestMethod.POST)
  @PostMapping
  public ResponseEntity<Course> create(@RequestBody Course course) {
    // System.out.println(course.getName()); // mapeamento do angular para o spring
    // courseRepository.save(course);
    return ResponseEntity
    .status(HttpStatus.CREATED)
    .body(courseRepository
    .save(course));
  }

}

