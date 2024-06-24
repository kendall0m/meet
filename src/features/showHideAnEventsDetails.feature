Feature: Show/Hide Event Details

 Scenario: Details are collapsed by default
  Given the app is open
  When displaying the list of events
  Then the details are hidden by default

 Scenario: Event is expanded to view details
  Given the user is viewing the events
  When the user clicks on an event
  Then the details of the event will be displayed

 Scenario: Event is collapsed to hide details
  Given the app is open 
  And one event has been expanded 
  When the user clicks on the event
  Then the details will be hidden again