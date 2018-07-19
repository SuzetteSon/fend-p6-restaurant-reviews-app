# FEND P6 Restaurant Review App
---

## Project Overview:

For the **Restaurant Review** project, I converted a static webpage to a mobile-ready web application. I took a static design that lacks accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use. I added a service worker to cache requests to all of the site's assets so that any page visited by a user will be accessible when the user is offline, creating a seamless offline experience.

### Running the application

1. Fork and clone the repository. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Make sure Python is already installed on your computer. 

2. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

3. With your server running, visit the site: `http://localhost:8000`.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). Replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 





