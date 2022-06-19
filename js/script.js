var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");

// default value for the Subscription drop-down list
var subType = "basic";

// default value for the Duration drop-down list
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  // console.log(subType);

  // every time the subscription drop-down list changes, the updateSubscriptionDiv() function will be called
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  // console.log(subDuration);
  updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
  // monthlyCost variable's value is the basic subscription monthly cost (selected by default)
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}`;
};
