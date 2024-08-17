import Slider from 'react-infinite-logo-slider'

const Component = () => {

  return (
    <div
    className='flex justify-center items-center h-36 text-white py-8 w-[30rem]'
    >
      <Slider
      width="150px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBoderColor={'#fff'}
    >
      <Slider.Slide>
        <img src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="any" className='w-36' />
      </Slider.Slide>
      <Slider.Slide>
        <img src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="any2" className='w-36' />
      </Slider.Slide>
      <Slider.Slide>
        <img src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="any3" className='w-36' />
      </Slider.Slide>
      <Slider.Slide>
        <img src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="any3" className='w-36' />
      </Slider.Slide>
    </Slider>
    </div>
  )
}

export default Component