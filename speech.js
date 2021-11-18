const test = () => {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new window.SpeechRecognition();
  const btnElem = document.querySelector(".control");

  const onClick = () => {
    const isPausing = btnElem.classList.contains("record");

    if (isPausing) {
      recognition.start();
      btnElem.classList.remove("record");
      btnElem.classList.add("pause");
    } else {
      recognition.stop();
      btnElem.classList.remove("pause");
      btnElem.classList.add("record");
    }
  };

  const onResult = e => {
    const textElem = document.querySelector(".text");
    const { transcript } = e.results[0][0];
    textElem.innerHTML += transcript;
  };

  const onEnd = () => {
    const isRecording = btnElem.classList.contains("pause");
    if (isRecording) {
      recognition.start();
    }
  };

  function run() {
    recognition.lang = "th-TH";
    recognition.addEventListener("result", onResult);
    recognition.addEventListener("end", onEnd);
    btnElem.addEventListener("click", onClick);
  }
  run();
};

test();
