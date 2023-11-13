package com.example.nguyenducmanh_c0623k1.controller;


import com.example.nguyenducmanh_c0623k1.model.Department;
import com.example.nguyenducmanh_c0623k1.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {
    @Autowired
    private IDepartmentService Departmentservice;

    @GetMapping("")
    public ResponseEntity<Iterable<Department>> showAll(){
        return new ResponseEntity<>(Departmentservice.findAll(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Department>> findOne(@PathVariable Long id){
        return new ResponseEntity<>(Departmentservice.findById(id), HttpStatus.OK);
    }
    @PostMapping("")
    public ResponseEntity<Department> create(@RequestBody Department department){
        Departmentservice.save(department);
        return new ResponseEntity<>(department,HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Department> update(@PathVariable Long id, @RequestBody Department department){
        Optional<Department> department1 = Departmentservice.findById(id);
        if(department1.isPresent()){
            department.setId(department1.get().getId());
            Departmentservice.save(department);
            return new ResponseEntity<>(department, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
