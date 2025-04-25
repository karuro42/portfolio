import webbrowser
import os

# creates a path to our landing.html
file_path = os.path.abspath("landing.html")

# path to a URL
url = f"file://{file_path}"

# Open in browser
webbrowser.open(url)