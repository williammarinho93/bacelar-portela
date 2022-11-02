import artur from './imagem/artur.png';
import Image from 'next/image';


export default function Home() {
  return (
    <div>
      <h1>ARTHUR GARCIA GASPAR</h1>
      <Image src={artur} alt="artur"/>
      
    </div>
  )
}
