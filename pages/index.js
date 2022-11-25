import Imagem1 from './imagem/Imagem1.jpg';
import Imagem2 from './imagem/Imagem2.jpg';
import Image from 'next/image';


export default function Home() {
  return (
    <div>
      
      
      <Image src={Imagem1} alt="Imagem1"/>
      <Image src={Imagem2} alt="Imagem2"/>
      
    </div>
  )
}
