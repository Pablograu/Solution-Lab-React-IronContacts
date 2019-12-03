import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
    popuSorted: false,
    alphabetSorted: false
  };

  getRandomContact = () => {
    let random;
    let inList = true;

    while(inList){
      random = contacts[Math.floor(Math.random() * contacts.length)];
      inList = false;
      this.state.contacts.forEach(e => {
        if(e.name === random.name) {
          inList = true;
        }
      });
      
    }
    this.setState({
      contacts: [random, ...this.state.contacts]
    })
  }

  handlePopularitySort = () => {
    const sortedArr = this.state.contacts.sort((a, b) => {
      if (this.state.popuSorted) {
        return a.popularity - b.popularity;
      } else {
        return b.popularity - a.popularity;
      }
    });
    this.setState(() => {
      return { contacts: sortedArr, popuSorted: !this.state.popuSorted };
    });
  };

  handleAlphabetSort = () => {
    console.log('alphaa');
    const sortedArr = this.state.contacts.sort((a, b) => {
      if (this.state.alphabetSorted) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    this.setState({
      contacts: sortedArr,
      alphabetSorted: !this.state.alphabetSorted
    });
  };

  handleDelete = (key) => {
    let sortedList = [...this.state.contacts];
    sortedList.splice(key, 1)
    console.log('deleted', key, sortedList);
    this.setState({
      contacts: sortedList
    })
  }

  render() {
    const allContacts = this.state.contacts.map((contact, index)=> {
      return <ContactCard index={index} key={contact.id} contact={contact} delete={this.handleDelete}/>;
    });

    return (
      <div>
        <Header />
        <div className="allContacts">
          <button onClick={this.getRandomContact} className="random-btn">
            RANDOM CONTACT
          </button>
          <button onClick={this.handlePopularitySort} className="random-btn">
            SORT BY POPULARITY
          </button>
          <button onClick={this.handleAlphabetSort} className="random-btn">
            SORT BY NAME
          </button>
          {allContacts}
        </div>
      </div>
    );
  }
}

export default App;
