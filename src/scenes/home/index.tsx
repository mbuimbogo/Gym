import { SelectedPage } from "@/shared/type";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SPonsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10  md:h-full md:pb-0">
      {/* Image and main header */}
      <div className="">
        {/* main header */}
        <div className="">
          {/* Headings */}
          <div className="">
            <div className="">
              <div className="">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p>
              Unrivaled Gym. Unparalled Training Fitnes Classes. World Class
              Studios to get the Body Shapes That you Dream of..Get Your Dream
              Body Now.
            </p>
          </div>
          {/* Actions */}
          <div className="">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/* image */}
        <div className="">
            <img alt="home-pageGraphic" src={HomePageGraphic}/>
        </div>
      </div>

     {/* Sponsors */}
     {isAboveMediumScreens && (
        <div className="">
            <div className="">
                <div className="">
                    <img src={SponsorRedBull} alt="redbull-sponsor" />
                    <img src={SponsorForbes} alt="forbes-sponsor" />
                    <img src={SponsorFortune} alt="fortune-sponsor" />

                </div>
            </div>
        </div>
     )}
    </section>
  );
};

export default Home;
