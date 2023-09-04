/**
 * 
 * Javascript Engine
 * 
 * ---------------
 * Introduction
 * ---------------
 * JavaScript is a scripting language and is not directly understood by computer but the browsers have inbuilt JavaScript engine.
 * which help them to understand and interpret JavaScript codes. These engines help to convert our JavaScript program into computer-understandable language. 
 * A JavaScript engine is a computer program that executes JavaScript code and converts it into computer understandable language
 * 
 * 
 * -----------------------------
 * List of Javascript Engines
 * -----------------------------
 * Google Chrome --> V8
 * Edge (Internet Explorer)	--> Chakra
 * Mozilla Firefox --> Spider Monkey
 * Safari --> Javascript Core Webkit
 * 
 * V8 provides an edge as it allows JavaScript to run much faster, 
 * which improves user’s experience of the web, the way for the development of web applications, 
 * and rapid growth of server-side JavaScript through projects like Node.js.
 * 
 * 
 * ------------
 * V8 Engine
 * ------------
 * JavaScript is a multi-paradigm prototype-based language, which uses JavaScript Engine such as Chrome’s V8 engine Firefox SpiderMonkey engine and etc. 
 * They convert the high level code into machine-readable code which lets computer to perform some specific tasks. We will understand this using an image.
 * 
 * Firstly, raw JavaScript file goes into the Parser. 
 * Parser: It checks for syntax and semantics. Parser is nothing but a lexical analysis that results into the breaking of code into tokens in order to understand 
 *         their meanings and these tokens gets converted into Abstract Syntax Tree(AST).
 * AST (Abstract Syntax tree): It is a hierarchical tree like structure of program representation which allows interpreter to understand the program. This AST is initially goes to the Interpreter.
 * Interpreter: It lets the AST to get converted into Byte code. In V8 engine, this process is known as Ignition but when some code gets repeated again and again.
 * Profiler: It will check for the repeating code that can be optimized. As soon as, it gets the repeating code, it basically moves the code into compiler.
 * Compiler: It spits out the most optimized byte code. It will produce the optimized byte-code which gets replaced with the slower byte code produced by the Interpreter. 
 *           In V8 Engine, This compiler is called as TurboFan.
 * 
 *
 * 
 */