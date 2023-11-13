package com.example.nguyenducmanh_c0623k1.service;

import com.example.nguyenducmanh_c0623k1.model.Staff;

public interface IStaffService extends IService<Staff> {
    void save(Staff staff);

    Iterable<Staff> findAllByNameContaining(String name);
}
