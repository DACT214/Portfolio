package com.carrillo.SpringService;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Photo {
    private String id;
    private String fileName;

    public Photo(String id, String fileName){
        this.id = id;
        this.fileName = fileName;
    }

}
