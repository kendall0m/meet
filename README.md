# Project Description
The Meet App is a serverless web application using React and a test-driven development technique. The application uses the Google Calendar API to fetch upcoming events.
## User Stories & Scenarios
### Feature 1: Filter Events By City
As a user,
### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Given
When
Then
### Scenario 2: User should see a list of suggestions when they search for a city.
Given
When
Then
### Scenario 3: User can select a city from the suggested list.
Given 
When 
Then 

### Feature 2: Show/Hide Event Details
As a user,
### Scenario 1: An event element is collapsed by default.
Given
When
Then
### Scenario 2: User can expand an event to see details.
Given
When
Then
### Scenario 3:  User can collapse an event to hide details.
Given
When 
Then

### Feature 3: Specify Number of Events
As a user, 
### Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
Given
When
Then 
### Scenario 2: User can change the number of events displayed.
Given:
When:
Then:

### Feature 4: Use the App When Offline
As a user, 
### Scenario 1: Show cached data when there’s no internet connection.
Given
When
Then
### Scenario 2: Show error when user changes search settings (city, number of events).
Given
When
Then

### Feature 5: Add an App Shortcut to the Home Screen
As a user,
### Scenario 1: User can install the meet app as a shortcut on their device home screen.
Given
When
Then

### Feature 6: Display Charts Visualizing Event Details
As a user,
### Scenario 1: Show a chart with the number of upcoming events in each city.
Given
When
Then 

