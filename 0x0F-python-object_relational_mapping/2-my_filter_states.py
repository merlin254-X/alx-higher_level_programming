#!/usr/bin/python3
"""
Script that displays all values in the states table of hbtn_0e_0_usa
where name matches the argument
"""

import MySQLdb
import sys

if __name__ == "__main__":
    # Retrieve MySQL username, password, database name, and state name searched
    username = sys.argv[1]
    password = sys.argv[2]
    db_name = sys.argv[3]
    state_name = sys.argv[4]

    # Connect to MySQL server running on localhost at port 3306
    db = MySQLdb.connect(host="localhost",
                         port=3306,
                         user=username,
                         passwd=password,
                         db=db_name)

    # Create a cursor object to execute SQL queries
    cursor = db.cursor()

    # Execute SQL query to select states matching the provided name
    cursor.execute("SELECT * FROM states WHERE name LIKE BINARY %s "
                   "ORDER BY id ASC", (state_name,))

    # Fetch all the results and print them
    for state in cursor.fetchall():
        print(state)

    # Close the cursor and database connection
    cursor.close()
    db.close()
