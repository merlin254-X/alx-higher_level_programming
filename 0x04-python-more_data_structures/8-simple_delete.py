#!/usr/bin/python3

def simple_delete(a_dictionary, key=""):
    # Use the del statement to delete the key if it exists
    if key in a_dictionary:
        del a_dictionary[key]
    return a_dictionary
