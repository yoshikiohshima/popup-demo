class UpDownActor {
    setup() {
        this.subscribe(this.id, "updatePositionBy", "updatePositionBy");

        /*
        //uncomment here to test things in live programming
        this._cardData.pointA = [0, 2.4, 0];
        this._cardData.pointB = [0, -0.4, 0];
        this._cardData.duration = 1.6;
        */

        if (this._cardData.ratio === undefined) this._cardData.ratio = 0;
        if (this.nextDirection === undefined) this.nextDirection = "up";
        if (this.moving === undefined) this.moving = false;

        this.updatePositionBy(0);
        this.addEventListener("pointerDown", "trigger");
    }

    trigger() {
        if (this.moving) {
            this.moving = false;
            this.nextDirection = this.nextDirection === "up" ? "down" : "up";
            return;
        }
        this.moving = true;
        if (this.nextDirection === "up") {
            this.up();
        } else {
            this.down();
        }
    }

    up() {
        let duration = this._cardData.duration || 1.6;
        let steps = duration / 0.05;
        let by = 1 / steps;
        this.updatePositionBy(by);
        if (this.moving) {
            this.future(50).up();
        }
    }

    down() {
        let duration = this._cardData.duration || 1.6;
        let steps = duration / 0.05;
        let by = 1 / steps;
        this.updatePositionBy(-by);
        if (this.moving) {
            this.future(50).down();
        }
    }

    updatePositionBy(ratio) {
        this._cardData.ratio += ratio;
        this._cardData.ratio = Math.min(1, Math.max(0, this._cardData.ratio));
        if (this._cardData.ratio >= 1) {
            this._cardData.ratio = 1;
            this.moving = false;
            this.nextDirection = "down";
        } else if (this._cardData.ratio <= 0) {
            this._cardData.ratio = 0;
            this.moving = false;
            this.nextDirection = "up";
        }
        this.translateTo(Microverse.v3_lerp(this._cardData.pointA, this._cardData.pointB, this._cardData.ratio))
    }
}

class UpDownPawn {
    setup() {
        this.removeEventListener("pointerDoubleDown", "onPointerDoubleDown");
        this.addEventListener("pointerDoubleDown", "nop");
    }
}

export default {
    modules: [
        {
            name: "UpDown",
            actorBehaviors: [UpDownActor],
            pawnBehaviors: [UpDownPawn],
        },
    ]
}

/* globals Microverse */
