import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="mt-20 p-20">
      <div className="flex gap-5 justify-center">
        <div>
          <Image src="/card-image4.jpg" alt="Card-1" height={1068} width={1200} className="h-[300px] md:h-[600px] w-full shadow-2xl rounded-lg"/>
        </div>
        <div>
          <Image src="/card-image5.jpg" alt="Card-2" height={1068} width={900} className="h-[300px] md:h-[600px] w-full shadow-2xl rounded-lg"/>
        </div>
      </div>

      <div className="pt-10 m-0 flex gap-5 justify-center">
        <div>
          <Image src="/card-image1.jpg" alt="Card-1" height={896} width={600} className="h-full object-cover w-full shadow-2xl rounded-lg"/>
        </div>
        <div>
          <Image src="/card-image2.jpg" alt="Card-2" height={896} width={600} className="h-full shadow-2xl rounded-lg"/>
        </div>
        <div>
          <Image src="/card-image3.jpg" alt="Card-2" height={896} width={600} className="h-full object-cover w-full shadow-2xl rounded-lg"/>
        </div>
      </div>
    </main>
  );
}
