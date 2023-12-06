#!/usr/bin/python3

def best_score(a_dictionary):
    # Check if the dictionary is not None
    if a_dictionary is not None and len(a_dictionary) > 0:
        # Find the key with the maximum value
        best_key = max(a_dictionary, key=a_dictionary.get)
        return best_key
    else:
        return None
