import Card from "./Card";

export default function Gallery({ name, data }) {

    console.log(data);

    const buildCard = () => {

        return data.map((item) => {

            return <Card key={item.id} item={item}></Card>
        })
    }

    return (

        <div >
            <h2> Nos {name}</h2>
            {data.length > 0 ? <div className="row">
                {buildCard()}
            </div> : <div>

            Aucun bouquet disponible
            </div>}

        </div>)
}