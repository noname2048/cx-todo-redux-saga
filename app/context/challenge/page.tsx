"use client";

import { places } from "@/data/places";
import { getImageUrl } from "@/utils/getImageUrl";
import { useContext, useState } from "react";
import { Place } from "@/types/place";
import { CheckboxContext } from "@/context/CheckboxContext";
import Image from "next/image";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <CheckboxContext.Provider value={isLarge}>
        <List />
      </CheckboxContext.Provider>
    </>
  );
}

function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place({ place }: { place: Place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }: { place: Place }) {
  const isChecked = useContext(CheckboxContext);
  const imageSize = isChecked ? 150 : 100;
  return (
    <Image
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
