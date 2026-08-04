import { useState, useEffect } from "react";
import API from "../services/api";

function EmergencyContacts() {

  const [contact, setContact] = useState({
    
  name: "",
  phone: "",
  relationship: ""
});


  const [editingId, setEditingId] = useState(null);


  const [contacts, setContacts] = useState([]);
  useEffect(() => {

    fetchContacts();

}, []);



  function handleChange(e) {

    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });

  }

  async function fetchContacts() {

    try {

        const response = await API.get("/contacts");

        setContacts(response.data);

    }

    catch (error) {

        console.log(error);

    }

}
async function deleteContact(id) {

  try {

    const response = await API.delete(`/contacts/${id}`);

    alert(response.data.message);

    fetchContacts();

  } catch (error) {

    console.log(error);

    alert("Failed to Delete Contact");

  }

}


function editContact(item) {

  setContact({
    name: item.name,
    phone: item.phone,
    relationship: item.relationship
  });

  setEditingId(item._id);

}



  async function addContact(e) {

    e.preventDefault();

    try {

    let response;

    if (editingId) {

        response = await API.put(`/contacts/${editingId}`, {

            name: contact.name,
            phone: contact.phone,
            relationship: contact.relationship

        });

    }

    else {

        response = await API.post("/contacts", {

            name: contact.name,
            phone: contact.phone,
            relationship: contact.relationship

        });

    }

    alert(response.data.message);

    fetchContacts();

    setContact({
        name: "",
        phone: "",
        relationship: ""
    });

    setEditingId(null);

}

catch (error) {

    console.log(error);

    alert("Operation Failed");

}
}


  return (
    <div>

      <h3>
        Emergency Contacts
      </h3>


      <form onSubmit={addContact}>

        <input
          type="text"
          name="name"
          placeholder="Contact Name"
          value={contact.name}
          onChange={handleChange}
        />


        <br />


        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={contact.phone}
          onChange={handleChange}
        />


        <br />

<input
  type="text"
  name="relationship"
  placeholder="Relationship"
  value={contact.relationship}
  onChange={handleChange}
/>

<br />


        <button type="submit">
          {editingId ? "Update Contact" : "Add Contact"}
        </button>


      </form>



      <h4>
        Saved Contacts
      </h4>


      {contacts.map((item) => (
  <div key={item._id}>

    <p>
      {item.name} | {item.phone} | {item.relationship}
    </p>


    <button onClick={() => editContact(item)}>
      ✏️ Edit
    </button>

    <button onClick={() => deleteContact(item._id)}>
      🗑 Delete
    </button>

    <hr />

  </div>
))}

    </div>
  );
}
export default EmergencyContacts;