const InfiniteSlider = () => {

  return (
    <div className="w-[40%] overflow-hidden inline-flex flex-nowrap">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <img src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Facebook" />
        </li>
        <li>
          <img src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Disney" />
        </li>
        <li>
          <img src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Airbnb" />
        </li>
        <li>
          <img src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="Apple" />
        </li>
        <li>
          <img src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="Spark" />
        </li>
        <li>
          <img src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="Samsung" />
        </li>
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        <li>
          <img src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Facebook" />
        </li>
        <li>
          <img src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Disney" />
        </li>
        <li>
          <img src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Airbnb" />
        </li>
        <li>
          <img src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="Apple" />
        </li>
        <li>
          <img src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="Spark" />
        </li>
        <li>
          <img src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg" alt="Samsung" />
        </li>
      </ul>
    </div>
  )
}

export default InfiniteSlider;
