package com.fullstack.social_login.controller;

import com.fullstack.social_login.exception.ResourceNotFoundException;
import com.fullstack.social_login.model.User;
import com.fullstack.social_login.repository.UserRepository;
import com.fullstack.social_login.security.CurrentUser;
import com.fullstack.social_login.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
//    @PreAuthorize("hasRole('ADMIN')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        System.out.println(userPrincipal.getAuthorities().iterator().next());
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }

}
