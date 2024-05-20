//your JS code here. If required.
let btn = document.getElementById("btn")
btn.addEventListener("click", async () => {
	let text = document.getElementById("text").value
	let delayInput = parseInt(document.getElementById("delay").value)
	let output = document.getElementById("output")
	await new Promise(resolve => setTimeout(resolve, delayInput))
	output.innerHTML = text
})