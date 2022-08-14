import ArticleCard from "../../components/articlecard/articlecard.component";
import "./entdecken.styles.scss";
import WHeader from "../../components/header/header.component";
import WButton from "../../components/button/button.component";
import { useState } from "react";

const Entdecken = ({
  entdeckenProp,
  entdeckenCardsProp,
  setEntdeckenCardsProp,
}) => {
  const [cardIndexToChange, setCardIndexToChange] = useState(false);
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  const editCards = () => {
    const hideEditButton = document.querySelectorAll(".entdecken-editcards");
    for (const element of hideEditButton) {
      element.classList.add("hideelements");
    }

    const showLoginPanel = document.querySelectorAll(".entdecken-loginpanel");
    for (const element of showLoginPanel) {
      element.classList.remove("hideelements");
    }
  };

  const adminLogin = () => {
    if (
      document.getElementById("user-id").value === "firma" &&
      document.getElementById("user-password").value === "firma"
    ) {
      const showLoginPanel = document.querySelectorAll(".entdecken-loginpanel");
      for (const element of showLoginPanel) {
        element.classList.add("hideelements");
      }

      const showAdminPanel = document.querySelectorAll(".entdecken-adminpanel");
      for (const element of showAdminPanel) {
        element.classList.remove("hideelements");
      }

      setLoginSuccessful(true);

      document.getElementById("user-id").value = "";
      document.getElementById("user-password").value = "";
    } else {
      console.log("fehler");
    }
  };

  const cancelLogin = () => {
    const hideLoginPanel = document.querySelectorAll(".entdecken-loginpanel");
    for (const element of hideLoginPanel) {
      element.classList.add("hideelements");
    }

    const showEditButton = document.querySelectorAll(".entdecken-editcards");
    for (const element of showEditButton) {
      element.classList.remove("hideelements");
    }

    setLoginSuccessful(false);

    document.getElementById("user-id").value = "";
    document.getElementById("user-password").value = "";
  };

  const addCard = () => {
    if (
      !cardIndexToChange &&
      document.getElementById("add-image").value &&
      document.getElementById("add-title").value &&
      document.getElementById("add-text").value
    ) {
      for (let i = 0; i < entdeckenCardsProp.length; i++) {
        document
          .getElementsByClassName("articlecard")
          [i].classList.remove("articlecard-select");
      }

      const manipulatedCards = [...entdeckenCardsProp];

      manipulatedCards.push([
        document.getElementById("add-image").value,
        document.getElementById("add-title").value,
        document.getElementById("add-text").value,
      ]);

      setEntdeckenCardsProp(manipulatedCards);
      setCardIndexToChange(false);

      document.getElementById("add-image").value = "";
      document.getElementById("add-title").value = "";
      document.getElementById("add-text").value = "";

      localStorage.setItem(
        "entdeckenCardsLocal",
        JSON.stringify(manipulatedCards)
      );
    }
  };

  const changeCard = () => {
    if (cardIndexToChange || cardIndexToChange === 0) {
      for (let i = 0; i < entdeckenCardsProp.length; i++) {
        document
          .getElementsByClassName("articlecard")
          [i].classList.remove("articlecard-select");
      }

      const manipulatedCards = [...entdeckenCardsProp];

      manipulatedCards[cardIndexToChange][0] =
        document.getElementById("add-image").value;
      manipulatedCards[cardIndexToChange][1] =
        document.getElementById("add-title").value;
      manipulatedCards[cardIndexToChange][2] =
        document.getElementById("add-text").value;

      setEntdeckenCardsProp(manipulatedCards);
      setCardIndexToChange(false);

      document.getElementById("add-image").value = "";
      document.getElementById("add-title").value = "";
      document.getElementById("add-text").value = "";

      localStorage.setItem(
        "entdeckenCardsLocal",
        JSON.stringify(manipulatedCards)
      );
    }
  };

  const deleteCard = () => {
    if (cardIndexToChange || cardIndexToChange === 0) {
      for (let i = 0; i < entdeckenCardsProp.length; i++) {
        document
          .getElementsByClassName("articlecard")
          [i].classList.remove("articlecard-select");
      }

      const manipulatedCards = [...entdeckenCardsProp];

      manipulatedCards.splice(cardIndexToChange, 1);

      setEntdeckenCardsProp(manipulatedCards);
      setCardIndexToChange(false);

      document.getElementById("add-image").value = "";
      document.getElementById("add-title").value = "";
      document.getElementById("add-text").value = "";

      localStorage.setItem(
        "entdeckenCardsLocal",
        JSON.stringify(manipulatedCards)
      );
    }
  };

  const logoutButton = () => {
    const showEditButton = document.querySelectorAll(".entdecken-editcards");
    for (const element of showEditButton) {
      element.classList.remove("hideelements");
    }

    const showAdminPanel = document.querySelectorAll(".entdecken-adminpanel");
    for (const element of showAdminPanel) {
      element.classList.add("hideelements");
    }

    for (let i = 0; i < entdeckenCardsProp.length; i++) {
      document
        .getElementsByClassName("articlecard")
        [i].classList.remove("articlecard-select");
    }
    setLoginSuccessful(false);
    setCardIndexToChange(false);

    document.getElementById("add-image").value = "";
    document.getElementById("add-title").value = "";
    document.getElementById("add-text").value = "";
  };

  return (
    <div className="entdecken">
      <WHeader headerProps={entdeckenProp.header} />
      <h1 className="entdecken-title">{entdeckenProp.pagetitle}</h1>

      <div>
        <div className="entdecken-editcards">
          <WButton
            buttonFunction={editCards}
            buttonText={"KARTEN BEARBEITEN"}
          />
        </div>

        <div className="entdecken-loginpanel hideelements">
          <div className="entdecken-loginpanel-allinputs">
            <input
              id="user-id"
              type="text"
              placeholder="ID ist (symbolisch) firma."
            />
            <input
              id="user-password"
              type="password"
              placeholder="Passwort ist (symbolisch) firma."
            />
          </div>
          <div className="entdecken-loginpanel-allbuttons">
            <WButton buttonFunction={adminLogin} buttonText={"ANMELDEN"} />
            <WButton buttonFunction={cancelLogin} buttonText={"ABBRECHEN"} />
          </div>
        </div>

        <div className="entdecken-adminpanel hideelements">
          <h2 className="entdecken-adminpanel-description">
            Klicken Sie auf die Karte, die Sie löschen oder ändern möchten, oder
            fügen Sie eine neue hinzu.
          </h2>
          <div className="entdecken-adminpanel-allinputs">
            <input
              id="add-image"
              type="text"
              placeholder="Link des Kartenbildes (erforderlich)"
            />
            <input
              id="add-title"
              type="text"
              placeholder="Kartentitel (erforderlich)"
            />
            <input
              id="add-text"
              type="text"
              placeholder="Kartenbeschreibung (erforderlich)"
            />
            <div className="entdecken-adminpanel-allbuttons">
              <WButton buttonFunction={addCard} buttonText={"HINZUFÜGEN"} />
              <WButton buttonFunction={changeCard} buttonText={"ÄNDERN"} />
              <WButton buttonFunction={deleteCard} buttonText={"LÖSCHEN"} />
              <WButton buttonFunction={logoutButton} buttonText={"ABMELDEN"} />
            </div>
          </div>
        </div>
      </div>

      <ArticleCard
        className="entdecken-articlecard"
        articleCardProp={entdeckenCardsProp}
        setCardIndexToChangeProp={setCardIndexToChange}
        loginSuccessfulProp={loginSuccessful}
      />
    </div>
  );
};

export default Entdecken;
