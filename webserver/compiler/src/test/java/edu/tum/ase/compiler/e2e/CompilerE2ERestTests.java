

package edu.tum.ase.compiler.e2e;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.tum.ase.compiler.controller.CompilerController;
import edu.tum.ase.compiler.model.SourceCode;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class CompilerE2ERestTests {

    private final String URL = "/compile/";

    @Autowired
    private MockMvc systemUnderTest;

    @Autowired
    private CompilerController compilerController;

    @Autowired
    private ObjectMapper objectMapper;

    @After
    public void tearDown() {
        compilerController = new CompilerController();
    }

    @Test
    public void should_ReturnMessageWhenSendingSourceCode() throws Exception {
        // given
        SourceCode sourceCode = new SourceCode();
        sourceCode.setFileName("App.java");
        sourceCode.setCode("public class App{public static void main(String[] args) {System.out.println(\"Hello World!\")}}");
        sourceCode.setStdout("");
        sourceCode.setStderr("");

          //expected result
        String outputString = "";
        String errorString = "App.java:1: error: ';' expected"+
                "public class App{public static void main(String[] args) {System.out.println(\"Hello World!\")}}"+
                "                                                                                           ^1 error";


        // when
        ResultActions result = systemUnderTest.perform(post(URL)
                .content(objectMapper.writeValueAsString(sourceCode))
                .contentType(MediaType.APPLICATION_JSON));


        // then
        result
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.stdout").value(outputString))
                .andExpect(MockMvcResultMatchers.jsonPath("$.stderr").value(errorString));
              //a negative test
                //.andExpect(MockMvcResultMatchers.jsonPath("$.stderr").value("FAIL"));


    }

}
