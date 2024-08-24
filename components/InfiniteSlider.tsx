import Image from 'next/image';
import ForeinCircles from '@public/images/Forein_Circles.png';
import SunnahGuy from '@public/images/sunnahguy_white.jpg';
import OliveTree from '@public/images/olivetree.jpg';
import Faithfuel from '@public/images/faithfuel.svg';
import Quranly from '@public/images/Quranly.png';
import Syndeed from '@public/images/syndeed.webp';
import Wondamix from '@public/images/wondamix.webp';
import DsKitchen from '@public/images/DsKitchen.png';

const InfiniteSlider = () => {

  return (
    <div className="flex overflow-hidden flex-nowrap">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <img
            src={SunnahGuy.src}
            alt="The Sunnah Guy"
            width={79}
            height={24}
            style={{ borderRadius: '50%' }}
          />
        </li>
        <li>
          <img
            src={OliveTree.src}
            alt="Olive Tree Events"
            width={79}
            height={24}
            style={{ borderRadius: '50%' }}
          />
        </li>
        <li>
          <img
            src={Faithfuel.src}
            alt="Faithfuel"
            width={79}
            height={24}
          />
        </li>
        <li>
          <img
            src={Quranly.src}
            alt="Quranly"
            width={79}
            height={24}
            style={{ borderRadius: '50%' }}
          />
        </li>
        <li>
          <img
            src={ForeinCircles.src}
            alt="Forein Circles"
            width={79}
            height={24}
            style={{ borderRadius: '30%' }}
          />
        </li>
        <li>
          <img
            src={Syndeed.src}
            alt="Syndeed"
            width={79}
            height={24}
            style={{ filter: 'invert(1)' }}
          />
        </li>
        <li>
          <img
            src={Wondamix.src}
            alt="Wondamix"
            width={79}
            height={24}
            style={{ borderRadius: '50%' }}
          />
        </li>
        <li>
          <img
            src={DsKitchen.src}
            alt="DsKitchen"
            width={79}
            height={24}
            style={{ borderRadius: '40%' }}
          />
        </li>
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
      <li>
          <img
            src={SunnahGuy.src}
            alt="The Sunnah Guy"
            width={79}
            height={24}
            style={{ borderRadius: '50%' }}
          />
        </li>
        <li>
          <img
            src={OliveTree.src}
            alt="Olive Tree Events"
            width={79}
            height={24}
            style={{ borderRadius: '50%' }}
          />
        </li>
        <li>
          <img
            src={Faithfuel.src}
            alt="Faithfuel"
            width={79}
            height={24}
          />
        </li>
        <li>
          <img
            src={Quranly.src}
            alt="Quranly"
            width={79}
            height={24}
            style={{ borderRadius: '50%' }}
          />
        </li>
        <li>
          <img
            src={ForeinCircles.src}
            alt="Forein Circles"
            width={79}
            height={24}
            style={{ borderRadius: '30%' }}
          />
        </li>
        <li>
          <img
            src={Syndeed.src}
            alt="Syndeed"
            width={79}
            height={24}
            style={{ filter: 'invert(1)' }}
          />
        </li>
        <li>
          <img
            src={Wondamix.src}
            alt="Wondamix"
            width={79}
            height={24}
            style={{ borderRadius: '50%' }}
          />
        </li>
        <li>
          <img
            src={DsKitchen.src}
            alt="DsKitchen"
            width={79}
            height={24}
            style={{ borderRadius: '40%' }}
          />
        </li>
      </ul>
    </div>
  )
}

export default InfiniteSlider;
