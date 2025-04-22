/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);

  // Function to reset cards to initial state
  const resetCards = () => {
    setCards(cardData);
  };

  return (
    <div className="grid h-[300px] w-full place-items-center">
      {cards.length === 0 ? (
        // Show a button or a message when all cards are swiped
        <button
          onClick={resetCards}
          className="p-2 bg-tertiary text-primary rounded hover:bg-secondary font-futura transition-all duration-300 ease-in-out hover:scale-105"
        >
          Reset Cards
        </button>
      ) : (
        cards.map((card) => {
          return (
            <Card key={card.id} cards={cards} setCards={setCards} {...card} />
          );
        })
      )}
    </div>
  );
};

const Card = ({ id, url, setCards, cards }) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.img
      src={url}
      alt="Placeholder alt"
      className="h-44 w-44 md:h-52 md:w-52 lg:h-60  lg:w-60 origin-bottom rounded-lg border-4 border-secondary object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(255 255 255 / 0.5), 0 8px 10px -6px rgb(255 255 255 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default SwipeCards;

import Javascript from "../assests/javascript.jpeg";
import Reactjs from "../assests/reactjsjpeg.jpeg";
import Nodejs from "../assests/Nodejs.jpeg";
import MongoDb from "../assests/MongoDb.webp";
import Html from "../assests/html.jpeg";
import Css from "../assests/Css.jpeg";
import TailwindCss from "../assests/tailwindcss.jpg";
import CPlusPlus from "../assests/CplusPlus.jpg";
import Sql from "../assests/Sql.jpeg";
import C from "../assests/C-transformed.png";
import ReactRedux from "../assests/ReactRedux.jpg";
import Firebase from "../assests/firebase.jpg";
import RabbitMq from "../assests/RabbitMQ.png"
import BullMq from "../assests/BullMq.png"
import Grpc from "../assests/grpc.png";
import Aws from "../assests/Aws.png";
import Redis from "../assests/Redis.png";
import SocketIo from "../assests/SocketIO.png"

const cardData = [
  {
    id: 1,
    url: TailwindCss,
  },
  {
    id: 2,
    url: Css,
  },
  {
    id: 3,
    url: Html,
  },
  {
    id: 4,
    url: Firebase,
  },
  {
    id: 5,
    url: MongoDb,
  },
  {
    id: 6,
    url: Nodejs,
  },
  {
    id: 7,
    url: ReactRedux,
  },
  {
    id: 8,
    url: Reactjs,
  },
  {
    id: 9,
    url: Javascript,
  },
  {
    id: 10,
    url: Sql,
  },
  {
    id: 11,
    url: C,
  },
  {
    id: 12,
    url: CPlusPlus,
  },
  {
    id:13,
    url:RabbitMq
  },{
    id:14,
    url:BullMq
  },{
    id:15,
    url:Grpc,
  },{
    id:16,
    url:Aws,
  },
  {
    id:17,
    url:Redis
  },
  {
    id:18,
    url:SocketIo
  }
];
