// target the form 
// taarget the button 

const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

// sample event data
let sampleEvent = [
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

//   create event card  
function createEventCard(eventData) {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
    <button class="delete-btn">X</button>
    <h3>${eventData.title}</h3>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.description}</p>
    `;

    return card;
}

// show empty state if there is no event 
function showEmptyState() {
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove();

    const emptyDiv = document.createElement("div");
    emptyDiv.className = "empty-state";
    emptyDiv.textContent = "No events to display";
    eventContainer.appendChild(emptyDiv);
}

// remove empty state
function removeEmptyState() {
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove();
}

// add an event to my events list 
function addEvent(eventData) {
    removeEmptyState();
    const card = createEventCard(eventData);
    eventContainer.appendChild(card);
}

// form submit 
eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);
    eventForm.reset();
});

// keyboard event
eventDescription.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();

        const eventData = {
            title: eventTitle.value,
            date: eventDate.value,
            category: eventCategory.value,
            description: eventDescription.value
        };

        addEvent(eventData);
        eventForm.reset();
    }
});

// clear all events 
clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = "";
    showEmptyState();
});

// add sampleEvent
addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(event => {
        addEvent(event);
    });
});

// delete individual event using X button
eventContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();

        if (eventContainer.children.length === 0) {
            showEmptyState();
        }
    }
});

// show empty state initially
showEmptyState();