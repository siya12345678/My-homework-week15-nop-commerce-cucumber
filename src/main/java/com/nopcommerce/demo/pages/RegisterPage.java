package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());
    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "FirstName")
    WebElement firstNameField;

    @CacheLookup
    @FindBy(id = "LastName")
    WebElement lastNameField;

    @CacheLookup
    @FindBy(id = "Email")
    WebElement emailIdField;

    @CacheLookup
    @FindBy(id = "Password")
    WebElement passwordField;

    @CacheLookup
    @FindBy(id = "ConfirmPassword")
    WebElement confirmPasswordField;

    @CacheLookup
    @FindBy(id = "register-button")
    WebElement clickOnRegisterButton;


    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Continue']")
    WebElement continueAfterRegisterBtn;

    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Register']")
    WebElement registerText;

    @CacheLookup
    @FindBy(id = "FirstName-error")
    WebElement firstNameError;

    @CacheLookup
    @FindBy(id = "LastName-error")
    WebElement lastNameError;

    @CacheLookup
    @FindBy(id = "Email-error")
    WebElement emailError;

    @CacheLookup
    @FindBy(id = "Password-error")
    WebElement passwordError;

    @CacheLookup
    @FindBy(id= "ConfirmPassword-error")
    WebElement confirmPwError;

    @CacheLookup
    @FindBy(id ="gender-female")
    WebElement femaleRB;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement dayDropdown;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement monthDropdown;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement yearDropdown;

    @CacheLookup
    @FindBy(xpath = "//div[@class='result' and contains(normalize-space(),'Your registration completed')]")
    WebElement regCompleted;

    @CacheLookup
    @FindBy(xpath = "//span[@class='male']")
    WebElement maleRadio;


    public String verifyRegisterText() {
        String txt =getTextFromElement(registerText);
        log.info("Getting register text " + registerText.toString());
        return txt;
    }
    public void setClickOnRegisterButton(){
        log.info("click on Register button");
        clickOnElement(clickOnRegisterButton);
    }
    public String firstNameError () {
        String txt =getTextFromElement(firstNameError);
        log.info("Getting Error message " +firstNameError .toString());
        return txt;
    }

    public String lasNameError () {
        String txt =getTextFromElement(lastNameError);
        log.info("Getting Error message " +lastNameError.toString());
        return txt;
    }
    public String eMailError() {
        String txt =getTextFromElement(emailError);
        log.info("Getting Error message " +emailError.toString());
        return txt;
    }
    public String passowrdError () {
        String txt =getTextFromElement(passwordError);
        log.info("Getting Error message " +passwordError.toString());
        return txt;
    }
    public String confirmPassowrdError() {
        String txt =getTextFromElement(confirmPwError);
        log.info("Getting Error message " +confirmPwError.toString());
        return txt;
    }
    public void selectFemaleGender(){
        log.info("click on female gender button");
        clickOnElement(femaleRB);
    }

    public void enterFirstName(String firstName){
        log.info("enter First Name " +firstNameField.toString());
        sendTextToElement(firstNameField,firstName);
    }
    public void enterLastName(String lastName){
        log.info("enter Last Name " +lastNameField.toString());
        sendTextToElement(lastNameField,lastName);
    }
    public void enterEMail(String eMail){
        log.info("enter email " +emailIdField.toString());
        sendTextToElement(emailIdField,eMail);
    }
    public void enterPws(String password){
        log.info("enter Password " +passwordField.toString());
        sendTextToElement(passwordField,password);
    }
    public void enterConfPws(String confpws){
        log.info("Confirm Passowrd" +confirmPasswordField.toString());
        sendTextToElement(confirmPasswordField,confpws);
    }
    public String verifyRegComplete(){
        String txt =getTextFromElement(regCompleted);
        log.info("Registration Complete message " +regCompleted.toString());
        return txt;
    }
    public void selectDateOfBirth(String day, String month, String year) {
        selectByVisibleTextFromDropDown(dayDropdown, day);
        selectByVisibleTextFromDropDown(monthDropdown, month);
        selectByVisibleTextFromDropDown(yearDropdown, year);
        log.info("Select day : '" + day + "', month : '" + month + "', year : '" + year + "'");
    }
}
