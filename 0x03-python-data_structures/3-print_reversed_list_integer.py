def print_reversed_list_integer(my_list=[]):
    # Check if the list is not empty
    if my_list:
        # Reverse the list
        reversed_list = my_list[::-1]

        # Print the reversed list
        for item in reversed_list:
            if isinstance(item, int):
                print("{:d}".format(item))
            else:
                print("Not an integer")

    else:
        print("Empty list")
