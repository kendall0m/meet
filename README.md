# Project Description
The Meet App is a serverless web application using React and a test-driven development technique. The application uses the Google Calendar API to fetch upcoming events.
## User Stories & Scenarios
## Feature 1: Filter Events By City
As a user, I should be able to filter events by city so that I can see the events in only that city.
### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Given the user is in the app, 
When the user is viewing the events and hasn't yet searched for a city, 
Then events from all cities will show.
### Scenario 2: User should see a list of suggestions when they search for a city.
Given the user is in the app, 
When they begin searching for a city, 
Then a list of suggestions should come up.
### Scenario 3: User can select a city from the suggested list.
Given the user is in the app, 
When they select a city from a suggested list, 
Then they should see a list of events in that city.

## Feature 2: Show/Hide Event Details
As a user, I should be able to show and hide event details so that I can look into only the events I'm interested in.
### Scenario 1: An event element is collapsed by default.
Given the user is in the app, 
When the event list is returned, 
Then the event element is collapsed by default.
### Scenario 2: User can expand an event to see details.
Given the user is in the app, 
When the event is expanded, 
Then the event details will be returned.
### Scenario 3:  User can collapse an event to hide details.
Given the user is in the app, 
When the user collapses the event, 
Then the details will be hidden.

## Feature 3: Specify Number of Events
As a user, I should be able to specify the number of events viewed, so that I can browse at my preferred pace.
### Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
Given the user is in the app, 
When the user hasn't specified a number, 
Then 32 events will be shown.
### Scenario 2: User can change the number of events displayed.
Given the user is in the app, 
When the user specifies a number of events, 
Then that number of events will be returned.

## Feature 4: Use the App When Offline
As a user, I should be able to use the app when offline, so that I can view cached data. 
### Scenario 1: Show cached data when there’s no internet connection.
Given the app is offline, 
When a user accesses the list of events, 
Then cached event data should be returned.
### Scenario 2: Show error when user changes search settings (city, number of events).
Given the app is offline, 
When a user accesses the app and tries to change the search settings, 
Then an error message will be returned. 

## Feature 5: Add an App Shortcut to the Home Screen
As a user, I should be able to add an app shortcut to the home screen, so that I can easily access the app.
### Scenario 1: User can install the meet app as a shortcut on their device home screen.
Given the user is in the app,
When the user wants to install the meet app,
Then the shortcut to the app will be installed.

## Feature 6: Display Charts Visualizing Event Details
As a user, I should be able to display charts visualizing event details so that I can view data for each event.
### Scenario 1: Show a chart with the number of upcoming events in each city.
Given the user is in the app,
When the user selectts the chart to show,
Then the number of upcoming events in each city will display.

## On serverless functions
The Meet app will be using serverless functions to process data and utilize the Google Calendar API in order to locate events. Serverless technology has many benefits including scalability; cost effectiveness; and fast, easy deployment. 

