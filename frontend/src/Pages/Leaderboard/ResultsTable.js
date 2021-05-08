export default function ResultsTable({results}) {
  return <table>
    <thead>
      <tr>
        <td>Name</td>
        <td>Moves number</td>
        <td>Amount of time</td>
      </tr>
    </thead>

    <tbody>
      {results.map(({name, movesNumber, duration}, key) => <tr key={key}>
          <td>{name}</td>
          <td>{movesNumber}</td>
          <td>{duration}</td>
        </tr>
      )}
    </tbody>

  </table>
}
