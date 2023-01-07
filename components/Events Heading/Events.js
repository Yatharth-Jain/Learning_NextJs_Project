import Link from "next/link"

export default function Events({link,title,body,imgsrc,key}) {
  return (
    <div>
        <Link href={link} key={key}>
            <img src={imgsrc} className='w-20 h-20' alt="Sorry"/>
            <h3>{title}</h3>
        </Link>
        <p>{body}</p>

    </div>
  )
}
