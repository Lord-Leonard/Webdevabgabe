class Stoppuhr {

    lastUpdate = 0;
    
    constructor() {
        // Lokale Variablen mit den HTML-Elementen der Seite
        let buttonPlusOne = document.getElementById("button-plus-one");
        let buttonMinusOne = document.getElementById("button-minus-one");
        let buttonStartStop = document.getElementById("button-start-stop");
        let statusElement = document.getElementById("status");
        let counterElement = document.getElementById("counter");

        // Aktueller Zählerstand
        let counter = 0;
        let running = false;
    
        // Event Handler für den +1 Button
        buttonPlusOne.addEventListener("click", () => {
            counter++;
        });

        // Event Handler für den -1 Button
        buttonMinusOne.addEventListener("click", () => {
            if (counter > 0) {
                counter--;
            }
        });

        // Event Handler für den Start/Stop-Button
        buttonStartStop.addEventListener("click", () => {
            running = !running;
            if (running) lastUpdate = Date.now();
        });
    }

    // Funktion, die kontinuierlich die Anzeige aktualisiert
    // und jede Sekunde den Zähler runterzählt, wenn die Stoppuhr läuft
    updateDisplay () {
        // Jede Sekunde den Zähler runterzählen
        let now = Date.now();

        if (now - lastUpdate >= 1000) {
            lastUpdate = now;

            if (running && counter > 0) {
                counter--;
            } else {
                running = false;
            }
        }

        // Aktuellen Status der Stoppuhr anzeigen
        counterElement.textContent = counter;

        if (running) {
            statusElement.textContent = "Uhr läuft …";
        } else {
            statusElement.textContent = "Gestoppt";
        }

        // Sicherstellen, dass die Funktion kontinuierlich aufgerufen wird
        window.requestAnimationFrame(updateDisplay);
    };

    start () {
        window.requestAnimationFrame(this.updateDisplay);
    };
};

window.addEventListener("load", () => {
    let Stopuhr = new Stoppuhr();

    Stopuhr.start();
});