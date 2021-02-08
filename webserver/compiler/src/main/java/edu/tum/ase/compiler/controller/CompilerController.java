package edu.tum.ase.compiler.controller;

import edu.tum.ase.compiler.model.SourceCode;
import edu.tum.ase.compiler.service.CompilerService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class CompilerController {
    @Autowired
    private CompilerService compilerService;

    @PostMapping(path = "/compiler/compile")
    public SourceCode compile(@RequestBody SourceCode sourceCode) throws Exception {
        return compilerService.compile(sourceCode);
    }
}
