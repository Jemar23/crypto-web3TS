
const slug = 'doodles-official';

export async function getStaticProps() {
    const options = {
        method: 'GET',
        headers: {Accept: 'application/json', 'X-API_KEY': process.env.API_KEY}
    }

    const res = await fetch('https://api.opensea.io/api/v1/collection/doodles-official')
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

function Collection({ data }) {
    console.log(data)
    return(
        <div className="bg-slate-500 h-screen">
            yo    
        </div>
    )
}

export default Collection;