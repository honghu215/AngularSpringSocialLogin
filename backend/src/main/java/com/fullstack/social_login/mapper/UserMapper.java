package com.fullstack.social_login.mapper;

import com.fullstack.social_login.model.User;

import java.util.Optional;

public interface UserMapper {

    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);

    Optional<User> findById(Long id);

    User save(User user);
}
