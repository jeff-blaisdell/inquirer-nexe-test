Nexe breaks inquirer choices widget.

Steps to reproduce:

Via Nexe
* Run ```npm install```
* Run ```npm run-script nexe``` to generate Nexe executable.  Will output to 'target' directory.
* Run ```target\inquirer.exe``` - On Windows, choices prompt does not accept user input.

Via Node
* ```node index.js``` Works as expected.
* ```node .\tmp\nodejs\4.2.3\node-v4.2.3\lib\nexe.js``` Works as expected.
