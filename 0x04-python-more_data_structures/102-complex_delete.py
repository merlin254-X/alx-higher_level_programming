#!/usr/bin/python3

def complex_delete(a_dictionary, value):
    # Use a dictionary comprehension to delete keys with the specified value
    new_dict = {key: val for key, val in a_dictionary.items() if val != value}
    return new_dict
