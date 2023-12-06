#!/usr/bin/python3

def print_sorted_dictionary(a_dictionary):
    # Sort keys alphabetically and print the key-value pairs
    for key in sorted(a_dictionary.keys()):
        print("{}: {}".format(key, a_dictionary[key]))
