export default function App() {
  const handleClick = async () => {
    const res = await fetch("http://localhost:3000/")
    const text = await res.text()
    alert(text)
  }
  return (
    <>
      <button onClick={handleClick}>say hello</button>
    </>
  )
}