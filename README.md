# Data Journalism and D3

![OUTPUT](https://github.com/natalieddavies/D3-challenge/blob/main/screenshot_live_server.PNG?raw=true)

The data set included with the assignment is based on 2014 ACS 1-year estimates: [https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml](https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml), The current data set includes data on rates of income, obesity, poverty, etc. by state.

This task utilises both **html** and **Javascript** so be sure to add all the necessary files. These will be the main files to run for analysis.

# Scatted

* Graphic is coded in the `app.js` file
* Pulled in the data from `data.csv` by using the `d3.csv` function 

Created a scatter plot between 'Smokers (%) vs Income'.

* Included state abbreviations in the circles.
* Created and situated my axes and labels to the left and bottom of the chart.
* used`python -m http.server` to run the visualization. This hosts the page at `localhost:8000` in web browser.