# tests/test_rectangle_update.py

import unittest
from models.rectangle import Rectangle

class TestRectangleUpdate(unittest.TestCase):
    def test_update_method(self):
        """Test the update method of the Rectangle class."""
        r = Rectangle(1, 2, 3, 4, 5)
        self.assertEqual(r.width, 1)
        self.assertEqual(r.height, 2)
        self.assertEqual(r.x, 3)
        self.assertEqual(r.y, 4)
        self.assertEqual(r.id, 5)

        r.update(10, 20, 30, 40, 50)
        self.assertEqual(r.width, 20)
        self.assertEqual(r.height, 30)
        self.assertEqual(r.x, 40)
        self.assertEqual(r.y, 50)
        self.assertEqual(r.id, 10)

if __name__ == "__main__":
    unittest.main()
