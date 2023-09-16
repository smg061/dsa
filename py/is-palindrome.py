import re
def is_palindrome(s: str):
    if len(s) < 2:
        return True
    s = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
    return s == s[::-1]


if __name__ == '__main__':
    TEST_CASES = [
        '',
        'a',
        'ab',
        'aba',
        'abba',
        'racecar',
        'in a hole in the ground there lived a hobbit',
        'dammit, im mad',
        'this is not a palindrome',
        'never odd or even',
        
    ]
    
    for test in TEST_CASES:
        print(f'{test}: {is_palindrome(test)}')
        
    print('Done')