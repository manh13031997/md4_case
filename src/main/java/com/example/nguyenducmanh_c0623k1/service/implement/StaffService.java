package com.example.nguyenducmanh_c0623k1.service.implement;


import com.example.nguyenducmanh_c0623k1.model.Staff;
import com.example.nguyenducmanh_c0623k1.repository.StaffRepository;
import com.example.nguyenducmanh_c0623k1.service.IStaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StaffService implements IStaffService {
    @Autowired
    private StaffRepository staffRepository;

    @Override
    public Iterable<Staff> findAll() {
        return staffRepository.findAll();
    }

    @Override
    public Optional<Staff> findById(Long id) {
        return staffRepository.findById(id);
    }

    @Override
    public void save(Staff staff) {
    staffRepository.save(staff);
    }

    @Override
    public void delete(Long id) {
    staffRepository.delete(staffRepository.findById(id).get());
    }

    @Override
    public Iterable<Staff> findAllByNameContaining(String name) {
        return staffRepository.findAllByNameContaining(name);
    }
}
