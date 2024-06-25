Feature: Show/Hide Event Details

 Scenario: Details are collapsed by default
  Given the app is open
  When displaying the list of events
  Then the details are hidden by default

 Scenario: Show event details
  Given the user is viewing the events
  When the user clicks on Show Details button
  Then the details of the event will be displayed

 Scenario: Details are collapsed
  Given one event has details expanded 
  When the user clicks Hide Details button
  Then the details will be hidden again