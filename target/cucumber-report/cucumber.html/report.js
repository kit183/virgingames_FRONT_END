$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage/homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Online Slots",
  "description": "As user I want to select Online Slots option",
  "id": "online-slots",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 2901040200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should select Online Slots option successfully",
  "description": "",
  "id": "online-slots;user-should-select-online-slots-option-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Online Slots link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Online Slots page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 80313700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnOnlineSlotsLink()"
});
formatter.result({
  "duration": 866724400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNavigateToOnlineSlotsPageSuccessfully()"
});
formatter.result({
  "duration": 282488400,
  "status": "passed"
});
formatter.after({
  "duration": 666840500,
  "status": "passed"
});
});