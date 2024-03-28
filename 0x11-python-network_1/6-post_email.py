#!/usr/bin/python3
"""
This script takes in a URL and an email address, sends a POST request to the
passed URL with the email as a parameter, and finally displays the body of
the response.

The email must be sent in the variable email.
It uses the packages requests and sys.

Example:
$ ./6-post_email.py http://0.0.0.0:5000/post_email hr@holbertonschool.com
Your email is: hr@holbertonschool.com
"""
import requests
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    email = sys.argv[2]
    payload = {'email': email}
    response = requests.post(url, data=payload)
    print("Your email is:", email)
    print(response.text)
