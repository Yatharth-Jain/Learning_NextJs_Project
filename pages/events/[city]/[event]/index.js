import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function event({data}) {
  const inputEmail=useRef(null);
  const {query} =useRouter();
  const onSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch('/api/email-registration',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:inputEmail.current.value,eventId:query.event})
      });
      const data= await response.json();

      console.log(data);
    }catch(e){
      console.log('ERROR',e);
    }
  };
  return (
    <>
    <div class="flex flex-wrap justify-between items-center mb-12 m-16">
      <div class="w-full md:w-2/3 mb-6 md:mb-0">
        <h2 class="text-3xl font-bold leading-tight mb-3">{data.title}</h2>
        <p class="text-gray-700">{data.description}</p>
      </div>
      <div class="w-full md:w-1/3">
        <img class="w-full rounded-lg shadow-lg" src={data.image} alt="Blog image"/>
      </div>
    </div>

    <form onSubmit={onSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input ref={inputEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
      </div>
      <div className="mb-6">
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign Up
        </button>
      </div>
    </form>

    </>
  )
}

export async function getStaticPaths(){
  const {allEvents} = await import('../../../../data/data.json');
  const allPaths = allEvents.map(ev=>{
    return{
      params:{
        city:ev.city,
        event:ev.id
      }
    }
  })
  return{
    paths:allPaths,
    fallback:false
  };
}


export async function getStaticProps(context){
  const {allEvents} = await import('../../../../data/data.json');
  const data= allEvents.find(ev => context?.params.event===ev.id)
  return {
    props:{data}
  };
}