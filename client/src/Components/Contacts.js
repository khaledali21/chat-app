import React, {useState} from "react" 
import Contact from "./Contact"
import axios from "axios"
function Contacts(props) {
    const [contacts, setContacts] = useState([]);
    axios.get("/api/contacts/"+props.user.id)
    .then(res=>{
        setContacts(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
    return(
        <div>
            {contacts.map((contact, index)=>{
               return <Contact key={index} contact={contact}/>
            })}
        </div>
    )
}

export default Contacts;
