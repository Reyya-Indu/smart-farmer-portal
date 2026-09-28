import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAIResponse, translations } from '../data/chatResponses.js'

const VoiceAssistant = ({ language = 'en', onResult }) => {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [isSupported, setIsSupported] = useState(true)
  const [volume, setVolume] = useState(0)
  const recognitionRef = useRef(null)
  const navigate = useNavigate()

  const langCode = language === 'te' ? 'te-IN' : 'en-IN'

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setIsSupported(false)
      return
    }

    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = true
    recognition.lang = langCode

    recognition.onstart = () => {
      setIsListening(true)
      setTranscript('')
    }

    recognition.onresult = (event) => {
      let finalTranscript = ''
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i]
        if (result.isFinal) {
          finalTranscript += result[0].transcript
        } else {
          interimTranscript += result[0].transcript
        }
      }

      setTranscript(finalTranscript || interimTranscript)

      if (finalTranscript) {
        handleVoiceCommand(finalTranscript)
      }
    }

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error)
      setIsListening(false)
      if (event.error === 'not-allowed') {
        alert('Microphone access denied. Please allow microphone access to use voice assistant.')
      }
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognitionRef.current = recognition

    return () => {
      recognition.abort()
    }
  }, [langCode])

  useEffect(() => {
    let audioContext
    let analyser
    let dataArray
    let animationId

    if (isListening) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        audioContext = new (window.AudioContext || window.webkitAudioContext)()
        analyser = audioContext.createAnalyser()
        const source = audioContext.createMediaStreamSource(stream)
        source.connect(analyser)
        analyser.fftSize = 256
        dataArray = new Uint8Array(analyser.frequencyBinCount)

        const updateVolume = () => {
          analyser.getByteFrequencyData(dataArray)
          const average = dataArray.reduce((a, b) => a + b, 0) / dataArray.length
          setVolume(Math.min(average / 128, 1))
          animationId = requestAnimationFrame(updateVolume)
        }
        updateVolume()
      }).catch((err) => {
        console.error('Microphone access error:', err)
      })
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (audioContext) audioContext.close()
    }
  }, [isListening])

  const handleVoiceCommand = useCallback((command) => {
    const lowerCmd = command.toLowerCase()

    // Navigation commands
    if (lowerCmd.includes('weather') || lowerCmd.includes('వాతావరణం')) {
      speak('Opening weather page')
      navigate('/weather')
      return
    }
    if (lowerCmd.includes('market') || lowerCmd.includes('price') || lowerCmd.includes('ధర')) {
      speak('Opening market prices page')
      navigate('/market-prices')
      return
    }
    if (lowerCmd.includes('crop') || lowerCmd.includes('పంట')) {
      speak('Opening crop information page')
      navigate('/crops')
      return
    }
    if (lowerCmd.includes('scheme') || lowerCmd.includes('పథకం')) {
      speak('Opening government schemes page')
      navigate('/government-schemes')
      return
    }
    if (lowerCmd.includes('dashboard') || lowerCmd.includes('డ్యాష్‌బోర్డ్')) {
      speak('Opening dashboard')
      navigate('/dashboard')
      return
    }
    if (lowerCmd.includes('home') || lowerCmd.includes('హోమ్')) {
      speak('Going to home page')
      navigate('/')
      return
    }

    // If not a navigation command, treat as AI query
    const response = getAIResponse(command, language)
    speak(response)
    if (onResult) {
      onResult(command, response)
    }
  }, [language, navigate, onResult])

  const startListening = () => {
    if (!recognitionRef.current) return
    try {
      recognitionRef.current.start()
    } catch (err) {
      console.error('Recognition start error:', err)
    }
  }

  const stopListening = () => {
    if (!recognitionRef.current) return
    recognitionRef.current.stop()
  }

  const speak = (text) => {
    if (!window.speechSynthesis) return

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = langCode
    utterance.rate = 0.9
    utterance.pitch = 1
    utterance.volume = 1

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }

  const toggleListening = () => {
    if (isListening) {
      stopListening()
    } else {
      startListening()
    }
  }

  if (!isSupported) {
    return (
      <div className="bg-gray-100 rounded-xl p-4 text-center text-gray-500 text-sm">
        <span className="text-2xl block mb-2">🎤</span>
        Voice assistant is not supported in this browser. Please use Chrome or Edge.
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-200 p-6">
      <div className="text-center">
        {/* Voice Visualizer */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          {/* Outer rings */}
          <div className={`absolute inset-0 rounded-full border-4 transition-all duration-300 ${
            isListening ? 'border-purple-400 animate-ping' : 'border-purple-200'
          }`}></div>
          <div className={`absolute inset-2 rounded-full border-4 transition-all duration-300 ${
            isListening ? 'border-purple-300 animate-pulse' : 'border-purple-100'
          }`}></div>

          {/* Volume indicator */}
          {isListening && (
            <div
              className="absolute inset-4 rounded-full bg-purple-200 transition-all duration-100"
              style={{ transform: `scale(${0.5 + volume * 0.5})`, opacity: 0.3 }}
            ></div>
          )}

          {/* Mic Button */}
          <button
            onClick={toggleListening}
            className={`absolute inset-6 rounded-full flex items-center justify-center text-3xl transition-all duration-300 shadow-lg ${
              isListening
                ? 'bg-red-500 hover:bg-red-600 scale-110'
                : isSpeaking
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-purple-600 hover:bg-purple-700 hover:scale-105'
            }`}
          >
            {isListening ? '⏹️' : isSpeaking ? '🔊' : '🎤'}
          </button>
        </div>

        {/* Status Text */}
        <div className="mb-4">
          {isListening ? (
            <p className="text-purple-700 font-semibold animate-pulse">
              {language === 'te' ? 'వింటున్నాను... మాట్లాడండి' : 'Listening... Speak now'}
            </p>
          ) : isSpeaking ? (
            <p className="text-green-600 font-semibold">
              {language === 'te' ? 'మాట్లాడుతున్నాను...' : 'Speaking...'}
            </p>
          ) : (
            <p className="text-gray-500">
              {language === 'te' ? 'మైక్ బటన్‌ను నొక్కి మాట్లాడండి' : 'Tap the mic to speak'}
            </p>
          )}
        </div>

        {/* Transcript */}
        {transcript && (
          <div className="bg-white rounded-xl p-4 mb-4 text-left">
            <p className="text-xs text-gray-500 mb-1">
              {language === 'te' ? 'మీ వాక్కు:' : 'You said:'}
            </p>
            <p className="text-gray-900 font-medium">{transcript}</p>
          </div>
        )}

        {/* Voice Commands Help */}
        <div className="text-left">
          <p className="text-xs text-gray-500 mb-2 font-medium">
            {language === 'te' ? 'వాయిస్ కమాండ్‌లు:' : 'Voice commands:'}
          </p>
          <div className="flex flex-wrap gap-2">
            {language === 'te' ? (
              <>
                <span className="px-2 py-1 bg-white rounded-full text-xs text-purple-700 border border-purple-200">"వాతావరణం"</span>
                <span className="px-2 py-1 bg-white rounded-full text-xs text-purple-700 border border-purple-200">"ధరలు"</span>
                <span className="px-2 py-1 bg-white rounded-full text-xs text-purple-700 border border-purple-200">"పంటలు"</span>
                <span className="px-2 py-1 bg-white rounded-full text-xs text-purple-700 border border-purple-200">"పథకాలు"</span>
                <span className="px-2 py-1 bg-white rounded-full text-xs text-purple-700 border border-purple-200">"డ్యాష్‌బోర్డ్"</span>
              </>
            ) : (
              <>
                <span className="px-2 py-1 bg-white rounded-full text-xs text-purple-700 border border-purple-200">"Weather"</span>
                <span className="px-2 py-1 bg-white rounded-full text-xs text-purple-700 border border-purple-200">"Market prices"</span>
                <span className="px-2 py-1 bg-white rounded-full text-xs text-purple-700 border border-purple-200">"Crops"</span>
                <span className="px-2 py-1 bg-white rounded-full text-xs text-purple-700 border border-purple-200">"Schemes"</span>
                <span className="px-2 py-1 bg-white rounded-full text-xs text-purple-700 border border-purple-200">"Dashboard"</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoiceAssistant
