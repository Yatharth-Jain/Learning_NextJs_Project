import Navbar from "../components/Navbar/Navbar";
import City from "../components/Cities heading/Cities";

export default function Home({events}) {
  return (
    <>
    <div class="grid grid-cols-1 gap-4 place-items-center mt-10 mb-10 sm:grid-cols-2 lg:grid-cols-3">
      {events.map(ev=><City link={"/events/"+ev.id } title={ev.title} body={ev.description} imgsrc={ev.image}/>)}
    </div>
    </>
  )
}

export async function getServerSideProps(){
  const {events_categories}=await import('./../data/data.json')
  return {
    props:{
      events:events_categories
    } 
  };
}