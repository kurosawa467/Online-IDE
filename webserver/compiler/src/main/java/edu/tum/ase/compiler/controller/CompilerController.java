package edu.tum.ase.compiler.controller;

import edu.tum.ase.compiler.model.SourceCode;
import edu.tum.ase.compiler.service.CompilerService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController
public class CompilerController {
    @Autowired
    private CompilerService compilerService;

    @RequestMapping(path = "/compiler/compile", method = RequestMethod.POST)
    public SourceCode compile(@RequestBody SourceCode sourceCode) throws Exception {
        return compilerService.compile(sourceCode);
    }
}
