import Link from "next/link"

export default function City(props) {
  return (
    // <div>
    //   <Link href={props.link} className="text-xl font-bold">
    //     <div className='max-h-[300px] w-[30%] overflow-hidden flex justify-center items-center'>
    //       <img src={props.imgsrc} className='object-fill' alt="" />
    //     </div>
    //     <h3>{props.title}</h3>
    //   </Link>
    //   <p>{props.body}</p>
    // </div>
     <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <Link href={props.link} >
      <img class="w-full" src={props.imgsrc} alt={props.title}/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.title}</div>
        <p class="text-gray-700 text-base">
          {props.body}
        </p>
      </div>
      </Link>
    </div>
  )
}
