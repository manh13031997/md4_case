package com.example.nguyenducmanh_c0623k1.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int age;
    private double salary;
    @ManyToOne
    private Department department;

    public Staff() {
    }

    public Staff(String name) {
        this.name = name;
    }

    public Staff(String name, int age, double salary, Department department) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }
}
