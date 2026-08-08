import { useState, useEffect } from "react";
import API from "../services/api";
import "./EmergencyContacts.css";

function EmergencyContacts() {

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    relationship: ""
  });

  const [editingId, setEditingId] = useState(null);

  const [contacts, setContacts] = useState([]);


  // Fetch contacts when component loads
  useEffect(() => {

    fetchContacts();

  }, []);


  // Handle input changes
  function handleChange(e) {

    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });

  }


  // Fetch all contacts
  async function fetchContacts() {

    try {

      const response = await API.get("/contacts");

      setContacts(response.data);

    }

    catch (error) {

      console.log("Failed to load contacts:", error);

    }

  }


  // Add / Update contact
  async function addContact(e) {

    e.preventDefault();


    // Basic validation
    if (
      !contact.name.trim() ||
      !contact.phone.trim() ||
      !contact.relationship.trim()
    ) {

      alert("Please fill all contact details.");

      return;

    }


    try {

      let response;


      // UPDATE
      if (editingId) {

        response = await API.put(
          `/contacts/${editingId}`,
          {
            name: contact.name,
            phone: contact.phone,
            relationship: contact.relationship
          }
        );

      }


      // ADD
      else {

        response = await API.post(
          "/contacts",
          {
            name: contact.name,
            phone: contact.phone,
            relationship: contact.relationship
          }
        );

      }


      alert(response.data.message);


      // Refresh contacts
      await fetchContacts();


      // Clear form
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


  // Edit contact
  function editContact(item) {

    setContact({
      name: item.name,
      phone: item.phone,
      relationship: item.relationship
    });

    setEditingId(item._id);

  }


  // Delete contact
  async function deleteContact(id) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );


    if (!confirmDelete) {

      return;

    }


    try {

      const response = await API.delete(
        `/contacts/${id}`
      );


      alert(response.data.message);


      await fetchContacts();

    }

    catch (error) {

      console.log(error);

      alert("Failed to Delete Contact");

    }

  }


  // Cancel editing
  function cancelEdit() {

    setContact({
      name: "",
      phone: "",
      relationship: ""
    });

    setEditingId(null);

  }


  return (

    <div>

      <h3>
        Emergency Contacts
      </h3>


      {/* Contact Form */}

      <form
        className="contacts-form"
        onSubmit={addContact}
      >


        {/* Name */}

        <input
          className="contacts-input"
          type="text"
          name="name"
          placeholder="Contact Name"
          value={contact.name}
          onChange={handleChange}
        />


        {/* Phone */}

        <input
          className="contacts-input"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={contact.phone}
          onChange={handleChange}
        />


        {/* Relationship */}

        <input
          className="contacts-input"
          type="text"
          name="relationship"
          placeholder="Relationship (e.g. Mother, Father)"
          value={contact.relationship}
          onChange={handleChange}
        />


        {/* Submit */}

        <button
          type="submit"
          className="btn btn-dark contact-btn"
        >

          {editingId
            ? "Update Contact"
            : "Add Contact"
          }

        </button>


        {/* Cancel Edit */}

        {editingId && (

          <button
            type="button"
            className="btn btn-secondary contact-btn"
            onClick={cancelEdit}
          >
            Cancel
          </button>

        )}

      </form>


      {/* Saved Contacts */}

      <h4 className="saved-title">
        Saved Contacts
      </h4>


      {contacts.length === 0 ? (

        <p>
          No emergency contacts added yet.
        </p>

      ) : (

        contacts.map((item) => (

          <div
            key={item._id}
            className="contact-card"
          >


            {/* Contact Name */}

            <div className="contact-name">

              👤 <strong>
                {item.name}
              </strong>

            </div>


            {/* Phone */}

            <div className="contact-info">

              📞 {item.phone}

            </div>


            {/* Relationship */}

            <div className="contact-info">

              🤝 {item.relationship}

            </div>


            {/* Buttons */}

            <div className="contact-actions">

              <button
                className="btn btn-warning btn-sm"
                onClick={() => editContact(item)}
              >
                Edit
              </button>


              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteContact(item._id)}
              >
                Delete
              </button>

            </div>


          </div>

        ))

      )}

    </div>

  );

}

export default EmergencyContacts;