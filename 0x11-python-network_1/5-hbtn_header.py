#!/usr/bin/python3
"""
This script takes in a URL, sends a request to the URL, and displays the value 
of the variable X-Request-Id in the response header.

It uses the requests and sys packages to accomplish this task.

Example:
$ ./5-hbtn_header.py https://alx-intranet.hbtn.io
5e52e160-c822-4669-8b3a-8b3bbca7b090
"""
import requests
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    response = requests.get(url)
    print(response.headers.get('X-Request-Id'))
