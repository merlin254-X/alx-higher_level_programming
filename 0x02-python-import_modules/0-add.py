#!/usr/bin/python3
if __name__ == "__main__":
    """print the sum of 1 and 2."""
a = 1
b = 2
add_0 = __import__('add_0').add
print("{:d} + {:d} = {:d}".format(a, b, add_0(a, b)))
