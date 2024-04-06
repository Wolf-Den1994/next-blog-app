import CatImg from '@/assets/cat.png'
import { Image } from '@/components/Image'
import { getPhotos } from '@/services/jsonplaceholder';

export default async function Home() {
  const photos = await getPhotos()

  return (
    <>
      <h1>Welcome</h1>
      <Image
        src={CatImg}
        alt="cat"
        priority
        placeholder="blur"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
        quality={80}
      />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora cumque accusamus. Tempora, dolores quia quidem repudiandae doloribus minima rem officiis nihil consectetur nisi illum similique impedit at nemo ipsum?</p>
      {photos.map((photo) => (
        <Image
          key={photo.id}
          src={photo.url}
          alt={photo.title}
          width={300}
          height={100}
        />
      ))}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil harum eum laudantium similique a sint adipisci commodi. Nobis recusandae temporibus optio ipsam culpa magnam laudantium dolores? Dolorem, officiis tenetur!
      Dolore accusamus ipsum suscipit ex quod nostrum sit eaque placeat repellat ea quo rem distinctio corrupti eum exercitationem, provident minima dignissimos neque sunt facere quisquam accusantium ad numquam obcaecati. Molestiae?</p>
    </>
  );
}
