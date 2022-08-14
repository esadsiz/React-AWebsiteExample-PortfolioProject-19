# https://react-awebsiteexample-esadsiz.netlify.app

Alle Texte, Logos, Bilder und Schaltflächen, die man auf der Seiten sieht, werden von einem einzigen object namens "pagesObj" über props verteilt.
Ebenso wurde jede sich wiederholende Komponente wie Karten, Bilder, Nachrichten nur einmal geschrieben und mit Hilfe von loops repliziert.
Mit anderen Worten, wenn man der Seite beispielsweise eine neue Nachricht hinzufügen möchte, reicht es aus, den Inhalt der Nachricht im entsprechenden Abschnitt in "pagesObj" einzugeben.

Oder dies kann direkt auf der Seite erledigt werden, mit einem Panel, das ich in der Registerkarte "Entdecken" entwickelt habe. Damit kann man die Titel, Beschreibungen, Fotolinks der Karten ändern, die Karten löschen oder eine neue von Grund auf neu hinzufügen. Änderungen und Ergänzungen, die vorgenommen werden, werden "symbolisch" in localStorage gespeichert und gehen nicht verloren, auch wenn die Seite aktualisiert wird.

Darüber hinaus ist das Projekt auf unterschiedliche Bildschirmgrößen „responsive“. Also man kann die Seiten sogar mit einem 240-Pixel-Handy problemlos navigieren.

--- Auf der gesamten Website wurde keine Bedeutungsintegrität angestrebt. Fotos, Beschreibungen, Logos etc. können in keinem Zusammenhang zueinander stehen.
