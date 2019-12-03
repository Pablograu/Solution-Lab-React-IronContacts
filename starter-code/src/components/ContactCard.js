import React from "react";

export default function ContactCard(props) {

  const {contact: {name, pictureUrl, popularity}, index} = props

  return (
    <article className="contactCard">
      <h3>{name}</h3>
      <img src={pictureUrl} alt="contact img"/>
      <h4>Popularity: {popularity}</h4>
      <button className="btn" onClick={()=>props.delete(index)}>Delete</button>
    </article>
  );
}
