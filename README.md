# QAAutomator                   ![image](https://user-images.githubusercontent.com/26107997/134383169-84c9e7da-c9c8-402d-97dc-3b934b0bedde.png)

QA Automator is complete testing solution for Web and API testing. It is codeless UI automation framework on cloud platform with artificial intelligence Support which reduce 90% business cost.

**Prerequisite Software**
1.	Node JS
(Reference: https://nodejs.org/en/download/)
2.	ASP.NET Core SDK
(Reference: https://dotnet.microsoft.com/download)
3.	URL Rewrite Extension
(Reference: https://www.iis.net/downloads/microsoft/url-rewrite)
4.	IIS option be enabled with given below configuration

  ![image](https://user-images.githubusercontent.com/26107997/134213875-ce6640fe-6907-4fd5-aefd-b0a7bbaed41e.png)

**Host QA Automator on IIS Step by Step:**

1.	Download QAAutomator from github.
2.	Create any folder on your device and place the downloaded folder inside it. Over here I created a folder (QAAutomator) in My C drive and place the download folder inside it.

    ![image](https://user-images.githubusercontent.com/26107997/134376908-c77b0431-d6df-450c-ad43-5951b18ca96a.png)

3.	Create Virtual directory from Default Web Site, add alias name and select physical path 'C:\QAAutomator\API_QAAutomator\Automation_ResourcesResources'
    
    ![image](https://user-images.githubusercontent.com/26107997/138401930-b459b1ab-90da-4eb0-a602-af7dbcf5eee9.png)

4.	Browse the newly created virutal directory and note down URL (http://localhost:8009/virtualPathQAAutomator/)
6.	Open appsettings.json file from C:\QAAutomator\API_QAAutomator\.
7.	Update QAAutomatorResourcesPath ="C:\QAAutomator\API_QAAutomator\Automation_Resources\" and virtualRepositoryPath ="http://localhost:8009/virtualPathQAAutomator/"
  
  ![image](https://user-images.githubusercontent.com/26107997/138402963-6cf92562-a987-4ab6-88d0-b2e4e010b1f3.png)

8.	Add new Site in IIS (select any name QAAutomatorAPI, any port number 49658 and select set Physical path =C:\QAAutomator\API_QAAutomator

    ![image](https://user-images.githubusercontent.com/26107997/134380011-4a01d156-ce54-4d71-b1f7-fde8bb6f03d2.png)

9.	Browse QAAutomatorAPI application and note down URL e.g. (http://MachineIPAdrress:49658/ or http://localhost:49658/)
10.	Open ServerAddress.js file from C:\QAAutomator\Fronthand_QAAutomator\ folder.
11.	Update APIURL (http://MachineIPAdrress:49658/api/ or http://localhost:49658/api/), base URL will be same as Step 9 URL.

      ![image](https://user-images.githubusercontent.com/26107997/134380929-8b187120-8415-4ed9-8550-566642ea23ca.png)

13.	Add new site from IIS (sitename=QAAutomator, Physicalpath= C:\QAAutomator\Fronthand_QAAutomator , Port Number =3001)
    
    ![image](https://user-images.githubusercontent.com/26107997/134381965-fb292614-0ad1-45e0-8a97-d6329782da10.png)

13.	Browse your application using IP or local host 


