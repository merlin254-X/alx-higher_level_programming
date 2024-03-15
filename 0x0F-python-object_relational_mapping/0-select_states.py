#!/usr/bin/python3

import MySQLdb
import sys

if __name__ == "__main__":
    # Get command line arguments
    mysql_username = sys.argv[1]
    mysql_password = sys.argv[2]
    database_name = sys.argv[3]

    # Connect to MySQL server
    db = MySQLdb.connect(host="localhost", port=3306, user=mysql_username,
                         passwd=mysql_password, db=database_name)

    # Create a cursor object
    cursor = db.cursor()

    # Execute SQL query to retrieve states
    cursor.execute("SELECT * FROM states ORDER BY id ASC")

    # Fetch all rows
    rows = cursor.fetchall()

    # Display results
    for row in rows:
        print(row)

    # Close cursor and database connection
    cursor.close()
    db.close()
