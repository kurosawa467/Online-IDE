import sys
from typing import Dict, Union

OP_MAP = {
    "sub": "-",
    "sum": "+",
    "mul": "*",
    "div": "/"
}


def generator(given_ast: Union[str, Dict[str, Union[str, int]]]) -> str:
    """
    The generator turns the AST into syntactically correct python code.
    E.g.

     sub
     / \
    2  sum
       /|\
      1 3 4

    into

    (2 - (1 + 3 + 4))

    :param given_ast: (dict)
    :return: code (str)
    """
    # if ast is passed in as string, convert to python object
    ast: Dict[str, Union[str, int]] = eval(given_ast) if type(given_ast) == str else given_ast
    # if no ast, exit 1 and return empty string
    if ast == {}:
        sys.exit(1)
    if ast["type"] == "num":
        return str(ast["value"])
    code = "("
    for idx, element in enumerate(ast["expr"]):
        code += generator(element)
        if idx < len(ast["expr"]) - 1:
            code += " " + OP_MAP[ast["value"]] + " "
    code += ")"
    return code


if __name__ == "__main__":
    # read from stdin (enables unix piping)
    for line in sys.stdin:
        # write to stdout (i.e. `print(...)`)
        print(generator(line))
