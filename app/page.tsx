import CatImg from '@/assets/cat.png'
import { Image } from '@/components/Image'

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <Image
        src={CatImg}
        alt="cat"
        priority
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora cumque accusamus. Tempora, dolores quia quidem repudiandae doloribus minima rem officiis nihil consectetur nisi illum similique impedit at nemo ipsum?</p>
    </>
  );
}
