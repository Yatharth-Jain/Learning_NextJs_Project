import City from '../../../components/Cities heading/Cities'
export default function city({events}) {

  return (
    <>
    <div class="grid grid-cols-1 gap-4 place-items-center mt-10 mb-10 sm:grid-cols-2 lg:grid-cols-3">
      {events.map(ev=><City title={ev.title} key={ev.id} link={`./${ev.city}/${ev.id}`} body={ev.description} imgsrc={ev.image} />)}
    </div>
    </>
  )
}

export async function getStaticPaths(){
  const {events_categories}=await import('../../../data/data.json')
  const allPaths = events_categories.map((ev)=>{
    return {
        params:{
          city:ev.id.toString(),
        }
      }
    } 
  )
  return{
    paths:allPaths,
    fallback:false,
  };
}

export async function getStaticProps(context){
  const {allEvents}=await import('../../../data/data.json')
  const id=context?.params.city
  const events=allEvents.filter(ev => id===ev.city);
  return {
    props:{events}
  };
}
