
var incomeList = []
var expenseList = []
var totalMonthlyIncome = 0;
var totalMonthlyExpenses = 0;
var totalMonthlySavings = 0;

displayReport();

/**
 * report for both income and expenses
 */
function displayReport(){
    calculateAndDisplayIncome();
    calculateAndDisplayExpenses();
    displayBudget();
}

function displayBudget(){
    document.getElementById("totalMonthlyIncome").innerHTML = "$"+totalMonthlyIncome;
    document.getElementById("totalMonthlyExpenses").innerHTML = "$"+totalMonthlyExpenses;
    document.getElementById("totalMonthlySavings").innerHTML = "$"+(totalMonthlyIncome - totalMonthlyExpenses);
}

/**
 * income
 */
function addIncome(){
    var companyName = document.getElementById("companyName").value;
    var monthlyPostTaxIncome = document.getElementById("monthlyPostTaxIncome").value;

    console.log("companyName: "+companyName);
    console.log("monthlyPostTaxIncome: "+monthlyPostTaxIncome);

    monthlyPostTaxIncome = parseFloat(monthlyPostTaxIncome);

    incomeList.push({"companyName":companyName,"monthlyPostTaxIncome":monthlyPostTaxIncome});

    clearIncomeInput();

    displayReport();
}

function clearIncomeInput(){
    document.getElementById("companyName").value = "";
    document.getElementById("monthlyPostTaxIncome").value = "";
}

function removeIncome(index){
    incomeList.splice(index, 1);
    displayReport();
}

function calculateAndDisplayIncome(){

    var incomeContent = "";
    console.log("incomeList")
    console.log(incomeList)
    var total = 0
    if(incomeList.length>0){
       
        for (let index = 0; index < incomeList.length; index++) {
            var incomeRow = incomeList[index]
            console.log("incomeRow: "+incomeRow)
            total += parseFloat(incomeRow['monthlyPostTaxIncome'])
            incomeContent += `
                <div class="row incomeRow">
                    <div class="col-6">
                        `+incomeRow['companyName']+`
                    </div>
                    <div class="col-4">
                        $`+incomeRow['monthlyPostTaxIncome']+`
                    </div>
                    <div class="col-2">
                        <div class="d-grid gap-2">
                            <button class="btn btn-danger" onclick="removeIncome(`+index+`)" type="button">remove</button>
                        </div>
                    </div>
                </div>
            `
        }
    }

    totalMonthlyIncome = total

    console.log("incomeContent: "+incomeContent)

    document.getElementById("income").innerHTML = incomeContent
}

/**
 * expense
 */
 function addExpense(){
    var expenseName = document.getElementById("expenseName").value;
    var expenseCost = document.getElementById("expenseCost").value;

    console.log("expenseName: "+expenseName);
    console.log("expenseCost: "+expenseCost);

    expenseCost = parseFloat(expenseCost);

    expenseList.push({"name":expenseName,"cost":expenseCost});

    clearExpenseInput();

    displayReport();
}

function clearExpenseInput(){
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseCost").value = "";
}

function removeExpense(index){
    expenseList.splice(index, 1);
    displayReport();
}

function calculateAndDisplayExpenses(){

    var content = "";
    console.log("expenseList")
    console.log(expenseList)

    var total = 0

    if(expenseList.length>0){

        for (let index = 0; index < expenseList.length; index++) {
            var incomeRow = expenseList[index]
            console.log("incomeRow: "+incomeRow)
            total += parseFloat(incomeRow['cost'])
            content += `
                <div class="row incomeRow">
                    <div class="col-6">
                        `+incomeRow['name']+`
                    </div>
                    <div class="col-4">
                        $`+incomeRow['cost']+`
                    </div>
                    <div class="col-2">
                        <div class="d-grid gap-2">
                            <button class="btn btn-danger" onclick="removeExpense(`+index+`)" type="button">remove</button>
                        </div>
                    </div>
                </div>
            `
        }
    }
    totalMonthlyExpenses = total

    console.log("expenseContent: "+content)

    document.getElementById("expenses").innerHTML = content
}