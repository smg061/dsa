
def fizzbuzz(array: list[int]):
    for num in array:
        if num % 3 == 0 and num % 5 == 0:
            print('FizzBuzz')
        elif num % 3 == 0:
            print('Fizz')
        elif num % 5 == 0:
            print('Buzz')
        else:
            print(num)
            
def fizzbuzz_extensible(array: list[int], rules: dict[int, str]):
    for num in array:
        output = ''
        for divisor in rules:
            if num % divisor == 0:
                output += rules[divisor]
        if output == '':
            output = str(num)
        print(output)
        
if __name__ == '__main__':
    fizzbuzz(list(range(1, 101)))
    rules = {3: 'Fizz', 5: 'Buzz', 7: 'Bazz', 11: 'Bizz'}
    fizzbuzz_extensible(list(range(1, 101)), rules)