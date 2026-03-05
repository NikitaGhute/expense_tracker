//step 1- get elements from html doc/dom
// get values of total details
const rem_balance=document.getElementById('balance');
const currMonth=document.getElementById('month_total');
const trans_count=document.getElementById('count');
// get elements from form
const trans_amount=document.getElementById('amount')
const select_type=document.getElementById('type');
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const noteInput = document.getElementById("note");
const form=document.getElementById("transaction_form");
// gets elements from 
const balanceEl = document.getElementById("balance");
const monthTotalEl = document.getElementById("month_total");
const countEl = document.getElementById("count");
// get elements of transaction list generated
const expense_list = document.getElementById("expenseList");

form.addEventListener('submit', (e)=>{
   e.preventDefault();       //stop page refresh 
// step 2-get values of all fields of form
   const amount1=trans_amount.value;
   console.log("transaction amount", amount1)
   const trans_type= select_type.value;
   console.log("type of transaction:", trans_type)
   const trans_category=category.value;
   console.log('catogery of transcation:',trans_category)
   const trans_date=dateInput.value;
   console.log("date of transaction is:", trans_date)
   const trans_note=noteInput.value
   console.log("note on transaction:", trans_note)
   
   //access values of all fields
   // step 3- create object of every transation, because every transaction has many details, so can store in the ject form
   const expense={
      id:Date.now(),
      amount1:amount1,
      trans_type:trans_type,
      trans_category:trans_category,
      trans_date:trans_date,
      trans_note:trans_note,
   }
   console.log("expense object", expense)
   expenses.push(expense);   //push expense objects into expenses array
   console.log("expenses pushed", expenses)
   console.log("Total expenses", expenses.length);
   renderExpenses();
   form.reset();

   // function to render new list after click on submit
   // expenses.push(expense);
})
   
// step 4- create array once you compelted step 3, outside of submit button so that it will remember all expenses
    //and push expense object into expenses values.
    let expenses=[];
   console.log("expenses array", expenses)

   // step 5- create lists of all expenses and render(displays)
   console.log("expense_list", expense_list)

   // render function to serve given dataon UI screen
   const renderExpenses=()=>{
      console.log("render function is working")
      // clear old list so used expenses_list.innerHTML
    expense_list.innerHTML="";
   //  use loop for render every expense object

       expenses.forEach(exp=>{
        console.log("expenses foreach loop", exp)
        const list_create=document.createElement("li");
        console.log("list_creat:",list_create)
         list_create.innerHTML=`&nbsp; &nbsp; <span>Rs.${exp.amount1} &nbsp; &nbsp; ${exp.trans_type} &nbsp; &nbsp; &nbsp; &nbsp; ${exp.trans_category} &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; ${exp.trans_date} &nbsp; &nbsp;&nbsp; &nbsp; ${exp.trans_note}&nbsp; &nbsp;</span>
          <button class="delete_class">❌</button>` ;
         list_create.classList.add("expense_item");
         expense_list.appendChild(list_create);
         // if else for style to incomr and expense
            if(exp.trans_type==="income"){
               list_create.classList.add("income");
            }
            else{
               list_create.classList.add("expense");
            }
            //for delete button,
            const delete_btn= list_create.querySelector(".delete_class");
            delete_btn.addEventListener("click", ()=>{
               // do not delete directly, only filter and update ui
               expenses= expenses.filter(item =>item.id !== exp.id);
               console.log("expenses", expenses)
               renderExpenses();
            })

            // (exp.trans_type==="income") : list_creat.classList.add(income) :
         })
   }
   

   // delete function to call 
   const deleteTransaction=()=>{
      console.log("delete list",)
   }