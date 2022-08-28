import Layout from '../components/Layout'
import '../styles/globals.scss'
import { ApolloProvider } from '@apollo/client'
import {client} from '../graphql/apolloClient'


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </ApolloProvider>
  )
}

export default MyApp
