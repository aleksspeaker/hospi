import ButtonEllipse from "../../ButtonEllipse/ButtonEllipse";
import ControlBullet from "../../ControlBullet";
import NumericalCategory from "../../NumericalCategory/NumericalCategory";

import "./Complete360ServiceScreen.scss";

interface INumCat {
  amount: number;
  category: string;
  id: number;
}

export function Complete360ServiceScreen({ mockObj }) {
  return (
    <section className="Complete-service-screen">
      <div className="Complete-service-screen__intro-controls">
        <div className="Complete-service-screen__illustration">
          <img
            // tslint:disable-next-line:max-line-length
            src="https://res.cloudinary.com/dops-digital/image/upload/v1551691842/Hospitality%20Hub/360-service-illustration.svg"
            alt=""
          />
        </div>

        <h3>
          <span>Complete</span>
          360 service
        </h3>

        <p>
          <span>We offer a complete 360 service from</span>
          <span>establishing the bigger picture through to</span>
          crafting the finer details.
        </p>
        <div className="Complete-service-screen__controls">
          <ControlBullet amount={1} category={"Strategy"} />
          <ControlBullet amount={2} category={"Design"} />
        </div>
      </div>
      <div className="Complete-service-screen__steps">
        <section>
          {mockObj.numericalCategories.map((item: INumCat) => {
            return (
              <NumericalCategory
                amount={item.amount + "."}
                category={item.category}
                withDot={true}
                key={item.id}
              />
            );
          })}
        </section>

        <ButtonEllipse
          classes={"Button-ellipse_orange with-pdf"}
          text={"download presentation"}
        />
        <ButtonEllipse
          classes={"Button-ellipse_gray arrow-dark"}
          text={"for companies"}
          routeTo={"/"}
        />
      </div>
    </section>
  );
}

const mockResponse = {
  numericalCategories: [
    {
      amount: 1,
      category: "Digital Strategy",
      id: 0,
    },
    {
      amount: 2,
      category: "Content Strategy",
      id: 1,
    },
    {
      amount: 3,
      category: "Revenue Strategy",
      id: 2,
    },
    {
      amount: 4,
      category: "Brand Experience",
      id: 3,
    },
    {
      amount: 5,
      category: "Guest Experience",
      id: 4,
    },
    {
      amount: 6,
      category: "Guest Profiling",
      id: 5,
    },
    {
      amount: 7,
      category: "Customer Journey Map",
      id: 6,
    },
    {
      amount: 8,
      category: "Data Analysis",
      id: 7,
    },
  ],
};

Complete360ServiceScreen.defaultProps = {
  mockObj: mockResponse,
};
