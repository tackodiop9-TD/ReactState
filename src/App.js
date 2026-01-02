import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Personne extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        fulName: "Ibrahima Mbaye",
        bio: "Joueur Paris SG , Nationalité Sénégalaise , poste attaquant",
        img: "https://www.onzedafrik.com/wp-content/uploads/2025/11/mbaye-810x580.webp",
        profession: "Joueur",
      },
      show: true,
    };
  }

  handleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        {this.state.show ? (
          <div>
            <img src={this.state.person.img} alt={this.state.person.fulName} />
            <h1>Nom: {this.state.person.fulName}</h1>
            <h1>Biographie: {this.state.person.bio}</h1>
            <h1>Profession: {this.state.person.profession}</h1>
          </div>
        ) : (
          <div>
            <h1>Composant caché</h1>
          </div>
        )}
        <div>
          <Button onClick={this.handleShow} variant="success">
            Click me
          </Button>
        </div>
      </>
    );
  }
}

export default Personne;