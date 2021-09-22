# QAAutomator
QA Automator is complete testing solution for Web and API testing. It is codeless automation framework on cloud platform with artificial intelligence Support which reduce 90% business cost.

**Prerequisite Software**
1.	Node JS
(Reference: https://nodejs.org/en/download/)
2.	Web server for Chrome Extension
(Reference: https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en)
3.	URL Rewrite Extension
(Reference: https://www.iis.net/downloads/microsoft/url-rewrite)
4.	IIS option be enabled with given below configuration

  ![image](https://user-images.githubusercontent.com/26107997/134213875-ce6640fe-6907-4fd5-aefd-b0a7bbaed41e.png)

**Host QA Automator on IIS Step by Step:**

1.	Download QAAutomator from github.
2.	Create any folder on your device and place the downloaded folder inside it. Over here I created a folder (QAAutomator) in My C drive and place the download folder inside it.

  ![Uploading image.png…]()
 
3.	Launch Web server for chrome.
4.	Select Reports folder (C:\AutomationStudio\Automation_Studio_Build\Automation_Resources\Reports) from Web Server Chrome.

![image](https://user-images.githubusercontent.com/26107997/134214222-50e89e0c-f45b-472f-9032-85be216f8955.png)
5.	Note down Web Server URL (IP)
6.	Open Web.config file from C:\AutomationStudio\API_Publish folder.

![image](https://user-images.githubusercontent.com/26107997/134214301-85046501-6ccb-444c-9835-f57cdb7e60fc.png)
7.	Update ReportPublishURL key with value (Web server URL)

![image](https://user-images.githubusercontent.com/26107997/134214375-25a2700d-6d32-4ed3-a451-11e2ed4c591a.png)
8.	Add new Site in IIS (select any name automationstudioapi, port number 49957 and select set Physical path =C:\AutomationStudio\API_Publish

![image](https://user-images.githubusercontent.com/26107997/134214498-dc889c4f-e600-43a4-885b-15b98745f095.png)
9.	Note down API URI : (http://MachineIPAdrress:49957/)
10.	Open ServerAddress.js file from C:\AutomationStudio\Automation_Studio_Build\build folder.
![image](https://user-images.githubusercontent.com/26107997/134214599-532098bb-dbe4-4b99-be3a-a4fc253c4332.png)
11.	Update APIURL : http://MachineIPAdrress:49957/api/  and ReportURL : IP (web server for chrome)
12.	Add new site from IIS (sitename=Automationstudio,Physicalpath= C:\AutomationStudio\Automation_Studio_Build\build , Port Number =3001)
![image](https://user-images.githubusercontent.com/26107997/134214665-2cbbf946-b79e-4063-93c8-dceab1f92c57.png)
13.	Browse your application using IP or local host 


