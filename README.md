# Runnable Demo Module 

## Purpose

This module provides the full end to end structre of React.js/Node.js/TypeScript with C++ SDK back support.

## Description

Server folder which contains the server side routing and code.  Client subfolder which contains all react.js client code and SDK code which contains C++ and generated WebAssemply for use by server code.

## Usage Instructions

Inside server root folder, run "yarn run build" to compile cpp file and generate WebAssembly, Run "yarn run start" to start the server or alternatively to start up in debug mode from package.json
Go to client subfolder and run "yarn run build" to compile the client code and then "yarn run start" to run the client side code

## Preconditions and Assumptions
//Install node
//Install yarn
//install Emscripten
git clone https://github.com/juj/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh

## Outputs
This calculation result will be displayed in the page.

## Versions

| Version | Major changes |
| ------- | ------------- |
| 1     | Created module |
| 2     | Added more sauce |
