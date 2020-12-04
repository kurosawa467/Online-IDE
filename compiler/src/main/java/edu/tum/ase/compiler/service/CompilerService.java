package edu.tum.ase.compiler.service;

import edu.tum.ase.compiler.model.SourceCode;
import org.springframework.stereotype.Service;

import java.io.*;
import java.lang.Runtime;

@Service
public class CompilerService {
    public SourceCode compile (SourceCode sourceCode) throws IOException {
        //TODO: implement compilation procedure here

        //take code and fileName


        //run Code
        Runtime r = Runtime.getRuntime();
        Process p = r.exec(sourceCode.getCode());

          // check if javac or gcc

       


          //output is now printed to PrintStream out
        PrintStream out = new PrintStream(new ByteArrayOutputStream());
        System.setOut(out);

          //error is now printed to PrintStream err
        PrintStream err = new PrintStream(new ByteArrayOutputStream());
        System.setErr(err);

          //Test for compilability:
        boolean compilable = false;


        // return "stdout", "stderr" and "compilable"
        sourceCode.setStdout(out.toString());
        sourceCode.setStderr(err.toString());
        sourceCode.setCompilable(compilable);

        return sourceCode;
    }
}
