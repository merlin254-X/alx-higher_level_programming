#!/usr/bin/python3

class BaseGeometry:
    """Base class for geometry."""

    def area(self):
        """Raises an Exception with the message 'area() is not implemented'."""
        raise Exception("area() is not implemented")

    def integer_validator(self, name, value):
        """
        Validates the value.
        
        Args:
            name (str): The name of the value.
            value: The value to be validated.
        """
        if type(value) is not int:
            raise TypeError(f"{name} must be an integer")
        if value <= 0:
            raise ValueError(f"{name} must be greater than 0")
