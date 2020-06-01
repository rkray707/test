
  // // // // // // var bal = 500;
  // // // // // // var nike = window.prompt("enter the price of the shoes");
  // // // // // // var coupon = 500;
  // // // // // // if(nike <= bal ){
  // // // // // //   bal -= nike;
  // // // // // //   console.log( "proceed to purchase,your new balance is ", bal )
  // // // // // // }
  // // // // // // else{
  // // // // // // var op = window.prompt("Your coupon balance is 500 ,wanna add coupon, if yes press 1 ");
  
  // // // // // // if(op=='1')
  // // // // // // {
  // // // // // //   bal+=coupon;
  // // // // // //   if(nike <= bal )
  // // // // // //   {
  // // // // // //     bal -= nike;
  // // // // // //     console.log( "proceed to purchase,your new balance is ", bal )
  // // // // // //   }
  // // // // // //   else
  // // // // // //   {
  // // // // // //     console.log( "not enough bal")
  // // // // // //   }
  // // // // // // }
  // // // // // //   else
  // // // // // //   {
  // // // // // //     console.log("too broke son, better luck next time")
  // // // // // //   }

  // // // // // // }
  // // // // // if(true||false)
  // // // // // console.log("knfk")
  // // // // // var bal =[23.34, 4000.54, 445.00]
  // // // // // var students = ["isak","amit","raju"];
  
  // // // // // var naughtylist = [];
  // // // // // naughtylist.push(students[0]);


  // // // // // var index = naughtylist.indexOf("isaak");
  // // // // // console.log(naughtylist);
  // // // // // if(index > -1){
  // // // // //     naughtylist.splice(index, 1);
  // // // // // }
  // // // // // console.log(naughtylist);
  // // // // var y=10
  // // // // for(var x = 0; x < y ; x ++)
  // // // // {
  // // // //   console.log(x);
  // // // // }
  // function area(length, width)
  // // {
  // //   return length * width;
  // // }
  // // var rect =[];
  // // rect.push(area(15, 10));
  // // rect.push(area(18, 17));
  // // rect.push(area(17, 18));
  // // rect.push(area(19, 19));
  // // rect.push(area(10, 100));
  // // console.log(rect);
  // var bal = 1000;
  // function buy(amt)
  // {
  //   if(amt<=bal)
  //   {
  //     console.log("purchase successful bro");
  //     bal-=amt;
  //   }
  //   else
  //   {
  //     var r= amt-bal; 
  //     console.log("the purchase is unsucessfull son. you still need "+ r + "to make the purchase");
        
  //   }
  //   console.log("the left balance is " + bal );
  // }

  // buy(100);
  // buy(300.43);
  // buy(789);
 
  // var student0 = {
  //   firstname: "raju",
  //   lastname: "kumar",
  //   age : 7,
    
  // };
  // console.log(student0.greeting());
  //   var student1 = new Object();
  //   student1.firstname="john";
  //   student1.lastname="parker";
  //   student1.age= 7;
  //   var student2 ={};
  //   student2.firstname = "zack";
  //   student2.lastname  = "bobo";
  //   student2.age = 6;
  var students = [];
  function student(firstname, lastname, age)
  {
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.greeting = function(){
    return "hi, i m "+ this.firstname+ "and i m " + this.age + " years old.";
    };
  }
  students.push(new student("jenny","lage",5));
  students.push(new student("timmy","turner",3));
  students.push(new student("tom","jerry",4));
  var student = students[0];
  for (var key in student)
  {
    console.log(student[key]);
  }

  // var s1 =new student("jenny", "laga",5);
  // console.log(s1);
  // console.log(s1.greeting());

  //   students = [];
  //   students.push(student0);
  //   students.push(student1);
  //   students.push(student2);
    // for(var x=0; x < students.length; x++ )
    // {
    //   var student = students[x];
      
    //   console.log(student.greeting(x));
    // }

    



  // console.log(student.firstname);
  // console.log(student.lastname);
  // console.log(student["firstname"]);
  // console.log(student["lastname"]);
  // var st =["raju", "amit", "isaak", "ankur", "rex"];
  
  //
  
  