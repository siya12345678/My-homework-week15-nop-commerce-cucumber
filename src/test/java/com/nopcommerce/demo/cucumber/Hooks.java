package com.nopcommerce.demo.cucumber;

import com.cucumber.listener.Reporter;
import com.nopcommerce.demo.propertyreader.PropertyReader;
import com.nopcommerce.demo.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class Hooks extends Utility{
    @Before
    public void setUP(){
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
        Reporter.assignAuthor("Jignesh");
    }
    @After
    // public void tearDown(){
    public void tearDown(Scenario scenario) throws IOException {
        if(scenario.isFailed()){
            String screenShotPath = Utility.getScreenshot(driver,scenario.getName().replace(" ","_"));
            Reporter.addScreenCaptureFromPath(screenShotPath);
        }
        closeBrowser();
    }
}
