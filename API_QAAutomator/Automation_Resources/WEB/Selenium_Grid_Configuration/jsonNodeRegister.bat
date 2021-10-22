REM //############Staring Chrome node on Port 5555 ########################################
SET HomePath=C:\QAAutomator-Solution\API_QAAutomator\Automation_Resources\WEB\Selenium_Grid_Configuration\
SET MiscPath=C:\QAAutomator-Solution\API_QAAutomator\Automation_Resources\WEB\SeleniumDLL\
SET Severname=%HomePath%selenium-server-standalone-3.141.59.jar
start cmd /k Call java -Dwebdriver.chrome.driver=%MiscPath%/chromedriver.exe -Dwebdriver.gecko.driver=%MiscPath%/geckodriver.exe -Dwebdriver.ie.driver=%MiscPath%/IEDriverServer.exe -jar %Severname% -role node -nodeConfig %HomePath%NodeConfig.json

