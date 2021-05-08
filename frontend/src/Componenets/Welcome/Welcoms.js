export default function Welcome({setName, nameRequired, startHandler}) {
  return <>
    <h1>Welcome</h1>
    <input
      placeholder="Please enter your name"
      onChange={(e) => {setName(e.target.value)}}
      className={nameRequired && 'error'}
    />
    <button onClick={startHandler}>Start</button>
  </>
}
