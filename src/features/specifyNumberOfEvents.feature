Feature: Specify Number of Events

 Scenario: 32 events are shown by default
  Given the user has opened the app
  When viewing the events section
  Then 32 events are shown by default

 Scenario: The user can specify the number of events
  Given a user has input a number of events
  When the user views the events
  Then the app will display the number specified by the user