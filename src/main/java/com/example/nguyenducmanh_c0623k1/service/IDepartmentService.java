package com.example.nguyenducmanh_c0623k1.service;

import com.example.nguyenducmanh_c0623k1.model.Department;

public interface IDepartmentService extends IService<Department> {
    void save(Department department);
}
