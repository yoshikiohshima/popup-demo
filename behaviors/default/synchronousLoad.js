class SynchronousCardLoaderPawn {
    setup() {
        this.subscribe(this.sessionId, "synchronousLoadCardsStarted", "synchronousLoadCardsStarted");
        this.subscribe(this.sessionId, "allSynchronousCardsLoaded", "allSynchronousCardsLoaded");

        let viewRoot = Microverse.getViewRoot();
        if (viewRoot.notLoadedSynchronousCards) {
            this.publish(this.sessionId, "synchronousLoadCardsStarted");
        }
    }

    synchronousLoadCardsStarted() {
        console.log("synchronousLoadCardsStarted");
        /*
        let initialCoverDiv = document.createElement("div");
        initialCoverDiv.id = "croquet_spinnerOverlay";
        initialCoverDiv.style.position = "fixed";
        initialCoverDiv.style.width = "100%";
        initialCoverDiv.style.height = "100%";
        initialCoverDiv.style.zIndex = 2000;
        initialCoverDiv.style.backgroundColor = "#000000";
        initialCoverDiv.style.opacity = "0.95";
        window.initialCoverDiv = initialCoverDiv;

        */

        let initialCoverDiv = document.createElement("div");
        document.body.appendChild(initialCoverDiv);
        initialCoverDiv.id = "initial-div";
        initialCoverDiv.style.position = "fixed";
        initialCoverDiv.style.width = "100%";
        initialCoverDiv.style.height = "100%";
        initialCoverDiv.style.zIndex = 2000;
        initialCoverDiv.style.backgroundColor = "#000000";
        initialCoverDiv.style.opacity = "0.95";
        initialCoverDiv.style.display = "flex";
        initialCoverDiv.style.alignItems = "center";
        initialCoverDiv.style.justifyContent = "center";

        let img = document.createElement("img");

        img.src = "./assets/images/CroquetLogo_RGB.jpg";
        img.style.width = "50%";
        img.style.height = "auto";
        initialCoverDiv.appendChild(img);
        window.initialCoverDiv = initialCoverDiv;

        // this.spinner = document.createElement("div");
        // this.spinner.id = "croquet_loader";
        // this.spinner.innerText = "Catching up...";
        // initialCoverDiv.appendChild(this.spinner);
        Microverse.sendToShell("hud", {joystick: false, fullscreen: false});
    }

    allSynchronousCardsLoaded() {
        console.log("allSynchronousCardsLoaded");
        if (window.initialCoverDiv) {
            window.initialCoverDiv.style.transition = "opacity 1s";
            window.initialCoverDiv.style.opacity = 0;
            if (this.spinner) {
                this.spinner.remove();
                delete this.spinner;
            }
            window.setTimeout(() => {
                if (window.initialCoverDiv) {
                    window.initialCoverDiv.remove();
                    delete window.initialCoverDiv;
                }
            }, 1000);
        }
        Microverse.sendToShell("hud", {joystick: true, fullscreen: true});
        let setButtons = (display) => {
            ["homeBtn", "worldMenuBtn"].forEach((n) => {
                let btn = document.querySelector("#" + n);
                if (btn) {
                    btn.style.display = display;
                }
            });
        };
        setButtons("flex");
    }
}

export default {
    modules: [
        {
            name: "SynchronousCardLoader",
            pawnBehaviors: [SynchronousCardLoaderPawn]
        }
    ]
}

/* globals Microverse */
