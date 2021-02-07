package edu.tum.ase.compiler.service;
import edu.tum.ase.compiler.model.SourceCode;
import org.springframework.stereotype.Service;
import java.io.*;

@Service
public class CompilerService {

    public SourceCode compile(SourceCode sourceCode) throws Exception {
        //Extract extension
        String[] file = sourceCode.getFileName().split("\\.");
        String extension = file[file.length-1];

        //Create the file
        createFile(sourceCode);

        //Execute via javac or gcc
        boolean compilable;
        if (extension.equals("java"))
            compilable =  run("javac " + sourceCode.getFileName(), sourceCode);
        else if (extension.equals("c"))
            compilable =  run("gcc " + sourceCode.getFileName(), sourceCode);
        else
            compilable = false;
        sourceCode.setCompilable(compilable);
        return sourceCode;
    }

    private static boolean run(String command, SourceCode sourceCode) throws Exception{
        String stdout = "";
        String stderr = "";
        String s;

        //Compile
        Process pro = Runtime.getRuntime().exec(command);
        BufferedReader stdInput = new BufferedReader(new
                InputStreamReader(pro.getInputStream()));

        BufferedReader stdError = new BufferedReader(new
                InputStreamReader(pro.getErrorStream()));

        //stdout
        while ((s = stdInput.readLine()) != null)
           stdout += s;

        //stderr
        while ((s = stdError.readLine()) != null)
            stderr += s;

        sourceCode.setStdout(stdout);
        sourceCode.setStderr(stderr);

        pro.waitFor();
        return 0 == pro.exitValue();
    }

    public void createFile(SourceCode sourceCode) throws IOException {
        BufferedWriter output = null;
        try {
            File file = new File(sourceCode.getFileName());
            output = new BufferedWriter(new FileWriter(file));
            output.write(sourceCode.getCode());
        } catch ( IOException e ) {
            e.printStackTrace();
        } finally {
            if ( output != null ) {
                output.close();
            }
        }
    }
}
