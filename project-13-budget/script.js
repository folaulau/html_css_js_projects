
var incomeList = []

function addIncome(){
    var companyName = document.getElementById("companyName").value;
    var monthlyPostTaxIncome = document.getElementById("monthlyPostTaxIncome").value;

    console.log("companyName: "+companyName);
    console.log("monthlyPostTaxIncome: "+monthlyPostTaxIncome);

    monthlyPostTaxIncome = parseFloat(monthlyPostTaxIncome);

    incomeList.push({"companyName":companyName,"monthlyPostTaxIncome":monthlyPostTaxIncome});

    clearIncomeInput();

    displayIncome();
}

function addExpense(){
    var expenseName = document.getElementById("expenseName").value;
    var expenseCost = document.getElementById("expenseCost").value;

    console.log("companyName: "+companyName);
    console.log("expenseCost: "+expenseCost);

    expenseCost = parseFloat(expenseCost);

    incomeList.push({"expenseName":expenseName,"cost":expenseCost});

    clearIncomeInput();

    displayIncome();
}

function clearIncomeInput(){
    document.getElementById("companyName").value = "";
    document.getElementById("monthlyPostTaxIncome").value = "";
}

function clearExpenseInput(){
    document.getElementById("companyName").value = "";
    document.getElementById("monthlyPostTaxIncome").value = "";
}

function remove(index){
    incomeList.splice(index, 1);
    displayIncome();
}

function displayIncome(){

    var incomeContent = "";
    console.log("incomeList")
    console.log(incomeList)
    if(incomeList.length>0){
        var totalIncome = 0
        for (let index = 0; index < incomeList.length; index++) {
            var incomeRow = incomeList[index]
            console.log("incomeRow: "+incomeRow)
            totalIncome += parseFloat(incomeRow['monthlyPostTaxIncome'])
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
                            <button class="btn btn-danger" onclick="remove(`+index+`)" type="button">remove</button>
                        </div>
                    </div>
                </div>
            `
        }

        incomeContent += `
            <div class="row mt-3 p-2 incomeRow">
                <div class="col-6">
                    Total: $`+totalIncome+`
                </div>
            </div>
        `
    }

    console.log("incomeContent: "+incomeContent)

    document.getElementById("income").innerHTML = incomeContent
}