//  **********************************************************************************
//  * Copyright DoublePeak Systems 2022, 2023                                        *
//  * All copy, software and images on this site are property of DoublePeak Systems  *
//  * DoublePeak Systems is registered in the State of California.                   *
//  **********************************************************************************
//  * 09/11/2023 11:59 - Trying to get a clean put                                   *
//  **********************************************************************************
  const quiz = [
    {
      question: "What are the four main benefits of ASP.NET Core?",
      hint: "Platform, HP, OS, Future Spt ",
      answer: "Platform, HP, OS, Future Spt "
    },
    {
      question: "Name the 3 layers of a typical web architecure and elaborate.",
      hint: "likr MVC m data, c rules",
      answer: "Presentation layer, Business Layer, Data Layer."
    },
    {
      question: "Describe Master Pages and how they are used",
      hint: "Consistent",
      answer: "Master Pages offer a consistent layout and structure for the web design."
    },
    {
      question: "What is ASP.Net?",
      hint: "Carpenters do this to.",
      answer: "ASP.Net is a framework for developing websites, using web forms or MVC."
    },
    {
      question: "When is the ViewState available in a page cycle?",
      hint: "I then L",
      answer: "After Init() and before Page_Load()"
    },
    {
      question: "What is the difference between Server.Transfer and Response.Redirect?",
      hint: "How it transfers and Browser History",
      answer: "With Server.Transfer page processing is faster since it goes to another page without a postback to the client but with Response.Redirect it goes back to the client and updates the browser history."
    },
    {
      question: "From which base class all Web Forms are inherited?",
      hint: "You got this!",
      answer: "The Page class"
    },
    {
      question: "What are the different validators in ASP.NET?",
      hint: "Comp Range Expr",
      answer: "Required field Validator,Range Validator,Compare Validator,Custom Validator,Regular expression Validator, Summary Validator"
    },
    {
      question: "What is ViewState and give an example?",
      hint: "Control",
      answer: "ViewState is used to retain the state of server-side objects between page post backs. For Example, It can be placed in hidden field and can be turned off by the enableViewState tag"
    },
    {
      question: "Where the viewstate is stored after the page postback?",
      hint: "Never on the Server",
      answer: "ViewState is stored in a hidden field on the page at client side and exists for the life of the page."
    },
    {
      question: "How you can add an event handler?",
      hint: "btnSubmit.Att",
      answer: "Using the Attributes property of server side control. e.g. btnSubmit.Attributes.Add('onMouseOver','JavascriptCode();')"
    },
    {
      question: "What is caching?",
      hint: "For Perf, In Mem",
      answer: "Caching is a technique used to increase performance by keeping frequently accessed data or files in memory."
    },
    {
      question: "What are the different types of caching?",
      hint: "OFD",
      answer: "Output Caching where you can specify the timeout for it in the  @OutputCache directive in your .aspx file., Fragment Caching also known as Partial Page Caching creates custom user controls with their own caching settings using the @OutputCache directive, Data Caching is using database query results or API responses and storing them in memory."
    },
    {
      question: "How do you implement authentication and authorization in ASP.NET applications?",
      hint: "(RBAC)",
      answer: "You can use the built-in Identity framework such as the role-based access control (RBAC) using the UserManager  and RoleManager classes from the Identity framework."
    },
    {
      question: "Describe the purpose of Global.asax file in an ASP.NET application?",
      hint: "for AS, SS, Ae, SE",
      answer: "It is helpful to manage events such as application start, session start, application error, and session end",
    },
    {
      question: "Explain the differences between server-side and client-side code execution",
      hint: "for AS, SS, Ae, SE",
      answer: "Server-side code execution refers to the processing of code on a web server, typically using C#, PHP, or Java; The server processes the code and generates an HTML output that is sent to the client's browser. -- Client-side code execution occurs within the user's browser, utilizing languages like JavaScript, HTML, and CSS. The code runs directly on the client's machine, allowing for faster response times."
    },
    {
      question: "What is LINQ, and how can it be used with ASP.NET applications?",
      hint: "LINQ",
      answer: "LINQ allows developers to perform complex queries on various data sources, ie. SQL / XML, using a consistent syntax"
    },
    {
      question: "Explain the concept of routing in ASP.NET MVC",
      hint: "Routing ",
      answer: "Routing in ASP.NET MVC is the process of mapping incoming HTTP requests to specific controller actions.  It helps in directing user requests to the appropriate controllers and action methods."
    },
    {
      question: "What are some best practices for optimizing the performance of an ASP.NET application?",
      hint: "",
      answer: "1. Leverage caching effectively to reduce server load and improve response times. 2. Bundling Javascript and CSS reduces overhead. 3. Optimizing database access."
    },
    {
      question: "Describe the process of implementing error handling and logging in an ASP.NET app.",
      hint: "First, ",
      answer: "First, use try-catch blocks to handle exceptions, allowing to manage errors gracefully. For unhandled exceptions I configure custom error pages in the web.config file."
    },
    {
      question: "Describe the process of creating a RESTful API",
      hint: "First, ",
      answer: "First, you create a new project in Visual Studio and select the 'ASP.NET Web Application' template. Then, choose the 'Web API' option. Then define your data models and their relationships which will handle incoming HTTP requests and perform CRUD operations. Implement the required methods such as GET, POST, PUT, and DELETE."
    },
    {
      question: "Describe the process of consuming a RESTful API",
      hint: "T ",
      answer: "To consume the RESTful API, you can use various tools or libraries like HttpClient, RestSharp, or JavaScript frameworks like AngularJS or React. Send requests to the API endpoints. Handle the responses and deserialize the JSON content "
    },
    {
      question: "What is the role of Model-View-Controller (MVC) pattern in ASP.NET development",
      hint: "The ",
      answer: "The Model-View-Controller (MVC) pattern provides a separation of concerns, which leads to more maintainable and scalable applications"
    },
    {
      question: "Describe Model, View and Controller in detail.",
      hint: "The Model .",
      answer: "The Model represents the application's data structure and business logic. It is responsible for retrieving and storing data. The View is responsible for displaying the data. The Controller acts as an intermediary between the Model and View."
    },
    {
      question: "What are the main benefits of using MVC?",
      hint: "What are the main benefits of using MVC?",
      answer: "It promotes modularity, testability, and reusability of code, ultimately leading to more efficient and robust web applications."
    },
    {
      question: "Explain two types of data binding.",
      hint: "S & C",
      answer: "Simple data binding establishes a data connection for Read only, but complex data binding also allows updates."
    },
    {
      question: "Why should Razor syntax be used in ASP.NET MVC views?",
      hint: "Q & P",
      answer: "Razor syntax is a powerful, flexible, and easy-to-read templating language used to create dynamic web pages. And enhances the quality and performance of dynamic web apps."
    },
    {
      question: "What are some common security vulnerabilities in web applications, and how can they be mitigated?",
      hint: "SI, XSS, CSRF ",
      answer: "SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF). To mitigate use stored procedures, Request validation automatically checks incoming requests for suspicious content and blocks them if necessary, and generating unique anti-forgery tokens for each user session and including them in forms and AJAX requests."
    },
    {
      question: "What is a MVC action method?",
      hint: "controller class with restrictions",
      answer: "An action method is a method in a controller class with the following restrictions: It must be public. Private or protected methods are not allowed. It cannot be overloaded.It cannot be a static method."
    },
    {
      question: "What is the difference between Delegate and Action?",
      hint: "Deg predefined, Action is used",
      answer: "When developers define a delegate, they basically define the a method's return type and arguments. An Action is a delegate that has already been defined."
    }
];

	

function fQQs() {
  // handles request for Questions only

   var x = "<h3> Questions: " + "<br><hr/>";
  for (i = 1; i < quiz.length + 1; i++) {
     x = x + "<h3>" + i + ". " + quiz[i - 1].question + "<br>";
  }
  document.getElementById("myQQs").innerHTML = x;
  document.getElementById("myQQs").style.display =  "block";
}

function fAns() {
  // handles request for Answers only

  var x = "<h3> Answers: " + "<br><hr/>";
  for (i = 1; i < quiz.length + 1; i++) {
     x = x + "<h3>" + i + ". " + quiz[i - 1].answer + "<br>";
  }
  document.getElementById("myAns").innerHTML = x;
  document.getElementById("myAns").style.display =  "block";
}

function fQHs() {
  // load all text array values for qqs, hhs, and answers

  var x = "<h3> Questions with Hints: " + "<br><hr/>";
  for (i = 1; i < quiz.length + 1; i++) {
     x = x + "<h3>" + i + ". " + quiz[i - 1].question + "<br>";
     x = x + "<h4>" + i + ". " + quiz[i - 1].hint + "<p><hr/f></p>";
  }
  document.getElementById("myQHs").innerHTML = x;
  document.getElementById("myQHs").style.display =  "block";
}

function init() {
  // init qqs and ans to blank to start

  document.getElementById("myQQs").style.display =  "none";
  document.getElementById("myQHs").style.display =  "none";
  document.getElementById("myAns").style.display =  "none";
}

window.onload = init();

