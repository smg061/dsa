"""
Add two numbers reprsented by strings and return the sum as a string. 
This must be done without using built-in library functions like BigInteger.
and must work for floating point numbers as well.
"""


def add_strings(num1: str, num2: str) -> str:
    # this does not work for floating point numbers

    p1 = len(num1) - 1
    p2 = len(num2) - 1
    carry_over = 0

    result = []

    while p1 >= 0 or p2 >= 0:
        digit1 = ord(num1[p1]) - ord("0") if p1 >= 0 else 0
        digit2 = ord(num2[p2]) - ord("0") if p2 >= 0 else 0
        digit = carry_over + digit1 + digit2
        carry_over = digit // 10
        result.append(str(digit % 10))
        p1 -= 1
        p2 -= 1
    if carry_over:
        result.append(str(carry_over))
    return "".join(result[::-1])


def add_strings_two(num1: str, num2: str) -> str:
    # this doesn't work for floating point numbers either
    def convert(num: str) -> int:
        result, digits = 0, {str(i): i for i in range(10)}
        for i in num:
            if i != ".":
                result = result * 10 + digits[i]
        return result

    return str(convert(num1) + convert(num2))


def add_strings_three(num1: str, num2: str) -> str:
    # let's take care of floating point numbers first
    floats1 = num1.split(".")
    floats2 = num2.split(".")

    if len(floats1) == 2 or len(floats2) == 2:
        # we have floats
        have1 = len(floats1) == 2
        have2 = len(floats2) == 2
        if have1 and have2:
            # both have floats
            floats = add_strings(floats1[1], floats2[1])
        else:
            # only one has floats
            floats = floats1[1] if len(floats1) == 2 else floats2[1]
    else:
        floats = ""

    # now let's take care of the integers
    ints1 = num1.split(".")[0]
    ints2 = num2.split(".")[0]

    ints = add_strings(ints1, ints2)

    if floats:
        return ints + "." + floats
    else:
        return ints


if __name__ == "__main__":
    num1 = "123"
    num2 = "456"

    print(add_strings_three(num1, num2))

    num1 = "123.45"

    num2 = "456.78"

    print(add_strings_three(num1, num2))

    num1 = "123.45"

    num2 = "456"

    print(add_strings_three(num1, num2))

    num1 = "123"

    num2 = "456.78"

    print(add_strings_three(num1, num2))
