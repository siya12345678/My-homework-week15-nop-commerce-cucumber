$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerPage.feature");
formatter.feature({
  "line": 1,
  "name": "ComputerPageTest",
  "description": "As a User I want to order computer",
  "id": "computerpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8693228300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computerpagetest;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Verify \"Computers\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 86015899,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 3083000500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iVerifyText(String)"
});
formatter.result({
  "duration": 148350100,
  "status": "passed"
});
formatter.after({
  "duration": 745428200,
  "status": "passed"
});
formatter.before({
  "duration": 5922967300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computerpagetest;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Verify \"Desktops\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 163400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 2464336501,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 2195387400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 10
    }
  ],
  "location": "DesktopPageTest.iVerifyPage(String)"
});
formatter.result({
  "duration": 55041300,
  "status": "passed"
});
formatter.after({
  "duration": 690227700,
  "status": "passed"
});
formatter.uri("loginPage.feature");
formatter.feature({
  "line": 1,
  "name": "LoginPageTest",
  "description": "As a user I want to login on website",
  "id": "loginpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5575696201,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Should Navigate To LoginPage SuccessFully.",
  "description": "",
  "id": "loginpagetest;user-should-navigate-to-loginpage-successfully.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify that \"Welcome, Please Sign In!\" message display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 129100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1756937899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iVerifyThatMessageDisplay(String)"
});
formatter.result({
  "duration": 41814200,
  "status": "passed"
});
formatter.after({
  "duration": 754794499,
  "status": "passed"
});
formatter.before({
  "duration": 5571374300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify That User Should LogIn SuccessFully With ValidCredentials.",
  "description": "",
  "id": "loginpagetest;verify-that-user-should-login-successfully-with-validcredentials.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Sanity"
    },
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I Click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter valid EmailId \"gsmith@google.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter valid Password \"abcd1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Verify that LogOut link is display.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 1149801,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1856307500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gsmith@google.com",
      "offset": 23
    }
  ],
  "location": "LoginPageTest.iEnterValidEmailId(String)"
});
formatter.result({
  "duration": 117042801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd1234",
      "offset": 24
    }
  ],
  "location": "LoginPageTest.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 112051600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 806420499,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iVerifyThatLogOutLinkIsDisplay()"
});
formatter.result({
  "duration": 11859780901,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: //a[normalize-space()\u003d\u0027Log out\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-EBTO0JF\u0027, ip: \u0027172.20.10.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:48)\r\n\tat com.nopcommerce.demo.pages.LoginPage.verifyLogoutLinkIsDisplayedAfterLogin(LoginPage.java:82)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginPageTest.iVerifyThatLogOutLinkIsDisplay(LoginPageTest.java:58)\r\n\tat ✽.Then I Verify that LogOut link is display.(loginPage.feature:26)\r\n",
  "status": "failed"
});
