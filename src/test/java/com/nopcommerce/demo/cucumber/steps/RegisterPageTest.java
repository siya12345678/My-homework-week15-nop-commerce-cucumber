package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import com.nopcommerce.demo.utility.Utility;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class RegisterPageTest extends Utility {
    @And("^Verify \"([^\"]*)\" text$")
    public void verifyText(String message) {
        String actualText = new RegisterPage().verifyRegisterText();
        Assert.assertEquals("Error not Displayed", message, actualText);
    }

    @Then("^I click on Register Link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @And("^I click on REGISTER button$")
    public void iClickOnREGISTERButton() {
        new RegisterPage().setClickOnRegisterButton();
    }

    @Then("^Verify the First Name error message \"([^\"]*)\"$")
    public void verifyTheFirstNameErrorMessage(String message) {
        String actualText = new RegisterPage().firstNameError();
        Assert.assertEquals("Error not Displayed", message, actualText);
    }
    @And("^Verify the Last Name error message \"([^\"]*)\"$")
    public void verifyTheLastNameErrorMessage(String message) {
        String actualText = new RegisterPage().lasNameError();
        Assert.assertEquals("Error not Displayed", message, actualText);
    }

    @And("^Verify the eMail error message \"([^\"]*)\"$")
    public void verifyTheEMailErrorMessage(String message) {
        String actualText = new RegisterPage().eMailError();
        Assert.assertEquals("Error not Displayed", message, actualText);
    }


    @And("^Verify the Password error message \"([^\"]*)\"$")
    public void verifyThePasswordErrorMessage(String message) {
        String actualText = new RegisterPage().passowrdError();
        Assert.assertEquals("Error not Displayed", message, actualText);
    }


    @And("^Verify the Confirm Password error message \"([^\"]*)\"$")
    public void verifyTheConfirmPasswordErrorMessage(String message) {
        String actualText = new RegisterPage().confirmPassowrdError();
        Assert.assertEquals("Error not Displayed", message, actualText);
    }

      @And("^Enter firstname\"([^\"]*)\"$")
    public void enterFirstname(String name)  {
    new RegisterPage().enterFirstName(name);
    }

    @And("^Enter lastname \"([^\"]*)\"$")
    public void enterLastname(String lname)  {
        new RegisterPage().enterLastName(lname);
    }


    @And("^Enter email$")
    public void enterEmail() {
     String email=  "SGB"+currentTimeStamp()+"@gmail.com";
        new RegisterPage().enterEMail(email);
    }

    @And("^Enter password \"([^\"]*)\"$")
    public void enterPassword(String pws)  {
        new RegisterPage().enterPws(pws); }


    @And("^Enter Confirm Password \"([^\"]*)\"$")
    public void enterConfirmPassword(String confPws)  {
        new RegisterPage().enterConfPws(confPws); }


    @Then("^I Verify message \"([^\"]*)\"$")
    public void iVerifyMessage(String message) {
        String actualMessage = new  RegisterPage().verifyRegComplete();
        Assert.assertEquals("Registration not complete",message,actualMessage);
    }

    @And("^Select birthday \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
    public void selectBirthday(String day, String month, String year) {
    new RegisterPage().selectDateOfBirth(day,month,year);
    }

    @And("^I Select gender Female$")
    public void iSelectGenderFemale() {
        new RegisterPage().selectFemaleGender();
    }
}


