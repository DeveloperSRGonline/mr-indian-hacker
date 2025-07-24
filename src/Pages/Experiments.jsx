import React from "react";
import "./Experiments.scss";
import { CardCarousel } from "../components/ui/card-carousel";
const mockups = [
  {
    title: "100Kg Eno Vs Water - 100% Real",
    img: "https://i.ytimg.com/vi/xssnmM1gH1I/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCxkN0D716j6cs0pzk1_EJl48J9rw",
    link: "https://youtu.be/xssnmM1gH1I?si=ab8x08vM9TQe_uog",
  },
  {
    title: "Finally We Found This ?",
    img: "https://i.ytimg.com/vi/DEtNELkJRJg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBMHkBijo9vOn5V7AmebjszrNeXhQ",
    link: "https://youtu.be/DEtNELkJRJg?si=28MxA1Za2qWZKoGf",
  },
  {
    title: "My Top Secret Underground Bunker...",
    img: "https://i.ytimg.com/vi/mvwrfgnweOM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAbqmsYnFUkIFqrJp4JDybZjK_7Hw",
    link: "https://youtu.be/mvwrfgnweOM?si=K11GVYBiMz1LKiay",
  },
  {
    title: "Durability Test Of A Fan ",
    img: "https://i.ytimg.com/vi/W3Ck_SFdAbs/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBAUfludGFjk43v6n9RXp-4fC3SjQ",
    link: "https://youtu.be/W3Ck_SFdAbs?si=8GgWOpxbrXi5yPNK",
  },
  {
    title: "Hide And Seek Challenge In 200000 Balloons",
    img: "https://i.ytimg.com/vi/9-80U342hCI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCj21ob-LQ9oUSU4YqmbCcNUyAjMQ",
    link: "https://youtu.be/9-80U342hCI?si=T7w8o_iiB7m4xxM1",
  },
  {
    title: "1000 Kg - Watermelon Juice Making Challenge",
    img: "https://i.ytimg.com/vi/jSSD2IHNZF0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAtQhQLSgvCnkYf2_CTEZKudF4FBQ",
    link: "https://youtu.be/jSSD2IHNZF0?si=1YjJ1RiJHLjE4RPz",
  },
];

const Experiments = () => {
  return (
    <section className="experiments-section">
      <h2>Latest Experiments</h2>
      <CardCarousel items={mockups} />
    </section>
  );
};

export default Experiments;
