package com.codestates_pre024.stackoverflow.global.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.security.Principal;


@Getter
public class PrincipalDto implements Principal {
    Long id;
    String email;

    public PrincipalDto(Integer id, String email) {

        this.id = Long.valueOf(id);
        this.email = email;
    }

    @Override
    public String getName() {
        return email;
    }


}

