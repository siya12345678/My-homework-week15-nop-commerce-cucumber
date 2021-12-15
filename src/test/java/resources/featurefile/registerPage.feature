Feature: Register Page Test
  As a user I want to register an account and verify process.

  @Sanity @Regression
  Scenario:Verify User Should Navigate To Register Page Successfully
    Given I am on HomePage
    Then I click on Register Link
    And Verify "Register" text

  @Smoke @Regression
  Scenario: Verify That First Name Last Name Email Password And ConfirmPassword Fields are Mandatory
    Given  I am on HomePage
    Then I click on Register Link
    And  I click on REGISTER button
    Then Verify the First Name error message "First name is required."
    And  Verify the Last Name error message "Last name is required."
    And Verify the eMail error message "Email is required."
    And Verify the Password error message "Password is required."
    And Verify the Confirm Password error message "Password is required."

  @Smoke @Regression
  Scenario: Verify That User Should Create Account Successfully
    Given I am on HomePage
    And I click on Register Link
    And I Select gender Female
    And Enter firstname"George"
    And Enter lastname "Smith"
    And Select birthday "12""March""1978"
    And Enter email
    And Enter password "GSmith1234"
    And Enter Confirm Password "GSmith1234"
    And I click on REGISTER button
    Then I Verify message "Your registration completed"