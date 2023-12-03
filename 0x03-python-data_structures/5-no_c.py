def no_c(my_string):
    # Create a new string by filtering out 'c' and 'C'
    new_string = ''.join(char for char in my_string if char not in ('c', 'C'))
    return new_string
