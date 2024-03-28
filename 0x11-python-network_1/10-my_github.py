#!/usr/bin/python3
"""
Displays your GitHub id using GitHub API and Basic Authentication.
"""

import requests
import sys

if __name__ == "__main__":
    username = sys.argv[1]
    password = sys.argv[2]

    url = "https://api.github.com/user"
    response = requests.get(url, auth=(username, password))

    try:
        data = response.json()
        if 'id' in data:
            print(data['id'])
        else:
            print("None")
    except ValueError:
        print("None")
