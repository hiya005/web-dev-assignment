let form = document.querySelector("#eventForm");
let titleInput = document.querySelector("#eventTitle");
let dateInput = document.querySelector("#eventDate");
let categoryInput = document.querySelector("#eventCategory");
let descInput = document.querySelector("#eventDescription");

let clearBtn = document.querySelector("#clearAllBtn");
let sampleBtn = document.querySelector("#addSampleBtn");
let container = document.querySelector("#eventContainer");

let demoEvents = [
    {
        title: "Web development",
        date: "02-11-2026",
        category: "workshop",
        description: "a workshop related to web development"
    },
    {
        title: "Web dev2",
        date: "5-12-2026",
        category: "conference",
        description: "conference related to web development"
    }
];

function makeCard(data) {

    let card = document.createElement("div");
    card.classList.add("event-card");

    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.classList.add("delete-btn");

    let heading = document.createElement("h3");
    heading.innerText = data.title;

    let date = document.createElement("div");
    date.innerText = data.date;

    let category = document.createElement("span");
    category.innerText = data.category;

    let para = document.createElement("p");
    para.innerText = data.description;

    card.appendChild(delBtn);
    card.appendChild(heading);
    card.appendChild(date);
    card.appendChild(category);
    card.appendChild(para);

    return card;
}

function showMessage() {
    if (container.children.length === 0) {
        let msg = document.createElement("div");
        msg.className = "empty-state";
        msg.innerText = "No events to display";
        container.appendChild(msg);
    }
}

function removeMessage() {
    let msg = container.querySelector(".empty-state");
    if (msg) {
        msg.remove();
    }
}

function addNewEvent(obj) {
    removeMessage();
    let newCard = makeCard(obj);
    container.appendChild(newCard);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let obj = {
        title: titleInput.value,
        date: dateInput.value,
        category: categoryInput.value,
        description: descInput.value
    };

    addNewEvent(obj);
    form.reset();
});

descInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        form.dispatchEvent(new Event("submit"));
    }
});

clearBtn.addEventListener("click", function () {
    container.innerHTML = "";
    showMessage();
});

sampleBtn.addEventListener("click", function () {
    demoEvents.forEach(function (item) {
        addNewEvent(item);
    });
});

container.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        showMessage();
    }
});

showMessage();