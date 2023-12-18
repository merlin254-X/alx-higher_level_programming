#!/usr/bin/python3

def uniq_add(my_list=[]):
    # Use a set to store unique integers and add them up
    unique_set = set(my_list)
    result = sum(unique_set)
    return result
