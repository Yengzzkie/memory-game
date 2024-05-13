export default function resetScore({maxScore, setMaxScore}) {
    setMaxScore(0)
    localStorage.setItem("maxScore", maxScore)
  }