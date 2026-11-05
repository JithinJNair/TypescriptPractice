# Automation Testing
-  with a Tool

## Why Automation Required?
-  When Regression Testing has to be done for every build.

## When do we start Automation
//1 After the application/build is stable
//2 After the manual test case is written ansd executed atleast once.
//3 When requirement is not changing frequently.
//4 When the testcase are repetitive
//5 For regression Testing.

## Advantage of Automation Testing
1) Less Manpower
2) Less Time
3) Acurate
4) Faster Execution
5) Better Quality

### Disadvantages of Automation Testing
1) Initial Development Effort
2) Tool knowledge Required
3) Programming language required.
4) Maintanance.

## What is not Automatable
1) Cant do Exploratory Testing.
2) Frequently changing features.
3) Fingerprint.
4) Biometric.
5) Face recognition.
6) Visual Testing.

## Differrent Tools
1) Selenium- Free and OpenSource- Mainly used for Web Applications.
            Supports chrome,edge,firefox,safari...
            Support Java,Python......
            Support windows,mac,Linux

2) Cypress- Its free and Opensource tool.
            Its used for Web based application only.
            Support only firefox,chrome,edge
            Support only JavaScript and TypeScript.

3) qtp-     Quick Test professional(Lated upgraded to UFT -unified functional testing)
            Its a Licensed version- Not Open source.
            Support VB Script.
            Support Web and Desktop application.
            Support Chrome,Edge,Firefox.

4) Appium- Free and OpenSource.
           Used for Mobile Testing.
           Support Android and ios.
           Supports java,python,C#,JS

# Playwright
1. Playwright is a free and opensource tool developed by microsoft used for automating web browser and testing web application.
2. Playwright is a framework and also Playwright is a library for automating web browser-enabling end to end testing.
   -- Playwright is a framework- Selenium is a library.To create a framework using Selenium ,we have to add third party libraries.
   Playwright need no external libraries.Everything is inbuild.
3. It gives dedicated api for performing Web testing.
4. Playwright is an open source node.js library.
   Selenium+Java is developed on JRE.It needs JRE run time environment.
   Playwright need node.js. node.js is an opensource,cross platform , Java Script runtime environment.

## Features

1. Chrome Browser-Supports chromium browsers(Chrome and edge), firefox,WebKit(Safari).
2. .Its Cross Platform-Supports mac,window,linux.
3. Supports multiple languages-Supports JS/TS, Java ,Python and C#
4. Autowait(reduce flakiness)
5. Mobile Testing.
6. Api Testing(reduce flakiness)
7. Parallel execution.
8. Built in Report.
9. Built in Runner.

# Playwright Architecture.
 Clinet layer- Playwright,JS/TS,Java,Python- Test scripts written using programming languages.
 Playwright server- developed on node.js.
 Browser- sChromium(chrome and edge) ,firefox,webkit

 Whenever we execute our Test Script, playwright commands will get converted to json format.
 We use websocket protocol
 Once we run testscript,it opens a connection and connection is terminated only after the testscript is done.
 Websocket sends json to playwright server.cdp?next what?
 (Selenium use w3c protocol-which works on http.Selenium opens and close connection for each and every command).










            

