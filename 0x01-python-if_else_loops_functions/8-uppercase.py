#!/usr/bin/python3

def uppercase(s):
    """Print a string in uppercase followed by a new line."""
    for char in s:
        uppercase_char = char
        if ord('a') <= ord(char) <= ord('z'):
            uppercase_char = chr(ord(char) - ord('a') + ord('A'))
        print(uppercase_char, end="")
    print()
