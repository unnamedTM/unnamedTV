
import Profile from '../comps/Profile'


export const Founders_Profiles = [
  {
    id: 2,
    comp: (
      <Profile
        img = "/images/alex.png"
        title={'"Alex"'}
        text = "I don't know shit. But thats cool"
        button="Instagram | Loser"
        buttonHref="https://instagram.com/xunderal"
        marginTop = "-45px"
        height = "291px"
        insta="alex"
        youtube = "alex"
        twitter="alex"
        github="alex"
        twitch="alex"
        position = "Social Media Manager | COO"
      />
    ),
  },
  {
    id: 1,
    comp: (
      <Profile
        img = "/images/haha.jpg"
        title="Kappa"
        text={
            <>
                <a href = "https://kappa.unnamedsoftware.com" > Kappa </a> {" "}
                 one of the most inspirational programmers in the entire century. 😔
            </>
        }
        button="Twitter"
        buttonHref = "https://twitter.com/kappac0dex"
        marginTop = "-23px"
        height = "268px"
        twitch="kappa"
        insta="kappa"
        github="kappa"
        twitter="kappa"
        youtube = "kappa"
        position = "CEO"
      />
    ),
  },
  {
    id: 3,
    comp: (
      <Profile
        img = "/images/dimitri.jpg"
        title="Dimitris"
        text={<>
          Call me 📞
        </>}
        button="Twitter | lol"
        buttonHref = "https://instagram.com/dimoryw/"
        marginTop = "0px"
        height = "150px"
        github= "lingduck"
        twitch = "lingduck"
        twitter = "lingduck"
        youtube = "lingduck"
        position = "Lead Programming Engineer | CTO"
        // position = "JANITOR | VIRGIN"
      />
    ),
  },
 
];

export const Teams_Profiles = [{
        id: 1,
        comp: ( <
            Profile img = "https://pyxis.nymag.com/v1/imgs/8f3/7a4/1f1367f36279714e6ab2ab75a55b5bd2ff-15-tyler-the-creator.rsquare.w1200.jpg"
            title = "lol"
            text = "myname"
            button = "button" /
            >
        ),
    },
    {
        id: 2,
        comp: ( <
            Profile img = "https://pyxis.nymag.com/v1/imgs/8f3/7a4/1f1367f36279714e6ab2ab75a55b5bd2ff-15-tyler-the-creator.rsquare.w1200.jpg"
            title = "2 c"
            text = "myname"
            button = "button" /
            >
        ),
    },
    {
        id: 3,
        comp: ( <
            Profile img = "https://pyxis.nymag.com/v1/imgs/8f3/7a4/1f1367f36279714e6ab2ab75a55b5bd2ff-15-tyler-the-creator.rsquare.w1200.jpg"
            title = "3 c"
            text = "myname"
            button = "button" /
            >
        ),
    },

];


