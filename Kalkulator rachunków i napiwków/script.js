const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const countBtn = document.querySelector(".count");
const error = document.querySelector(".error");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

const showBill = () => {
	if (price.value === "" || people.value === "" || tip.value == 0) {
		error.textContent = "Uzupełnij wszytskie pola!";
		costInfo.style.display = "none";
	} else {
		error.textContent = "";
		countBill();
	}
};

const countBill = () => {
	const newPrice = parseFloat(price.value);
	const newPeople = parseInt(people.value);
	const newTip = parseFloat(tip.value);

	const total = (newPrice + newPrice * newTip) / newPeople;

	costInfo.style.display = "block";
	cost.textContent = total.toFixed(2);
};

countBtn.addEventListener("click", showBill);
