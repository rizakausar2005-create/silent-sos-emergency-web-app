import { useState } from "react";


function EmergencyContacts() {

  const [contact, setContact] = useState({
    name: "",
    phone: ""
  });


  const [contacts, setContacts] = useState([]);



  function handleChange(e) {

    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });

  }



  function addContact(e) {

    e.preventDefault();


    setContacts([
      ...contacts,
      contact
    ]);


    setContact({
      name: "",
      phone: ""
    });

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


        <button type="submit">
          Add Contact
        </button>


      </form>



      <h4>
        Saved Contacts
      </h4>


      {
        contacts.map((item,index)=>(
          <p key={index}>
            {item.name} - {item.phone}
          </p>
        ))
      }


    </div>
  );
}
export default EmergencyContacts;