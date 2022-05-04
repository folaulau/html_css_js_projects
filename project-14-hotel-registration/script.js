
/**
 * default settings
 */
 displayNoAlerts()

 /**
  * 20% off with coupon
  */
 var coupons = ["1a","2b","3c"]

 var adultCostPerDay = 5
 var kidCostPerDay = 1

function checkPrice(){
    console.log("register")

    var fullName = document.getElementById("fullName").value;
    if(fullName==null || fullName.length==0){
        displayErrorAlert("Name is required")
        return
    }

    var email = document.getElementById("email").value;
    if(email==null || email.length==0){
        displayErrorAlert("Email is required")
        return
    }
    if(!email.includes("@")){
        displayErrorAlert("Email format is invalid. It must have @")
        return
    }

    var arrivalDate = document.getElementById("arrivalDate").value;

    console.log("arrivalDate ", arrivalDate)

    if(arrivalDate==null || arrivalDate.length==0){
        displayErrorAlert("Arrival Date is invalid")
        return
    }

    arrivalDate = new Date(arrivalDate)

    console.log("arrivalDate ", arrivalDate)

    var departureDate = document.getElementById("departureDate").value;

    console.log("departureDate ", departureDate)

    if(departureDate==null || departureDate.length==0){
        displayErrorAlert("Departure Date is invalid")
        return
    }

    departureDate = new Date(departureDate)

    console.log("departureDate ", departureDate)

    var numOfAdults = document.getElementById("numOfAdults").value;

    console.log("numOfAdults ", numOfAdults)

    if(numOfAdults==null || numOfAdults.length==0 || parseInt(numOfAdults) <= 0 ){
        displayErrorAlert("Number of Adults is invalid")
        return
    }

    var numOfKids = document.getElementById("numOfKids").value;

    console.log("numOfKids ", numOfKids)

    var coupon = document.getElementById("coupon").value;

    console.log("coupon ", coupon)

    var couponRate = 1

    if(coupons.includes(coupon)){
        couponRate =  (couponRate - .2)
    }

    var numOfDaysToStayInHotel = (departureDate.getTime() - arrivalDate.getTime()) / (1000 * 3600 * 24);

    console.log("numOfDaysToStayInHotel ", numOfDaysToStayInHotel)

    var totalCost = (adultCostPerDay * numOfAdults * numOfDaysToStayInHotel) +
    (kidCostPerDay * numOfKids * numOfDaysToStayInHotel)

    var totalCostWithCoupon = ((adultCostPerDay * numOfAdults * numOfDaysToStayInHotel) +
    (kidCostPerDay * numOfKids * numOfDaysToStayInHotel)) * couponRate

    var message = "Your total cost: $"+((couponRate!=1) ? totalCostWithCoupon: totalCost)+"<br/>"
    message += "Adults: "+numOfAdults+"<br/>"
    message += "Kids: "+numOfKids+"<br/>"
    message += "Length of stay(days): "+numOfDaysToStayInHotel+"<br/>"

    if(couponRate!=1){
        message += "Coupon discount: $"+(totalCost-totalCostWithCoupon)+"<br/>"
    }

    displaySuccessAlert(message)
    
}

function displayErrorAlert(errorMsg){
    console.log("displayError, ", errorMsg)
    document.getElementById("errorMessageAlert").innerHTML = errorMsg;

    document.getElementById("errorMessageAlert").style.display = "block";
    document.getElementById("successMessageAlert").style.display = "none";
}

function displaySuccessAlert(msg){
    console.log("displaySuccessAlert, ", msg)
    document.getElementById("successMessageAlert").innerHTML = msg;

    document.getElementById("errorMessageAlert").style.display = "none";
    document.getElementById("successMessageAlert").style.display = "block";
}

function displayNoAlerts(){
    document.getElementById("errorMessageAlert").style.display = "none";
    document.getElementById("successMessageAlert").style.display = "none";
}