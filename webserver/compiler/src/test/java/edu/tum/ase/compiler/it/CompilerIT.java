package edu.tum.ase.compiler.it;


//• Integration tests checking if using the actual underlying OS infrastructure (file system, processes) works.

import edu.tum.ase.compiler.model.SourceCode;
import edu.tum.ase.compiler.service.CompilerService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.File;

import static org.junit.jupiter.api.Assertions.*;


@RunWith(SpringRunner.class)
public class CompilerIT {

    @Autowired
    private CompilerService systemUnderTest;


    //Test Files
    @Test
    public void should_CreateFile_When_RunningNewCode() throws Exception {

        //given
        SourceCode goodsourceCode = new SourceCode();
        goodsourceCode.setCode("public class App{public static void main(String[] args) {System.out.println(" + "\"" +
                "Hello World!" + "\" );}}");
        goodsourceCode.setFileName("App.java");
        goodsourceCode.setStdout("");
        goodsourceCode.setStderr("");

        //when
        SourceCode result = systemUnderTest.compile(goodsourceCode);

        //then
        //check if new File App.java is created
        File f = new File("./App.java");
        assertTrue(f.exists());
        assertTrue(f.isFile());
        assertFalse(f.isDirectory());

        //negative Test with a non-existent file name
        File g = new File("./Fail.java");
        assertFalse(g.exists());
        assertFalse(g.isFile());
    }


    //Test Runtime and Processes
    @Test
    public void shouldPrintError_When_BadInput() throws Exception {

        //given
        //sourcecode to test
        SourceCode badsourceCode = new SourceCode();
        badsourceCode.setCode("public class App{public static void main(String[] args) {System.out.println(\"Hello World!\")}}");
        badsourceCode.setFileName("App.java");
        badsourceCode.setStdout("");
        badsourceCode.setStderr("");


        // expected output
        String outputString = "";
        String errorString = "App.java:1: error: ';' expected"+
                "public class App{public static void main(String[] args) {System.out.println(\"Hello World!\")}}"+
                "                                                                                           ^1 error";

        //when
        SourceCode result = systemUnderTest.compile(badsourceCode);

        //then
        assertEquals(result.getStdout(), outputString);
        assertEquals(result.getStderr(), errorString);
    }


    @TestConfiguration
    static class CompilerServiceTestsConfiguration {

        @Bean
        public CompilerService systemUnderTest() {
            return new CompilerService();
        }
    }


}

