package com.example.nguyenducmanh_c0623k1.repository;


import com.example.nguyenducmanh_c0623k1.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {

}
