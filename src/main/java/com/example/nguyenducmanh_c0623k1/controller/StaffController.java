package com.example.nguyenducmanh_c0623k1.controller;


import com.example.nguyenducmanh_c0623k1.model.Staff;
import com.example.nguyenducmanh_c0623k1.repository.StaffRepository;
import com.example.nguyenducmanh_c0623k1.service.IStaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/staffs")
public class StaffController {
    @Autowired
    private IStaffService staffService;

    @GetMapping("")
    public ResponseEntity<Iterable<Staff>> showAll(){
        return new ResponseEntity<>(staffService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Staff>> findOne(@PathVariable Long id){
        return new ResponseEntity<>(staffService.findById(id), HttpStatus.OK);
    }
    @PostMapping("")
    public ResponseEntity<Staff> create(@RequestBody Staff staff){
        staffService.save(staff);
        return new ResponseEntity<>(staff,HttpStatus.CREATED);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Staff> update(@PathVariable Long id, @RequestBody Staff staff){
        Optional<Staff> staff1 = staffService.findById(id);
        if(staff1.isPresent()){
            staff.setId(staff1.get().getId());
            staffService.save(staff);
            return new ResponseEntity<>(staff, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        Optional<Staff> staff1 = staffService.findById(id);
        if(staff1.isPresent()){
            staffService.delete(staff1.get().getId());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/search")
    public ResponseEntity<Iterable<Staff>> searchByName(@RequestBody Staff staff){
        return new ResponseEntity<>(staffService.findAllByNameContaining(staff.getName()),HttpStatus.OK);
    }
    @Autowired
    private StaffRepository repository;

    @GetMapping("/sortI")
    public ResponseEntity<Iterable<Staff>> sortI(){
        return new ResponseEntity<>(repository.sortIncreasing(),HttpStatus.OK);
    }

    @GetMapping("/sortD")
    public ResponseEntity<Iterable<Staff>> sortD(){
        return new ResponseEntity<>(repository.sortDecreasing(),HttpStatus.OK);
    }

}
