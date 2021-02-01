package edu.tum.ase.compiler.unit;


import edu.tum.ase.compiler.model.SourceCode;
import edu.tum.ase.compiler.service.CompilerService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;


@RunWith(SpringRunner.class)
public class CompilerServiceTests {

    //@InjectMocks
    @Autowired
    private CompilerService systemUnderTest;

    @MockBean
    private Process pro;

    @MockBean
    private Runtime run;

    //Java Code - without error
    @Test
    public void shouldPrintOutput_When_GoodInput() throws Exception {
        //given
        //sourcecode to test
        SourceCode goodsourceCode = new SourceCode();
        goodsourceCode.setCode("public class App{public static void main(String[] args) {System.out.println(" + "\"" +
                "Hello World!" + "\" );}}");
        goodsourceCode.setFileName("App.java");
        goodsourceCode.setStdout("");
        goodsourceCode.setStderr("");

        //for mock IO: mock the process for the Execution of javac/gcc. Put your own Output/Error here
        String outputString = "";
        InputStream mockout = new ByteArrayInputStream( outputString.getBytes());

        String errorString = "";
        InputStream mockerr = new ByteArrayInputStream( errorString.getBytes());

        //Mistake: given(run.getRuntime().exec(anyString())).willReturn(pro);
        given(run.exec(anyString())).willReturn(pro);
        given(pro.getInputStream()).willReturn(mockout);
        given(pro.getErrorStream()).willReturn(mockerr);
        given(pro.exitValue()).willReturn(0);

        //when
        SourceCode result = systemUnderTest.compile(goodsourceCode);

        //then
        assertEquals(result.getStdout(), outputString);
        assertEquals(result.getStderr(), errorString);
    }

    //Java Code - with error
    @Test
    public void shouldPrintError_When_BadInput() throws Exception {
        //given
        //sourcecode to test
        SourceCode badsourceCode = new SourceCode();
        badsourceCode.setCode("public class App{public static void main(String[] args) {System.out.println(\"Hello World!\")}}");
        badsourceCode.setFileName("App.java");
        badsourceCode.setStdout("");
        badsourceCode.setStderr("");

        //for mock IO: mock the process for the Execution of javac/gcc. Put your own Output/Error here
        String outputString = "";
        InputStream mockout = new ByteArrayInputStream( outputString.getBytes());

        String errorString = "App.java:1: error: ';' expected"+
                "public class App{public static void main(String[] args) {System.out.println(\"Hello World!\")}}"+
                "                                                                                           ^1 error";
        InputStream mockerr = new ByteArrayInputStream( errorString.getBytes());

        given(pro.getInputStream()).willReturn(mockout);
        given(pro.getErrorStream()).willReturn(mockerr);
        given(pro.exitValue()).willReturn(0);
        given(run.exec(anyString())).willReturn(pro);

        //when
        SourceCode result = systemUnderTest.compile(badsourceCode);

        //then
        assertEquals(result.getStdout(), outputString);
        assertEquals(result.getStderr(), errorString);
    }

    //C code - with error
    @Test
    public void shouldPrintError_When_BadInputC() throws Exception {
        //given
        //sourcecode to test
        SourceCode badsourceCode = new SourceCode();
        badsourceCode.setCode("#include <stdio.h>\n" +
                "int main() {\n" +
                "   printf(\"Hello, World!\")\n" +
                "   return 0;\n" +
                "}");
        badsourceCode.setFileName("App.c");
        badsourceCode.setStdout("");
        badsourceCode.setStderr("");

        //for mock IO: mock the process for the Execution of javac/gcc. Put your own Output/Error here
        String outputString = "";
        InputStream mockout = new ByteArrayInputStream( outputString.getBytes());

        String errorString = "App.c: In function ‘main’:App.c:4:4: error: expected ‘;’ before ‘return’    return 0;    ^~~~~~";
        InputStream mockerr = new ByteArrayInputStream( errorString.getBytes());

        given(pro.getInputStream()).willReturn(mockout);
        given(pro.getErrorStream()).willReturn(mockerr);
        given(pro.exitValue()).willReturn(0);
        given(run.exec(anyString())).willReturn(pro);

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


