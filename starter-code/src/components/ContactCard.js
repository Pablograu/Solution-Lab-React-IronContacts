import React from "react";

export default function ContactCard(props) {
  return (
    <article className="contactCard">
      <h3>{props.contact.name}</h3>
      <img src={props.contact.pictureUrl} alt="contact img"/>
      <h4>Popularity: {props.contact.popularity}</h4>
      <button className="btn" onClick={()=>props.delete(props.contact.id)}>Delete</button>
    </article>
  );
}
