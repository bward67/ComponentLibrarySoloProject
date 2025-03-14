import Badge from "./badgeComponent/Badge";
import Banner from "./bannerComponent/index.js";
import { IoCloudUploadOutline } from "react-icons/io5";
import Card from "./cardComponent/index.js";
import "./cardComponent/card.css";
import "./testimonial1Component/testimonial.css";
import Testimonial from "./testimonial1Component/index.js";
import Testimonial2 from "./testimonial2Component/index.js";
import "./testimonial2Component/testimonial2.css";
import logoMain from "./assets/Mark.svg";
import logoWork from "./assets/Work.svg";
import logoCation from "./assets/cation.svg";
import path from "./assets/Path.svg";

function App() {
  return (
    <>
      {/* <section className="badge-component">
        <div className="badge-container">
          <Badge shape="square" color="gray">
            Badge
          </Badge>
          <Badge shape="square" color="red">
            Badge A
          </Badge>
          <Badge shape="square" color="yellow">
            Badge B
          </Badge>
          <Badge shape="square" color="green">
            Badge C
          </Badge>
          <Badge shape="square" color="blue">
            Badge D
          </Badge>
          <Badge shape="square" color="purple">
            Badge E
          </Badge>
          <Badge shape="square" color="pink">
            Badge F
          </Badge>
        </div>

        <div className="badge-container">
          <Badge shape="pill" color="gray">
            Pill
          </Badge>
          <Badge shape="pill" color="red">
            Pill A
          </Badge>
          <Badge shape="pill" color="yellow">
            Pill B
          </Badge>
          <Badge shape="pill" color="green">
            Pill C
          </Badge>
          <Badge shape="pill" color="blue">
            Pill D
          </Badge>
          <Badge shape="pill" color="purple">
            Pill E
          </Badge>
          <Badge shape="pill" color="pink">
            Pill F
          </Badge>
        </div>
      </section>*/}

      {/* <section className="banner-container">
        <Banner status="success">
          <Banner.Title status="success">Congratulations!</Banner.Title>

          <Banner.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            earum!
          </Banner.Paragraph>
        </Banner>

        <Banner status="warning">
          <Banner.Title status="warning">Attention </Banner.Title>
        </Banner>

        <Banner status="error">
          <Banner.Title status="error">
            There is a problem with your application
          </Banner.Title>
        </Banner>

        <Banner status="neutral">
          <Banner.Title status="neutral">Update available</Banner.Title>

          <Banner.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            numquam rem possimus incidunt laborum placeat cupiditate.
          </Banner.Paragraph>
        </Banner>

        <Banner>
          This banner has no status, or title or paragraph. That is why it looks
          so boring!
        </Banner>
      </section> */}

      <Card>
        <div className="card-icon-container">
          <IoCloudUploadOutline />
        </div>
        <Card.Title>Easy Deployment</Card.Title>
        <Card.Paragraph>
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
          magna sit morbi lobortis.
        </Card.Paragraph>
      </Card>

      {/* <Testimonial>
        <div className="testimonial-image">
          <img
            src="https://s3-alpha-sig.figma.com/img/ebbd/218e/43da4fc0a30598c1777461ca480d0fde?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NtvPF6zdfZcp5Om2ZfOjNmEAi9XDi27gZiCYTv6b7DbfI7J575nTRNqwQB83IGQpXMziffl3NkPC~ioywWexFV7Sgwx3p0mLb4hygZ~zyJTx4UurssGKSRAfwRqBp-I1ZUaUELFpj9HkzFDdCko4E-L8hTrABkXFqRsC1c3DKRoWiiDSSprVWMJnFtUch4HPITGcLVtfqsycdXDpp9ghhSG7H4VCiOgVNrEsesxOU-le0SZX5Rxg3v6rXaEM1BtVXccIhxlYgdz4teZwPKAiaqJbOlZSnFLZRIs97432EzvVEbn2D4iLYC1GWqLhwSDUxV9WtIBu1I2HailXbPu1Og__"
            alt="avatar image"
            className="img"
          />
        </div>
        <Testimonial.Content>
          <Testimonial.Quote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
            nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
            adipiscing nunc urna, sit.
          </Testimonial.Quote>
          <Testimonial.Name>May Andersons</Testimonial.Name>
          <Testimonial.Position>Workcation, CTO</Testimonial.Position>
        </Testimonial.Content>
      </Testimonial> */}

      {/* <Testimonial2>
        <div className="testimonial-image2">
          <img src={logoMain} alt="logo" className="logo-main" />
          <div className="logo-content">
            <img src={logoWork} alt="logo" className="logo-work" />
            <img src={logoCation} alt="logo" className="logo-cation" />
          </div>
        </div>
        <Testimonial2.Content>
          <Testimonial2.Quote>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
            nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
            adipiscing nunc urna, sit."
          </Testimonial2.Quote>
          <div className="name-position-container">
            <Testimonial2.Name>May Andersons</Testimonial2.Name>
            <img className="path" src={path} alt="slash"></img>
            <Testimonial2.Position>Workcation, CTO</Testimonial2.Position>
          </div>
        </Testimonial2.Content>
      </Testimonial2> */}

      {/* <Testimonial2>
        <div className="testimonial-image2">
          <img src={logoMain} alt="logo" className="logo-main" />
        </div>
        <Testimonial2.Content>
          <Testimonial2.Quote>
            "I tried this with just 1 logo and I don't know about you but I
            think it looks pretty darn good."
          </Testimonial2.Quote>
          <div className="name-position-container">
            <Testimonial2.Name>Barb Morrison</Testimonial2.Name>
            <img className="path" src={path} alt="slash"></img>
            <Testimonial2.Position>Dublin Docklands, CEO</Testimonial2.Position>
          </div>
        </Testimonial2.Content>
      </Testimonial2> */}
    </>
  );
}

export default App;
