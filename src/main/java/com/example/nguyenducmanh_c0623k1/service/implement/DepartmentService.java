package com.example.nguyenducmanh_c0623k1.service.implement;


import com.example.nguyenducmanh_c0623k1.model.Department;
import com.example.nguyenducmanh_c0623k1.repository.DepartmentRepository;
import com.example.nguyenducmanh_c0623k1.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DepartmentService implements IDepartmentService {
@Autowired
private DepartmentRepository departmentRepository;

    @Override
    public Iterable<Department> findAll() {
        return departmentRepository.findAll();
    }

    @Override
    public Optional<Department> findById(Long id) {
        return departmentRepository.findById(id);
    }

    @Override
    public void save(Department department) {
    departmentRepository.save(department);
    }

    @Override
    public void delete(Long id) {
    departmentRepository.delete(findById(id).get());
    }
}
