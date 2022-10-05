const name = window.location.href.split("name=")[1];
const root = document.getElementById("root");
console.log(window.location)
if (!name) {
    root.innerHTML = `<div class="form">
    <input type="text" id="name">
    <button id="wishButton">Wish!</button> 
    </div>`;

    document.getElementById("wishButton").onclick = () => {
        const name = document.getElementById('name')?.value;

        if (!name) return alert('Fill the name first!');

        const newUrl = window.location.origin + `?name=${name}`;

        navigator.clipboard.writeText(newUrl);

        alert(`Birthday Wish URL Copied!\nUrl: ${newUrl}`)

        window.location.href = newUrl;
    }
} else {
    root.innerHTML = `
    <h1> Happy Birthday ${name}!</h1>
    <img src="cake.png" id="cake">
`;

    const cake = document.getElementById("cake");

    cake.setAttribute("width", 2627/8);
    cake.setAttribute("height", 2846/8);
}