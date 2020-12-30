import {commerce} from '../../lib/commerce';

export  default  function Products({info} :any) : JSX.Element {
    console.log(info)
    return (
        <div>
            PROD
        </div>
    )

}
Products.getInitialProps = () => {
    // Fetch data from external API
      const res =    commerce.products.list().then(( prod:any ) => {return prod})
    console.log(`{$res} dupa`)
    // const data = await res.json();
    // Pass data to the page via props
    return {
        props: {
            info: 1
    }
    }
}

console.log(getServerSideProps())