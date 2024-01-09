#!/usr/bin/python3

def read_file(filename=""):
    """Reads a text file (UTF8) and prints it to stdout."""

    with open(filename, 'r', encoding='utf-8') as file:
        """Read the file content and print it to stdout."""
        print(f.read())
