document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  // Retrieve specific parameters
  const eventName = urlParams.get("event"); // "birthday"
  const cakeColor = urlParams.get("cakeColor"); // "#4d9ae8"
  const creamColor = urlParams.get("creamColor");
  const darker = urlParams.get("darker"); // "#e9abff"
  const age = urlParams.get("age"); // "5"

  // Update the cake colors
  const layers = document.querySelectorAll(".layer");
  layers.forEach((layer) => {
    layer.style.backgroundColor = creamColor; // Set cream color for each layer
    layer.style.boxShadow = `
                    0 2px 0px ${darker},
                    0 4px 0px ${cakeColor},
                    0 6px 0px ${cakeColor},
                    0 8px 0px ${cakeColor},
                    0 10px 0px ${cakeColor},
                    0 12px 0px ${cakeColor},
                    0 14px 0px ${cakeColor},
                    0 16px 0px ${cakeColor},
                    0 18px 0px ${cakeColor},
                    0 20px 0px ${cakeColor},
                    0 22px 0px ${cakeColor},
                    0 24px 0px ${cakeColor},
                    0 26px 0px ${cakeColor},
                    0 28px 0px ${cakeColor},
                    0 30px 0px ${cakeColor}
                `;
  });

  // Optionally display the event name
  const nameDisplay = document.getElementById("nameDisplay");
  if (nameDisplay) {
    nameDisplay.textContent = "Happy " + eventName + "!" || "Someone"; // Fallback if eventName is null
  }
  const yearsDisplay = document.getElementById("yearsDisplay");
  if (yearsDisplay) {
    if (eventName == "birthday") {
      yearsDisplay.textContent = "You are now " + age + " years!" || "Someone"; // Fallback if eventName is null
    } else if (eventName == "anniversary") {
      yearsDisplay.textContent =
        "We have been together for " + age + " years now!" || "Someone"; // Fallback if eventName is null
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const cake = document.querySelector(".cake");
  const candleCountDisplay = document.getElementById("candleCount");
  let candles = [];
  let audioContext;
  let analyser;
  let microphone;
  let audio = new Audio("hbd.mp3");

  function updateCandleCount() {
    const activeCandles = candles.filter(
      (candle) => !candle.classList.contains("out")
    ).length;
    candleCountDisplay.textContent = activeCandles;
  }

  function addCandle(left, top) {
    const candle = document.createElement("div");
    candle.className = "candle";
    candle.style.left = left + "px";
    candle.style.top = top + "px";

    const flame = document.createElement("div");
    flame.className = "flame";
    candle.appendChild(flame);

    cake.appendChild(candle);
    candles.push(candle);
    updateCandleCount();
  }

  cake.addEventListener("click", function (event) {
    const rect = cake.getBoundingClientRect();
    const left = event.clientX - rect.left;
    const top = event.clientY - rect.top;
    addCandle(left, top);
  });

  function isBlowing() {
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    let sum = 0;
    for (let i = 0; i < bufferLength; i++) {
      sum += dataArray[i];
    }
    let average = sum / bufferLength;

    return average > 35; //ETO CHANGEEEEEE
  }

  function blowOutCandles() {
    let blownOut = 0;

    // Only check for blowing if there are candles and at least one is not blown out
    if (
      candles.length > 0 &&
      candles.some((candle) => !candle.classList.contains("out"))
    ) {
      if (isBlowing()) {
        candles.forEach((candle) => {
          if (!candle.classList.contains("out") && Math.random() > 0.5) {
            candle.classList.add("out");
            blownOut++;
          }
        });
      }

      if (blownOut > 0) {
        updateCandleCount();
      }

      // If all candles are blown out, trigger confetti after a small delay
      if (candles.every((candle) => candle.classList.contains("out"))) {
        setTimeout(function () {
          triggerConfetti();
          endlessConfetti(); // Start the endless confetti
        }, 200);
        audio.play();
      }
    }
  }

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.fftSize = 256;
        setInterval(blowOutCandles, 200);
      })
      .catch(function (err) {
        console.log("Unable to access microphone: " + err);
      });
  } else {
    console.log("getUserMedia not supported on your browser!");
  }
});

function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

function endlessConfetti() {
  setInterval(function () {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0 },
    });
  }, 1000);
}
