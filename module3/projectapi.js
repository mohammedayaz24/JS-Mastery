const userGrid = document.getElementById("userGrid");
const refreshBtn = document.getElementById("refreshBtn");

function clearUsers() {
    while (userGrid.firstChild) {
        userGrid.removeChild(userGrid.firstChild);
    }
}

function showMessage(text, classes) {
    const message = document.createElement("p");
    message.className = classes;
    message.textContent = text;
    userGrid.appendChild(message);
}

function loadUsers() {
    if (!userGrid) return;

    clearUsers();
    showMessage("Loading users...", "text-gray-200 text-center col-span-full");

    fetch("https://randomuser.me/api/?results=12")
        .then((raw) => raw.json())
        .then((data) => {
            clearUsers();

            data.results.forEach(function(user) {
                const card = document.createElement("div");
                card.className = "bg-gray-800 rounded-lg shadow-lg p-4";

                const flex = document.createElement("div");
                flex.className = "flex items-center space-x-4";

                const img = document.createElement("img");
                img.src = user.picture.large;
                img.alt = `${user.name.first} ${user.name.last}`;
                img.className = "w-24 h-24 rounded-md border-4 border-blue-500 object-cover";

                const content = document.createElement("div");
                content.className = "flex-1";

                const name = document.createElement("h2");
                name.className = "text-2xl font-bold text-white";
                name.textContent = `${user.name.first} ${user.name.last}`;

                const email = document.createElement("p");
                email.className = "text-gray-300";
                email.textContent = user.email;

                const phone = document.createElement("p");
                phone.className = "text-gray-300 mt-2 hidden";
                phone.textContent = `Phone: ${user.phone}`;

                const buttonContainer = document.createElement("div");
                buttonContainer.className = "mt-4 flex gap-3 flex-wrap";

                const activeButton = document.createElement("button");
                activeButton.className =
                    "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200";
                activeButton.textContent = "Active";

                const phoneButton = document.createElement("button");
                phoneButton.className =
                    "bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200";
                phoneButton.textContent = "Show Phone";
                phoneButton.addEventListener("click", () => {
                    phone.classList.toggle("hidden");
                    phoneButton.textContent = phone.classList.contains("hidden") ? "Show Phone" : "Hide Phone";
                });

                buttonContainer.appendChild(activeButton);
                buttonContainer.appendChild(phoneButton);
                content.appendChild(name);
                content.appendChild(email);
                content.appendChild(phone);
                content.appendChild(buttonContainer);
                flex.appendChild(img);
                flex.appendChild(content);
                card.appendChild(flex);

                userGrid.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error loading users:", error);
            clearUsers();
            showMessage("Failed to load users. Please try again later.", "text-red-400 text-center col-span-full");
        });
}

if (refreshBtn) {
    refreshBtn.addEventListener("click", loadUsers);
}

loadUsers();