#!/usr/bin/python3
"""0-read_file: read_file()."""

def read_file(filename=""):
    """Reads a text file (UTF8) and prints it to stdout."""

    with open(filename, 'r', encoding='utf-8') as a_file:
        """Read the file content and print it to stdout."""

        print("{}".format(a_file.read()), end="")
