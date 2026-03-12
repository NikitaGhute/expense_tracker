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
   totalBalance();
   updateTransCount();

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
        const transaction_row=document.createElement("div");
        const note_write=document.createElement("div");

        console.log("list_creat:",list_create)
        list_create.classList.add("expense_item");
        transaction_row.classList.add('transaction_row');
        note_write.classList.add("note_row");

           transaction_row.innerHTML=`
           <span>Rs.${exp.amount1}</span>
           <span>${exp.trans_type}</span>
           <span>${exp.trans_category}</span>
           <span>${exp.trans_date}</span>
          <button class="delete_class">❌</button>
           `;
           note_write.innerHTML=`${exp.trans_note}`;
           list_create.appendChild(transaction_row);
           list_create.appendChild(note_write);

         expense_list.appendChild(list_create);
         // if else for style to income and expense
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
               totalBalance();
               updateTransCount();
            })

            // (exp.trans_type==="income") : list_creat.classList.add(income) :
         })
   }
   
   // count and display total amount of expenses, balance section
         const totalBalance=()=>{
            console.log("balance amount", totalBalance)
            let totalIncome=0;
            let totalExpense=0;
            expenses.forEach(exp => {
                  if(exp.trans_type === "income"){
                     console.log("total income")
                     totalIncome= totalIncome + Number(exp.amount1);
                  }
                  else{
                     totalExpense=totalExpense + Number(exp.amount1);
                     console.log("total expense")
                  }
            });
               const balance= totalIncome - totalExpense;
               if(totalBalance <= 0){
                  console.log("low balance");
               }
               else{
                  console.log("maintained balance")
               }
               console.log("balance", balance);
               balanceEl.textContent = "₹ " + balance;
               console.log("balanceEl", balanceEl);

               // style to balance section
               if (balance <= 0){
                  balanceEl.classList.add("lowBalance");
                  balanceEl.classList.remove("maintainBal")
               }
               else{
                  balanceEl.classList.add("maintainBal");
                  balanceEl.classList.remove("lowBalance")
               }
         }


         // update total amount of current month transaction
            const currentMonth=new Date().getMonth() + 1;
            console.log("current month", currMonth);

         // updating trnsaction count
         const updateTransCount=()=>{
            countEl.textContent=expenses.length;
            console.log("count of transaction", countEl)
         }

         // delete function to call 
         const deleteTransaction=()=>{
            console.log("delete list")
         }


         // const currentDate= new Date();
         const monthNumber= new Date().getMonth() +1;  //+1 because, js start month count from 0
         console.log("monthNumber", monthNumber)

         const today = new Date();
         const transMonth = today.getMonth();
         const transYear = today.getFullYear();


         let monthTotalAmount=0;
         expenses.forEach(exp =>{
            const monthNumber = new Date(exp.trans_date);
            const transMonth = monthNumber.getMonth() +1;
            const transYear= monthNumber.getFullYear();

            if (transMonth === currentMonth)

         })



   // update balance 
   // fliter by category
   // save data in localstorage
   

  // below are transaction filter
  // expenses = expenses.filter(item => item.id !== exp.id);
  // renderExpenses();
  // updateBalance();
  // updateTransactionCount();