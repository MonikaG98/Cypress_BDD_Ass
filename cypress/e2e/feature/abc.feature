Feature: Customized Tour Submission

  Scenario: User submits a customized tour request
    Given I open the STC Tourism homepage
    When I navigate to the Customized tours page
    And I select "Home Stay" in the preferred stay dropdown
    And I check the "England" checkbox
    And I click on the Contact Us menu
    And I search for "London" in the Contact Us search
    And I close the Contact Us window
    Then I submit the customized tour request