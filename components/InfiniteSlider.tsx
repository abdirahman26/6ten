import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
  } from "@radix-ui/react-icons";
  
  const LOGOS = [
    <FigmaLogoIcon width={100} height={100} className="text-slate-800" />,
    <FramerLogoIcon width={100} height={100} className="text-slate-800" />,
    <SketchLogoIcon width={100} height={100} className=" text-slate-800" />,
    <TwitterLogoIcon width={100} height={100} className="text-slate-800" />,
    <GitHubLogoIcon width={100} height={100} className="text-slate-800" />,
    <VercelLogoIcon width={100} height={100} className="text-slate-800" />,
    <NotionLogoIcon width={100} height={100} className="text-slate-800" />,
    <DiscordLogoIcon width={100} height={100} className="text-slate-800" />,
    <InstagramLogoIcon width={100} height={100} className="text-slate-800" />,
    <LinkedInLogoIcon width={100} height={100} className="text-slate-800" />,
  ];
  
  export const InfiniteSlider = () => {
    return (
      <div className="relative m-auto w-[500px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*10)]">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              style={{ marginLeft: "50px", marginRight: "50px" }}
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[225px] items-center justify-center"
              style={{ paddingLeft: "50px", paddingRight: "50px" }}
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    );
  };
  