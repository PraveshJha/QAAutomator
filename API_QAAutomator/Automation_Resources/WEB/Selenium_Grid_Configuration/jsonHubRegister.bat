REM //############ Prerequisite ########################################
REM //############ Start Hub ########################################
SET HomePath=D:\QAAutomatorFileSystem\Automation_Resources\WEB\Selenium_Grid_Configuration\
SET Severname=%HomePath%selenium-server-standalone-3.141.59.jar
start cmd /k Call java -jar %Severname% -role hub -hubConfig %HomePath%HubConfig.json


