
import Image from 'next/image';
import band from '../../public/band.jpg';
import seminar from '../../public/seminar.jpg';
import Modal from '@/components/Popup';

export default function Splashscreen() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex px-8 py-4 w-full bg-[#240750] items-center justify-between">
          <h1 className="text-white font-bold text-[35px] max-md:text-[20px]">
            INOICAIN
          </h1>
          <div>
            <Modal/>
          </div>
        </div>
        <div className="flex justify-center">
          <video
            height="h-screen"
            controls={false}
            loop={true}
            muted={true}
            autoPlay={true}
            className="w-[100%]"
          >
            <source src="/iklan/iklan.mp4" type="video/mp4" />
          </video>
        </div>

        <h1 className="mt-20  text-center text-[#240750] text-[55px] max-sm:text-[40px] font-extrabold">
          WE ARE INOICAIN
        </h1>
        <div className=" flex max-lg:flex-col items-center gap-5 justify-center mt-32 max-sm:mt-162 px-40  max-lg:px-10">
          <Image src={band} alt="" className="w-[300px] rounded-lg" />
          <p className="text-wrap text-[20px] text-justify font-semibold">
            Kami menyediakan tiket untuk berbagai jenis acara, mulai dari konser
            musik, festival, pertunjukan teater, pameran seni, acara olahraga,
            hingga seminar dan workshop. Apapun minat Anda, kami punya tiketnya!
            Anda bisa menemukan acara lokal maupun internasional di satu tempat.
          </p>
        </div>
        <div className=" flex max-lg:flex-col items-center gap-5 justify-center mt-32 px-40 max-lg:px-10">
          <Image src={seminar} alt="" className="w-[300px] rounded-lg" />
          <p className="text-wrap text-[20px] text-justify font-semibold">
            Dapatkan harga tiket terbaik dengan penawaran eksklusif yang hanya
            tersedia di website kami. Kami sering mengadakan diskon, promo, dan
            bundling tiket untuk memberikan nilai lebih bagi Anda. Dengan
            berlangganan newsletter kami, Anda akan menjadi yang pertama
            mengetahui penawaran spesial dan event menarik.
          </p>
        </div>
      </div>
    </>
  );
}
