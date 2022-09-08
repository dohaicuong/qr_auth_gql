import { useLazyLoadQuery, graphql } from 'react-relay'

const query = graphql`
  query AppQuery {
    me {
      id
      username
    }
  }
`

const App = () => {
  // const data = useLazyLoadQuery(
  //   query,
  //   {}
  // )

  return (
    <>
      App
    </>
  )
}
export default App
