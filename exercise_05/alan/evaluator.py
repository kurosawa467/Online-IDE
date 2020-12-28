import sys
from functools import reduce
from typing import Dict, List, Union

def sub(ops: List[int]) -> int:
    return reduce(lambda a, b: a - b, ops, 0)

def mul(ops: List[int]) -> int:
    return reduce(lambda a, b: a * b, ops, 1)

def div(ops: List[int]) -> int:
    return reduce(lambda a, b: a / b, ops, 1)

OP_MAP = {
    "sum": lambda ops: sum(ops),
    "sub": lambda ops: sub(ops),
    "mul": lambda ops: mul(ops),
    "div": lambda ops: div(ops)
}


def evaluator(given_ast: Union[str, Dict[str, Union[str, int]]]) -> int:
    """
    The evaluator recursively visits each leaf from the AST with pre-order traversal (root, left, right)
    and returns either
    (1) the corresponding "value", in case the "type" is `num`
    or
    (2) the result of the corresponding arithmetic operation of all operands (`ops`), in case the "type" is `op`

    :param given_ast: (dict)
    :return: number (int)
    """
    # if ast is passed in as string, convert to python object
    ast: Dict[str, Union[str, int]] = eval(given_ast) if type(given_ast) == str else given_ast
    # if no ast, exit 1 and return 0
    if ast == {}:
        sys.exit(1)
    if ast["type"] == "num":
        return ast["value"]
    return OP_MAP[ast["value"]] (map(evaluator, ast["expr"]))


if __name__ == "__main__":
    # read from stdin (enables unix piping)
    for line in sys.stdin:
        # write to stdout (i.e. `print(...)`)
        print(evaluator(line))
