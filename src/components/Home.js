import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function Home() {
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="h-full w-full">
      <div className="w-full p-3  text-center">
        <div className="text-xl font-bold mb-3">Learn Words</div>
        <hr className="text-black" />
      </div>

      <div className="flex w-full">
        <div className="w-1/2 flex items-center justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Ysm33vaCU6Q"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-1/2">
          <div className="text-opacity-50	 text-sm">
            You can start the dictation by clicking the green 'Start Listening'
            button below. To stop the dictation, you can click the red "Stop
            Listening" button below. Also, note that after starting listening if
            you pause for too long, the listener stops on its own
          </div>
          <br />
          <div>PLACE:</div>

          <div>A particular position, point, or area in space,a location.</div>
          <br />
          <div>it is spelled as : PLACE</div>
          <br />
          <div>Try to spell it:</div>

          <form method="post">
            <input
              value={transcript || ""}
              placeholder="Outlined"
              className="border-2 p-3 rounded-md"
              type="text"
              readOnly
            />
          </form>
          <div className="w-1/2 p-4 flex items-center justify-around">
            <button
              onClick={() => {
                SpeechRecognition.startListening({ continuous: true });
              }}
              className="p-2 text-sm bg-green-500 rounded-md"
            >
              Start Listening
            </button>
            <button
              onClick={SpeechRecognition.stopListening}
              className="p-2 text-sm bg-red-500 rounded-md"
            >
              Stop Listening
            </button>
          </div>
        </div>
      </div>

      <div className="m-auto flex items-center justify-center w-full"></div>
    </div>
  );
}
