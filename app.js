let contacts = [];

function openForm() {
    document.getElementById("contact-form").style.display = "block";
}

function closeForm() {
    document.getElementById("contact-form").style.display = "none";
    clearForm();
}

function clearForm() {
    document.getElementById("form").reset();
}

function saveContact() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const contact = { name, email };
    contacts.push(contact);

    displayContacts();
    closeForm();
}

function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}

function displayContacts() {
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";

    contacts.forEach((contact, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${contact.name} - ${contact.email} <button onclick="deleteContact(${index})">Eliminar</button>`;
        contactList.appendChild(listItem);
    });
}
