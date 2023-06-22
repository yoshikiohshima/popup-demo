// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "csmLights.js", "popup.js", "slides.js", "drawing.js", "updown.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                name:"world model",
                layers: ["walk"],
                type: "3d",
                behaviorModules: ["PopUpWindow"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                fileName: "/abandoned_parking_4k.jpg",
                dataType: "jpg",
            }
        },
        {
            card: {
                translation: [-2, 1, -4],
                scale: [2, 2, 2],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/CroquetLogo_RGB.jpg",
                behaviorModules: ["PopUpButton"],
                fullBright: true,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: {
                translation: [2, 1, -4],
                scale: [2, 2, 2],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/earthbase.png",
                behaviorModules: ["PopUpButton"],
                fullBright: true,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: {
                translation: [0, -1.8, -2],
                scale: [2, 2, 2],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/earthbase.png",
                behaviorModules: ["PopDownButton"],
                fullBright: true,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: {
                name: "drawing",
                type: "2d",
                textureType: "canvas",
                behaviorModules: ["DrawingCanvas"],
                textureWidth: 1024,
                textureHeight: 512,
                translation: [0, 0.5, -5],
                fullBright: true,
                backgroundImage: "./assets/images/chalkboard.jpg",
                drawingColor: "#ddd", // a CSS color
                width: 4,
                height: 2
            }
        },
        {
            card: {
                name: "flag pole 1",
                layers: ["pointer"],
                dataLocation: "./assets/3D/Flag_Pole.glb",
                dataScale: [1, 1, 1],
                dataTranslation: [5.1, -1.7, 8.8],
                translation: [5, 0, -5],
                fileName: "/Flag_Pole.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            },
            id: "pole1",
        },
        {
            card: {
                name: "flag 1",
                layers: ["pointer"],
                dataLocation: "./assets/3D/FlagsAnimation_001.glb",
                dataScale: [1, 1, 1],
                dataTranslation: [-5.3756659495382095, 0, -8.88322282668438],
                fileName: "/FlagsAnimation_001.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                parent: "pole1",
                pointA: [0, -4.5, 0],
                pointB: [0, -1.7, 0],
                behaviorModules: ["UpDown"],
            }
        },
        /*
        {
            card: {
                translation: [2, 1, -4],
                scale: [2, 2, 2],
                type: "object",
                slides: ["./assets/images/CroquetLogo_RGB.jpg", "./assets/images/earthbase.png"],
                behaviorModules: ["Slides"],
                fullBright: true,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        */
    ];
}
