package com.devkkang.kfootglance.entities;

import java.util.Date;
import java.util.Objects;

public class UserEntity {
    private int index;
    private String userId;
    private String contact;
    private String email;
    private String password;
    private String name;
    private String nickname;
    private int status;
    private int authority;
    private Date created_at;

    public int getIndex() {
        return index;
    }

    public UserEntity setIndex(int index) {
        this.index = index;
        return this;
    }

    public String getUserId() {
        return userId;
    }

    public UserEntity setUserId(String userId) {
        this.userId = userId;
        return this;
    }

    public String getContact() {
        return contact;
    }

    public UserEntity setContact(String contact) {
        this.contact = contact;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public UserEntity setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public UserEntity setPassword(String password) {
        this.password = password;
        return this;
    }

    public String getName() {
        return name;
    }

    public UserEntity setName(String name) {
        this.name = name;
        return this;
    }

    public String getNickname() {
        return nickname;
    }

    public UserEntity setNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }

    public int getStatus() {
        return status;
    }

    public UserEntity setStatus(int status) {
        this.status = status;
        return this;
    }

    public int getAuthority() {
        return authority;
    }

    public UserEntity setAuthority(int authority) {
        this.authority = authority;
        return this;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public UserEntity setCreated_at(Date created_at) {
        this.created_at = created_at;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserEntity)) return false;
        UserEntity that = (UserEntity) o;
        return index == that.index;
    }

    @Override
    public int hashCode() {
        return Objects.hash(index);
    }
}
