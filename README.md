# betslip
Really primitive betting component 

#BRIEF
TASK:

—
Using stack of React/Redux/ES6 and NodeJS in backend build Single Page Application that implements following functionality.
---------------------
The UI is split in two parts.
On the left side user sees the list of all odds.
On the right side there are odds that been selected (further Betslip).

The Odd is a component which contains of two elements. First element is the odd value (numeric), and the second is an input where user enters the bet amount(numeric).

When user clicks to odd value or user enters the bet amount, the Odd Component must be added to the top of the Betslip. If such odd (identified by ID) is already in the Betslip then it should not be added again

Implement two-way data binding on UI in following way: 
When input value of Odd Component is changed either in Betslip or in the list of all odds then input value of corresponding Odds Component must also change.

Implement one way server side communication following way: 
Using Websockets or Socket.IO library, Node.JS server must push messages towards client with random interval. The message contains Odd Value and Odd ID. When client receives message, the odd value must be updated on client
-----------------------

Some notes:
1) The build tool in up to you ( Webpack, Gulp, Grunt )
2) Usage of CSS Modules and CSS preprocessor is preffered but not mandatory
3) Publish the application to preferred code repository ( Github, Bitbucket)
4) The installation process must be as simple as: git clone 'your_project' && cd project && npm install && npm run 'your_app_name'
—
